from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.database import Base
from sqlalchemy.sql import func

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    doctor_id = Column(Integer, ForeignKey("doctors.id"), nullable=False)

    stripe_payment_id = Column(String, unique=True, nullable=False)
    status = Column(String, default="pending")   # pending, completed, failed
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())