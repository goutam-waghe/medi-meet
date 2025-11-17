from pydantic import BaseModel ,EmailStr 
from typing import List , Optional

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


# forget password
class RequestPasswordReset(BaseModel):
    email:EmailStr


# verify otp
class VerifyOTP(BaseModel):
    otp: str

# reset password
class ResetPassword(BaseModel):
    new_password: str


# update user 
class UpdateUser(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    city: Optional[str] = None
    phone_number :Optional[str] = None