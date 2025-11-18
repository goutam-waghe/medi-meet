
import pandas as pd
import chromadb
from sentence_transformers import SentenceTransformer

CSV_PATH = "/home/developer/Desktop/llm-first/RAG-based/data1/disease_drugs.csv"
CHROMA_PATH = "./chroma_db"
COLLECTION_NAME = "medicine_rag"
MAX_BATCH_SIZE = 5000

def batch(iterable, n=1):
    for i in range(0, len(iterable), n):
        yield iterable[i:i + n]

def ingest_csv():
    df = pd.read_csv(CSV_PATH)
    print("CSV loaded, first rows:\n", df.head())

    embed_model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
    client = chromadb.PersistentClient(path=CHROMA_PATH)

    collection = client.get_or_create_collection(name=COLLECTION_NAME)

    documents, metadatas, ids = [], [], []

    for i, row in df.iterrows():
        text = f"Disease: {row['disease']}\nDrug: {row['drug']}"
        documents.append(text)
        metadatas.append({"disease": row["disease"], "drug": row["drug"]})
        ids.append(f"doc_{i}")

    embeddings = embed_model.encode(documents).tolist()

    for docs_b, metas_b, ids_b, embeds_b in zip(
        batch(documents, MAX_BATCH_SIZE),
        batch(metadatas, MAX_BATCH_SIZE),
        batch(ids, MAX_BATCH_SIZE),
        batch(embeddings, MAX_BATCH_SIZE)
    ):
        collection.add(
            documents=docs_b,
            metadatas=metas_b,
            ids=ids_b,
            embeddings=embeds_b
        )

    print("DONE! Total documents:", len(collection.get()["documents"]))

if __name__ == "__main__":
    ingest_csv()





  # payload = {"category": specialization}

    # async with httpx.AsyncClient() as client:
    #     response = await client.post(
    #         "http://127.0.0.1:8001/doctors-info",
    #         json=payload  # This sends JSON data in the body
    #     )
    # print(response)
    # return {
    #     "response": response.text
    # }
