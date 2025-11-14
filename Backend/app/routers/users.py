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

# public apis 
# register
@router.post("/register" , status_code=status.HTTP_201_CREATED)
def register_user(data:UserCreate ,  db:Session = Depends(get_db)):
    user =  get_user_by_email(db , data.email)
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(db ,data)


# login
@router.post("/login"  , status_code=status.HTTP_200_OK)
def login_user( data:UserLogin , db:Session = Depends(get_db)):
    return authenticate_user(db, data.email  , data.password)
    



# get user profile 
@router.get("/profile" , tatus_code=status.HTTP_200_OK)
def user_profile(db:Session = Depends(get_db)):
    return 




