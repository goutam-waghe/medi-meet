from fastapi import FastAPI
# from schemas import QueryRequest, QueryResponse
# from graph import workflow
from routers import ask , suggest_doctor
app = FastAPI(title="Medicine RAG Assistant")


app.include_router(ask.router)
app.include_router(suggest_doctor.router)


@app.get("")
def helloAI():
    return {"message":"hello AI"}
