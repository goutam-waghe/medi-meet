from fastapi import FastAPI , Depends
from app.routers import users , publicapis , admin , doctor ,payment_route ,webhook ,review
from app.database import Base , engine
from fastapi.middleware.cors import CORSMiddleware

from app.models.doctor import Doctor 
from app.models.specialization import Specialization
from app.models.users import User
from app.schemas.specialization import getDoctorsInfo
from sqlalchemy.orm import Session
from app.database import get_db

app = FastAPI()
origins = [
    "http://localhost:5173",  # React app origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],    # allow GET, POST, OPTIONS, PUT, DELETE
    allow_headers=["*"],    # allow all headers
)
app.include_router(users.router)
app.include_router(publicapis.router)
app.include_router(admin.router)
app.include_router(doctor.router)
app.include_router(payment_route.router)
app.include_router(webhook.router)
app.include_router(review.router)




Base.metadata.create_all(bind=engine)
@app.get("/")
async def root():
    return {"message": "Hello World"}




@app.post("/doctors-info")
def get_doctors_info(data:getDoctorsInfo , db:Session = Depends(get_db)):
    category = db.query(Specialization).filter(Specialization.name == data.category).first()

    doctors =  (
         db.query(User.name, Doctor.experience, Doctor.fees)
        .join(Doctor, Doctor.user_id == User.id)
        .filter(Doctor.specializationId == category.id)
        .limit(3)
        .all()
    )
    doctor_list = [
        {"name": name, "experience": experience, "fees": fees}
        for name, experience, fees in doctors
    ]
    print(doctors)

    return {
        "info":doctor_list
    }
        