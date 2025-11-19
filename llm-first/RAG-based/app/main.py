from fastapi import FastAPI
from model import detect_intent , medical_question
from schemas import QueryRequest, QueryResponse
# from graph import workflow
from routers import ask_route 
from routers import suggest_doctor_router
from routers .ask_route import ask
from routers.suggest_doctor_router import suggest_doctor
app = FastAPI(title="Medicine RAG Assistant")



app.include_router(ask_route.router)
app.include_router(suggest_doctor_router.router)


@app.get("")
def helloAI():
    return {"message":"hello AI"}


@app.post("/chat")
async def chat(req: QueryRequest):

    question = req.question
    intent = detect_intent(question)
    print("Intent:", intent)


    if intent == "doctor_suggestion":
        req = QueryRequest(question=question)
        return await suggest_doctor(req)

    
    if intent == "drug_info":
        req = QueryRequest(question=question)
        result = ask(req) 
        # result = ask(question)
        return {
            "answer": result.answer
        }

    
    if intent == "medical_question":
        result = medical_question(question)
        return result

    
    if intent == "out_of_scope":
        return {
            "answer": "Sorry, this question is outside my knowledge domain."
        }



