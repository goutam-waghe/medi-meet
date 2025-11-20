from langgraph.graph import StateGraph, END
from pydantic import BaseModel
from rag import retrieve_context
from model import drug_suggestion

class QAState(BaseModel):
    question: str
    context: str = ""
    answer: str = ""

graph = StateGraph(QAState)

def step_rag(state: QAState):
    state.context = retrieve_context(state.question)
    return state

def step_llm(state: QAState):
    state.answer = drug_suggestion(state.context, state.question)
    return state

graph.add_node("retrieve", step_rag)
graph.add_node("answer", step_llm)

graph.set_entry_point("retrieve")
graph.add_edge("retrieve", "answer")
graph.add_edge("answer", END)


workflow = graph.compile()







