from fastapi import APIRouter , Depends , HTTPException
from schemas import QueryRequest 
from model import get_doctor_category
import httpx


router = APIRouter(prefix="/api" ,tags=["/doctor_suggest"])


@router.post("/suggest_doctor" ,)
async def suggest_doctor(data:QueryRequest):
    specialization = get_doctor_category(data)
    print(specialization)
        
    payload = {"category": specialization}

    async with httpx.AsyncClient() as client:
        response = await client.post(
                "http://127.0.0.1:8001/doctors-info",
                json=payload  # This sends JSON data in the body
            )
        print(response)
        return {
            "response": response.text
        }

  


