from pydantic import BaseModel 

class DoctorSpecialization(BaseModel):
    name:str


class getDoctorsInfo(BaseModel):
    category:str