from fastapi import APIRouter , status , Depends  , HTTPException , Request
from sqlalchemy.orm import Session
from app.models.users import User
from app.database import get_db
from app.crud.users import create_user , get_user_by_email , authenticate_user, forgot_password_service , reset_password_service ,verify_opt_service
from app.schemas.users import UserCreate , UserLogin  , RequestPasswordReset , VerifyOTP , ResetPassword

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

# reset password
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