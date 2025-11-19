from pydantic import BaseModel 

class PaymentRequest(BaseModel):
    user_id: int
    doctor_id: int
    fees : int
 


