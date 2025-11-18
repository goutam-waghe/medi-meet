from fastapi import APIRouter , Depends  , status , Request , HTTPException
from app.utils.auth import isAdmin
from app.schemas.doctor import DoctorDeatilsModel
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


@router.get("/get-all-categories" , status_code=status.HTTP_200_OK)
def specialization( db:Session = Depends(get_db)):
    categories = db.query(Specialization).all()
    return {
        "message":"category created Successfully" ,
        "category":categories
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
 

