from fastapi import APIRouter , status , Depends  , HTTPException
from sqlalchemy.orm import Session
from app.models.users import User
from app.database import get_db
from app.crud.users import create_user , get_user_by_email , authenticate_user
from app.schemas.users import UserCreate , UserLogin

router = APIRouter(
    prefix="/users",        
    tags=["Users"],         
)

# get user profile 
@router.get("/profile" , status_code=status.HTTP_200_OK)
def user_profile(db:Session = Depends(get_db)):
    return 

# get user profile 
@router.get("/profile" , status_code=status.HTTP_200_OK)
def user_profile(db:Session = Depends(get_db)):
    return 

# uppate user profile
@router.get("/profile" , status_code=status.HTTP_200_OK)
def user_profile(db:Session = Depends(get_db)):
    return 


# delete Account
@router.get("/profile" , status_code=status.HTTP_200_OK)
def delete_account(db:Session = Depends(get_db)):
    return 

# reset password






