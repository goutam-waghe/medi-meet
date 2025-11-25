from fastapi import APIRouter , Depends  , status , Request , HTTPException
from app.models.users import User
from app.utils.auth import isAdmin
from app.database import get_db
from sqlalchemy.orm import Session
from app.models.doctor import Doctor
from app.models.specialization import Specialization
from app.schemas.specialization import DoctorSpecialization 

router = APIRouter(
    prefix="/admin",        
    tags=["admin"],   
    dependencies=[Depends(isAdmin)],      
)


@router.post("/create-category" , status_code=status.HTTP_201_CREATED)
def specialization( data:DoctorSpecialization , db:Session = Depends(get_db)):
    exits = db.query(Specialization).filter(Specialization.name == data.name ).first()
    if exits:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT , detail="category aleady exits")
    
    spacial = Specialization(
        name=data.name
    )
    db.add(spacial)
    db.commit()
    db.refresh(spacial)
    return {
        "message":"category created Successfully" ,
        "category":spacial
    }


@router.put("/update-category/{category_id}" , status_code=status.HTTP_200_OK)
def specialization( category_id:int ,  data:DoctorSpecialization , db:Session = Depends(get_db)):
    category = db.query(Specialization).filter(category_id == Specialization.id).first()
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    if(data.name):
        category.name = data.name
    db.commit()
    db.refresh(category)
    return {
        "message":"category updated Successfully" ,
        
    }



 


@router.delete("/delete-category/{category_id}" , status_code=status.HTTP_200_OK)
def specialization(category_id:int , db:Session = Depends(get_db)):
    category = db.query(Specialization).filter(category_id == Specialization.id).first()
    if not (category):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND , detail="category not found")
    
    db.delete(category)
    db.commit()
    return {
        "message":"category deleted Successfully" ,
    }
 



@router.put("/doctor/{doctor_userid}")
def accept_doctor(doctor_userid: int, db: Session = Depends(get_db)):
    doctor = db.query(Doctor).filter(Doctor.user_id== doctor_userid).first()
    if not doctor:
        raise HTTPException(status_code=404, detail="Doctor not found")

    doctor.approved = True
    db.commit()
    db.refresh(doctor)
    return {"message": f"Doctor  status updated to complete", "doctor": doctor}




@router.get("/users/state")
def get_user_stats(db: Session = Depends(get_db)):
    total_users = db.query(User).count()

    total_doctors = db.query(User).filter(User.role == "doctor").count()
    total_normal_users = db.query(User).filter(User.role == "user").count()

    return {
        "total": total_users,
        "doctors": total_doctors,
        "users": total_normal_users
    }


@router.get("/doctors/verified-count")
def get_verified_doctors(db: Session = Depends(get_db)):
    verified = db.query(Doctor).filter(Doctor.approved == True).count()
    pending = db.query(Doctor).filter(Doctor.approved == False).count()

    return {
        "verified_doctors": verified,
        "pending_doctors": pending
    }



@router.get("/doctors/pending-approvel")
def get_verified_doctors(db: Session = Depends(get_db)):
    pending = db.query(Doctor).filter(Doctor.approved == False).count()

    return {
        "pending_approvel": pending
    }




@router.get("/doctors/all")
def get_all_doctors(db: Session = Depends(get_db)):
    doctors = (
        db.query(
            Doctor,
            User.name.label("user_name"),
            Specialization.name.label("specialization_name")
        )
        .join(User, Doctor.user_id == User.id)
        .join(Specialization, Doctor.specializationId == Specialization.id)
        .all()
    )

    result = []
    for doctor, user_name, specialization_name in doctors:
        result.append({
            "user_name": user_name,
            "specialization_id": doctor.specializationId,
            "specialization_name": specialization_name,
            "experience": doctor.experience,
            "description": doctor.description,
            "fees": doctor.fees,
            "certificate_pdf": doctor.certificate_pdf,
            "status": doctor.status,
            "approved": doctor.approved,
        })

    return result
