
from app.database import Base
from sqlalchemy.sql import func
from sqlalchemy import Column, Integer, String, TIME, ForeignKey , Boolean


class Availability(Base):
    __tablename__ = "availability"

    id = Column(Integer, primary_key=True, index=True)
    doctor_id = Column(Integer, ForeignKey("doctors.id"), nullable=False)
    availability_day = Column(String, nullable=False)
    available = Column(Boolean, default=False, nullable=False)



class Slot(Base):
    __tablename__ = "doctor_slot"
    id = Column(Integer ,primary_key=True , index=True)
    availability_id = Column(Integer, ForeignKey("availability.id"), nullable=False)
    start_time =Column(TIME, nullable=False)
    end_time = Column(TIME, nullable=False)
    is_booked = Column(Boolean , default=False)


