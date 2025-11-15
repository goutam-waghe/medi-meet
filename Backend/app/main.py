from fastapi import FastAPI
from app.routers import users , publicapis
from app.database import Base , engine


app = FastAPI()

app.include_router(users.router)
app.include_router(publicapis.router)


Base.metadata.create_all(bind=engine)
@app.get("/")
async def root():
    return {"message": "Hello World"}