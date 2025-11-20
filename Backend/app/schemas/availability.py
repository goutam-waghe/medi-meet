from pydantic import  BaseModel
from typing import Optional
from datetime import time


class AvailabilityCreate(BaseModel):
    doctor_id: int
    availability_day: str
    available: bool

class SlotCreate(BaseModel):
    availability_id: int
    start_time: str
    end_time: str
