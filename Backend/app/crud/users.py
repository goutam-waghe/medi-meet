from app.utils.hashPaasword import hashPassword  , verify_password
from app.models.users import User 
from app.models.doctor import Doctor
from app.models.otp import PasswordResetToken
from sqlalchemy.orm import Session
from app.schemas.users import UserCreate   
from app.utils.token import create_token , verify_token
from app.utils.generate_opt import generate_otp
from fastapi import HTTPException , status  
from datetime import datetime, timedelta
from app.external_services.email import send_email



# get user by email 
def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


# create user 
def create_user(db: Session, data: UserCreate):
    hashed_password = hashPassword(data.password)
    user = User(
        name=data.name,
        email=data.email,
        password=hashed_password,
        city=data.city ,
        role=data.role , 
        phone_number = data.phone_number 
    )

    
    db.add(user)
    db.commit()
    db.refresh(user)
    return {
        "message":"Register succesfully"  ,
        "user":user ,
    }

# login user
def authenticate_user(db: Session, email , password ):
    print(email , password)
    user = get_user_by_email(db ,email )
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User Not Exits")
    
    if not verify_password(password , user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED  , detail="Invalid email or password")
    
    
    token = create_token({"id":user.id})
    res  = {
        "message":"login successfully"  ,
        "token":token ,
        "user":user ,
    }
    if(user.role == "doctor"):
        doctor = db.query(Doctor).filter(Doctor.user_id == user.id).first()
        res["doctor"] = doctor
  

    return res


# forget password 

async def forgot_password_service(db  , email ):
    user = get_user_by_email(db , email)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    otp = generate_otp()
    expires_at = datetime.utcnow() + timedelta(minutes=10)

    token = PasswordResetToken(email=email, otp=otp, expires_at=expires_at)
    db.add(token)
    db.commit() 
    await send_email(email, otp)
    token = create_token({"id":token.id})
    return {"message":"otp send to your registered email"  , "token":token}
     

def verify_opt_service(db , otp ,request):
    token = request.headers.get("Authorization").split()[1]
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="invailed Token")
    payload = verify_token(token)
    print(payload)
    if not payload:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="invailed Token")
    
    # matched the otp
    storedOtp = db.query(PasswordResetToken).filter(PasswordResetToken.id == payload["id"]).first()

    if (not otp == storedOtp.otp):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="invaild otp")
    

    db.delete(storedOtp)
    db.commit()

    
    return {
        "Message":"your otp mached" 
    }

    


def reset_password_service(db , new_password  , request):
    token = request.headers.get("Authorization").split()[1]
    print(token)
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="invailed Token")
    payload = verify_token(token)

    print(payload)
    if not payload:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="invailed Token")
    user = get_user_by_email(db ,payload["email"])
    print(user)
    # not need to check this one we've already done this before 
    if not user: 
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED , detail="user not found")
    
    # hash the password
    hashedPassword = hashPassword(new_password)
    print(hashedPassword)
    # update password 
    user.password = hashedPassword

    # save in db 
    db.commit()
    db.refresh(user)
    return {
        "message":"password reset successfully"
    }