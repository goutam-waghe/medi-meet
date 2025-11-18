
from app.database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey

class Specialization(Base):
     __tablename__ = "specialization"
     id = Column(Integer, primary_key=True, index=True) 
     name = Column(String, nullable=False)

