from pydantic import BaseModel 


class DoctorDeatilsModel(BaseModel):
    specailization_id:int
    experience:int
    description:str
    fees:int
    certificate_pdf:str
        
class DoctorProfileRequest(BaseModel):
    id : str