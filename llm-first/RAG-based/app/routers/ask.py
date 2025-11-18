from fastapi import APIRouter
from schemas import QueryRequest, QueryResponse
from graph import workflow


router = APIRouter(prefix="/Ask" ,tags=["/ask-question"])

@router.post("/ask", response_model=QueryResponse)
def ask(req: QueryRequest):
    result = workflow.invoke({"question": req.question})
    return QueryResponse(
        question=req.question,
        context=result["context"],
        answer=result["answer"]
    )
