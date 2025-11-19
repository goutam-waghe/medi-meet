from pydantic import BaseModel 

class ReviewRequest(BaseModel):
    doctor_id :int 
    rating : int
    comment : str
 
