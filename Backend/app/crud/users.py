from app.utils.hashPaasword import hashPassword  , verify_password
from app.models.users import User
from sqlalchemy.orm import Session
from app.schemas.users import UserCreate 
from app.utils.token import create_token
from fastapi import HTTPException , status


# create user 
def create_user(db: Session, data: UserCreate):
    hashed_password = hashPassword(data.password)
    user = User(
        name=data.name,
        email=data.email,
        password=hashed_password,
        city=data.city ,
        phone_number = data.phone_number 
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return {
        "message":"Register succesfully"  ,
        "user":user
    }

# get user by email 
def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

# login user
def authenticate_user(db: Session, email , password ):
    user = get_user_by_email(db ,email )
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User Not Exits")
    
    if not verify_password(password , user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED  , detail="Invalid email or password")
    token = create_token({"email":user.email})
    print(token)
    return {
        "message":"login successfully"  ,
        "token":token
    }

