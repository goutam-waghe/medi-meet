from graph import workflow 


def ask_core(question: str):
    result = workflow.invoke({"question": question})
    return {
        "context": result["context"],
        "answer": result["answer"]
    }