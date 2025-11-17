from fastapi import APIRouter , status , Depends  , HTTPException , Request
from sqlalchemy.orm import Session
from app.models.users import User
from app.database import get_db
from app.utils.auth import isUser
from app.schemas.users import UpdateUser


router = APIRouter(
    prefix="/users",        
    tags=["Users"],   
    dependencies=[Depends(isUser)],      
)

# get user profile 
@router.get("/profile" , status_code=status.HTTP_200_OK)
def user_profile(request: Request, db:Session = Depends(get_db)):
    user = request.state.user
    return {
        "message":"profle" ,
        "user":user
    }

# uppate user profile
@router.put("/update-profile" , status_code=status.HTTP_200_OK)
def user_profile(data:UpdateUser , request:Request,db:Session = Depends(get_db)):
    user = request.state.user
    userExits = db.query(User).filter(User.email == data.email).first()
    print(userExits)
    if userExits:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT , detail="this email already register with another account")
    if(data.email is not None):
        user.email = data.email
    if(data.city is not None):
        user.city = data.city
    if(data.phone_number is not None):
        user.phone_number = data.phone_number
    if(data.name is not None):
        user.name = data.name

    db.commit()
    db.refresh(user)
    return {
        "message":"update profile successfull" ,
        "user":user
    }


# delete Account
@router.delete("/delete-account" , status_code=status.HTTP_200_OK)
def delete_account(request: Request,db:Session = Depends(get_db)):
    user = request.state.user
    db.delete(user)
    db.commit()
    return {
        "message":"Account deleted" ,
    }








