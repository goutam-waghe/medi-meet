
from fastapi import APIRouter, Depends, HTTPException  , status , Request , UploadFile , File , Form
from sqlalchemy.orm import Session
from app.schemas.availability import AvailabilityCreate ,SlotCreate
from app.utils.auth import isDoctor
from app.database import get_db 
from app.models.doctoravailability import Availability ,Slot
from datetime import datetime, timedelta, date as dt_date
from app.models.specialization import Specialization
from app.models.doctor import Doctor
import cloudinary.uploader

router = APIRouter(
    prefix="/doctor",        
    tags=["doctor"],   
    dependencies=[Depends(isDoctor)],      
)


@router.post("/availability/", response_model=AvailabilityCreate)
def create_availability(availability: AvailabilityCreate, db: Session = Depends(get_db)):
    db_availability = Availability(
        doctor_id=availability.doctor_id,
        availability_day=availability.availability_day,
        available=availability.available
    )
    db.add(db_availability)
    db.commit()
    db.refresh(db_availability)
    return db_availability




@router.post("/slots/", response_model=SlotCreate)
def create_slot(slot: SlotCreate, db: Session = Depends(get_db)):
    
    existing_slot = db.query(Slot).filter(
        Slot.availability_id == slot.availability_id,
        Slot.start_time == slot.start_time,
        Slot.end_time == slot.end_time
    ).first()

    if existing_slot:
        raise HTTPException(status_code=400, detail="Slot already exists")

    
    db_slot = Slot(
        availability_id=slot.availability_id,
        start_time=slot.start_time,
        end_time=slot.end_time,
        is_booked=False
    )
    db.add(db_slot)
    db.commit()
    db.refresh(db_slot)
    return db_slot



@router.delete("/slots/{slot_id}")
def delete_slot(slot_id: int, db: Session = Depends(get_db)):
    slot = db.query(Slot).filter(Slot.id == slot_id).first()

    if not slot:
        raise HTTPException(status_code=404, detail="Slot not found")

    db.delete(slot)
    db.commit()
    db.close()

    return {"message": "Slot deleted successfully"}

# doctor details 
@router.post("/doctor-details" , status_code=status.HTTP_200_OK)
def doctor_details(request: Request,specialization_id: int = Form(...), experience: int = Form(...), description: str = Form(...), fees: int = Form(...),certificate_pdf: UploadFile = File(...), image:UploadFile = File(...) , db: Session = Depends(get_db)): 
    user = request.state.user
    doctor = db.query(Doctor).filter(Doctor.user_id == user.id).first()
    if doctor:
       raise HTTPException(status_code=status.HTTP_409_CONFLICT , detail="doctor profile exits with this account") 
    category = db.query(Specialization).filter(Specialization.id == specialization_id).first()
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND , detail="category not found")

    # pdf updaload
    upload_result = cloudinary.uploader.upload(
        certificate_pdf.file,
        resource_type="raw",   # RAW for PDF
        folder="doctor_certificates"
    )
    pdf_url = upload_result.get("secure_url")

   # image velidation
    if image.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(
            status_code=400,
            detail="Only JPEG or PNG images allowed."
        )
    # image uplaod
    upload_result =  cloudinary.uploader.upload(
        image.file,
        folder="doctor_images",
        # public_id=name,     # optional
        resource_type="image"
    )
    image_url =  upload_result.get("secure_url")

    doctor = Doctor(
        user_id = user.id ,
        specializationId = category.id ,
        experience = experience ,
        description = description,
        fees = fees ,
        certificate_pdf =pdf_url ,
        image = image_url
    )
    doctor.profile_submitted = True
    db.add(doctor)
    db.commit()
    db.refresh(doctor)

    return {
        "message":"doctor detail succcessfully saved" ,
        "doctor":doctor
    }
    


# get all categories

@router.get("/doctor-me")
def get_doctor_exits(request :Request , db:Session =Depends(get_db)):
    user = request.state.user
    doctor = db.query(Doctor).filter(Doctor.user_id == user.id).first()
    return {
        "doctor":doctor
    }