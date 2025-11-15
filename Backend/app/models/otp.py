
from sqlalchemy import Column, Integer, String, DateTime, Enum, Boolean, ForeignKey, Float, DECIMAL, Text
from app.database import Base

class PasswordResetToken(Base):
    __tablename__ = "password_reset_tokens"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    otp = Column(String)
    expires_at = Column(DateTime)
    is_used = Column(Boolean, default=False)

