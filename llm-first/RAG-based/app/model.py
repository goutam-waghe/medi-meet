
import json

from langchain_google_genai import ChatGoogleGenerativeAI
import os
# from langchain_google_genai import ChatGoogleGenerativeAI

from langchain_core.messages import HumanMessage

from dotenv import load_dotenv
load_dotenv()


model = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.2)

def generate_answer(context: str, question: str) -> str:
    prompt = f"""
You are a knowledgeable medical assistant AI. 
Use ONLY the provided context to answer the user's question. 

CONTEXT:
{context}

QUESTION:
{question}

INSTRUCTIONS:
1. List the relevant drugs or treatments mentioned in the context.
2. Provide additional tips, precautions, or warnings that are general medical knowledge (do NOT invent drugs).
3. Be concise and clear.
4. Format your answer in a readable way, e.g., bullets or numbered lists.

ANSWER:
"""

    response = model.generate([[HumanMessage(content=prompt)]])
    # Extract text from response
    return response.generations[0][0].text
    
  



def get_doctor_category(question: str) -> str:

    prompt = f"""
You are a medical AI assistant. 
Given the user question, determine the appropriate doctor category for the disease mentioned.
Do NOT suggest drugs, treatments, or doctor names. Only return the category.

USER QUESTION:
{question}

RESPONSE FORMAT:
Return only the doctor category as plain text. Example: General Physician
"""

    response = model.generate([[HumanMessage(content=prompt)]])
    category = response.generations[0][0].text.strip()
    return category


