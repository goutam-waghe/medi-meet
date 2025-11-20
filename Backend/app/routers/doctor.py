
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.availability import AvailabilityCreate ,SlotCreate
from app.utils.auth import isDoctor
from app.database import get_db 
from app.models.doctoravailability import Availability ,Slot
from datetime import datetime, timedelta, date as dt_date


router = APIRouter(
    prefix="/doctor",        
    tags=["doctor"],   
    dependencies=[Depends(isDoctor)],      
)


@router.post("/availability/", response_model=AvailabilityCreate)
def create_availability(availability: AvailabilityCreate, db: Session = Depends(get_db)):
    db_availability = Availability(
        doctor_id=availability.doctor_id,
        availability_day=availability.availability_day,
        available=availability.available
    )
    db.add(db_availability)
    db.commit()
    db.refresh(db_availability)
    return db_availability




@router.post("/slots/", response_model=SlotCreate)
def create_slot(slot: SlotCreate, db: Session = Depends(get_db)):
    
    existing_slot = db.query(Slot).filter(
        Slot.availability_id == slot.availability_id,
        Slot.start_time == slot.start_time,
        Slot.end_time == slot.end_time
    ).first()

    if existing_slot:
        raise HTTPException(status_code=400, detail="Slot already exists")

    
    db_slot = Slot(
        availability_id=slot.availability_id,
        start_time=slot.start_time,
        end_time=slot.end_time,
        is_booked=False
    )
    db.add(db_slot)
    db.commit()
    db.refresh(db_slot)
    return db_slot



@router.delete("/slots/{slot_id}")
def delete_slot(slot_id: int, db: Session = Depends(get_db)):
    slot = db.query(Slot).filter(Slot.id == slot_id).first()

    if not slot:
        raise HTTPException(status_code=404, detail="Slot not found")

    db.delete(slot)
    db.commit()
    db.close()

    return {"message": "Slot deleted successfully"}



