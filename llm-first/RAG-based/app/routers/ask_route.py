from fastapi import APIRouter
from schemas import QueryRequest, QueryResponse
from graph import workflow
from utils.helper import ask_core

router = APIRouter(prefix="/Ask" ,tags=["/ask-question"])






@router.post("/ask", response_model=QueryResponse)
def ask(req: QueryRequest):
    data = ask_core(req.question)
    return QueryResponse(
        question=req.question,
        context=data["context"],
        answer=data["answer"]
    )







# @router.post("/ask", response_model=QueryResponse)
# def ask(req: QueryRequest):
#     result = workflow.invoke({"question": req.question})
#     return QueryResponse(
#         question=req.question,
#         context=result["context"],
#         answer=result["answer"]
#     )