from fastapi import APIRouter , status , Depends  , HTTPException , Request
from sqlalchemy.orm import Session
from app.models.review import Review
from app.database import get_db
from app.utils.auth import isUser
from app.schemas.review import ReviewRequest


router = APIRouter(
    prefix="/review",        
    tags=["user_eview"],   
    dependencies=[Depends(isUser)],      
)



@router.post("/create-review")
def create_review(request : Request, data : ReviewRequest , db : Session = Depends(get_db) ):
    print("hi")
    review_detail = Review(
        user_id   = request.state.user.id ,
        doctor_id = data.doctor_id ,
        rating = data.rating,
        comment = data.comment
    )
    db.add(review_detail)
    db.commit()
    db.refresh(review_detail)
    db.close()

    return {
        "message":" review create  succcessfully" ,
        "data": review_detail
    }