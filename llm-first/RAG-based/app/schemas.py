from pydantic import BaseModel

class QueryRequest(BaseModel):
    question: str

class QueryResponse(BaseModel):
    question: str
    context: str
    answer: str


class SuggestResponse(BaseModel):
    answer :str
    