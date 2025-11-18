
from fastapi import APIRouter , Depends  , status , Request , HTTPException
from app.utils.auth import isDoctor
from app.database import get_db
from sqlalchemy.orm import Session




router = APIRouter(
    prefix="/doctor",        
    tags=["doctor"],   
    dependencies=[Depends(isDoctor)],      
)




