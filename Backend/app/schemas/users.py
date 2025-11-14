from pydantic import BaseModel ,EmailStr 

class UserBase(BaseModel):
    name: str
    email: EmailStr
    city: str
    phone_number :str
    

class UserCreate(UserBase):
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    city: str
    role: str

    class Config:
        orm_mode = True