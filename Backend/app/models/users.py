
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
    password = Column(String, nullable=False)
    city = Column(String, nullable=False)
    phone_number = Column(String)
    role = Column(String, default="user")
    status = Column(Boolean, default=True)


class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id" ,ondelete="CASCADE"), nullable=False)
    specialization = Column(String, nullable=False)
    experience = Column(Integer)
    description = Column(String)
    fees = Column(Integer)
    certificate_pdf = Column(String)
    status = Column(Boolean, default=True)
    approved = Column(Boolean , default = False)





