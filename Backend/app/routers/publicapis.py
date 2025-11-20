from fastapi import APIRouter , status , Depends  , HTTPException , Request
from sqlalchemy.orm import Session
from app.models.users import User
from app.database import get_db
from app.crud.users import create_user , get_user_by_email , authenticate_user, forgot_password_service , reset_password_service ,verify_opt_service
from app.schemas.users import UserCreate , UserLogin  , RequestPasswordReset , VerifyOTP , ResetPassword
from app.schemas.doctor import DoctorDeatilsModel ,DoctorProfileRequest
from app.models.specialization import Specialization
from app.models.doctor import Doctor
from app.models.review import Review
from app.utils.auth import isAuthenticated

router = APIRouter(
    prefix="/auth",        
    tags=["authetication"],         
)

# register
@router.post("/register" , status_code=status.HTTP_201_CREATED)
def register_user(data:UserCreate ,  db:Session = Depends(get_db)):
    user =  get_user_by_email(db , data.email)
    if user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    return create_user(db ,data)


# login
@router.post("/login"  , status_code=status.HTTP_200_OK)
def login_user( data:UserLogin , db:Session = Depends(get_db)):
    return authenticate_user(db, data.email  , data.password)

# reset passwordSpecialization
@router.post("/reset-password" , status_code=status.HTTP_200_OK)
def reset_password(data:ResetPassword , request:Request , db:Session = Depends(get_db)):
    return reset_password_service(db ,data.new_password  , request)


# foreget Password
@router.post("/forgot-password" , status_code=status.HTTP_200_OK)
async def forgot_password( data:  RequestPasswordReset,db:Session = Depends(get_db)):
    return  await forgot_password_service(db , data.email)


# verify otp
@router.post("/verify-otp" , status_code=status.HTTP_200_OK)
def verify_opt(data:VerifyOTP  , request: Request ,db:Session = Depends(get_db)):
    return verify_opt_service(db ,  data.otp , request)


# doctor deatils 

@router.post("/doctor-details" , status_code=status.HTTP_200_OK)
def doctor_details(data:DoctorDeatilsModel , db:Session = Depends(get_db) , user: User = Depends(isAuthenticated)) :  
    doctor = db.query(Doctor).filter(Doctor.user_id == user.id).first()
    if doctor:
       raise HTTPException(status_code=status.HTTP_409_CONFLICT , detail="doctor profile exits with this account") 
    category = db.query(Specialization).filter(Specialization.id == data.specailization_id).first()
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND , detail="category not found")
    
    user.role = "doctor" 
    doctor = Doctor(
        user_id = user.id ,
        specializationId = category.id ,
        experience = data.experience ,
        description = data.description,
        fees = data.fees ,
        certificate_pdf =data.certificate_pdf ,
    )
    db.add(doctor)
    db.commit()
    db.refresh(user)
    db.refresh(doctor)

    return {
        "message":"doctor detail succcessfully" ,
        "doctor":doctor
    }
    


# doctor profile 
@router.post("/doctor_profile")
def doctor_profile(data: DoctorProfileRequest, db: Session = Depends(get_db)):
    # fetch doctor
    doctor_data = db.query(Doctor).filter(Doctor.id == data.id).first()

    get_reviews = db.query(Review).filter(Review.doctor_id == data.id).all()
    get_doctor_name  = db.query(User).filter(User.id == data.id).first()
    
        
    if not doctor_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Doctor not found"
        )

    reviews_list = [
        {
            "user_id": review.user_id,
            "rating": review.rating,
            "comment": review.comment,
            "created_at": review.created_at
        }
        for review in get_reviews
    ]

    return {
        "name ": get_doctor_name.name ,
        "specialization": doctor_data.specializationId,
        "experience": doctor_data.experience,
        "fees": doctor_data.fees,
        "description": doctor_data.description,
        "reviews": reviews_list  # send the list of reviews
    }

