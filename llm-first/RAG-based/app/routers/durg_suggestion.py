from fastapi import APIRouter
from schemas import QueryRequest, QueryResponse
from utils.durg_sug import workflow
from utils.helper import ask_core

router = APIRouter(prefix="/suggestion" ,tags=["/durg_suggestion"])

@router.post("/suggestion-durg", response_model=QueryResponse)
def suggest(req: QueryRequest):
    result = workflow.invoke({"question": req.question})
    return QueryResponse(
        # question=req.question,
        # context=result["context"],
        answer=result["answer"]
    )

