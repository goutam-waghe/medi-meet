from fastapi import FastAPI
from app.routers import users , publicapis , admin , doctor
from app.database import Base , engine
from fastapi.middleware.cors import CORSMiddleware

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


Base.metadata.create_all(bind=engine)
@app.get("/")
async def root():
    return {"message": "Hello World"}