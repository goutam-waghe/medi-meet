
from sqlalchemy import Column, Integer, String, DateTime, Enum, Boolean, ForeignKey, Float, DECIMAL, Text
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
    phone_no = Column(String)
    role = Column(String, default="user")
    status = Column(Boolean, default=True)




class PasswordResetToken(Base):
    __tablename__ = "password_reset_tokens"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    otp = Column(String)
    expires_at = Column(DateTime)
    is_used = Column(Boolean, default=False)
