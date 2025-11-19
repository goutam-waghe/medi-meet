from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from app.database import Base


class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id" ,ondelete="CASCADE"), nullable=False)
    specializationId = Column(Integer, ForeignKey("specialization.id") , nullable=False)
    experience = Column(Integer)
    description = Column(String)
    fees = Column(Integer)
    certificate_pdf = Column(String)
    status = Column(Boolean, default=True)
    approved = Column(Boolean , default = False)

