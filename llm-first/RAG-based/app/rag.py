import chromadb
from sentence_transformers import SentenceTransformer
import os


CHROMA_PATH = "/home/developer/Desktop/llm-first/RAG-based/ingestion/chroma_db"  
COLLECTION_NAME = "medicine_rag"

# Load the embedding model 
embed_model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# Connect to ChromaDB and get or create the collection
client = chromadb.PersistentClient(path=CHROMA_PATH)
collection = client.get_or_create_collection(
    name=COLLECTION_NAME,
    metadata={"hnsw:space": "cosine"}
)

def retrieve_context(query: str, top_k=3) -> str:
    query_embedding = embed_model.encode([query]).tolist()
    results = collection.query(
        query_embeddings=query_embedding,
        n_results=top_k
    )
    docs = results["documents"][0]
    return "\n".join(docs)


# # --- Test the retrieval ---
# if __name__ == "__main__":
#     test_query = "fever"
#     context = retrieve_context(test_query, top_k=5)
#     print("Query:", test_query)
#     print("Retrieved context:")
#     print(context)

