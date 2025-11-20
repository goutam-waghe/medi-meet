
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




def detect_intent(question: str) -> str:
    prompt = f"""
You are an Intent Classification AI.
Classify the user question into exactly one of the following intents:

1. doctor_suggestion → User wants a doctor, specialist, clinic or appointment.
   Example: "Suggest a doctor for skin disease", "Which doctor should I consult?"

2. drug_info → User wants medication names, drugs, treatment, dosage.
   Example: "What medicines for fever?", "Which drug is used for cough?"

3. medical_question → General medical knowledge, symptoms, diseases.
   Example: "What is diabetes?", "What are symptoms of malaria?"

4. out_of_scope → Non-medical or not related.
   Example: "Who is Ronaldo?", "Tell me a joke"

Respond ONLY with one label: doctor_suggestion, drug_info, medical_question, out_of_scope

User question: {question}

RESPONSE FORMAT:
Return only the intent as plain text. Example: doctor_suggestion, drug_info, medical_question, out_of_scope
"""

    response = model.generate([[HumanMessage(content=prompt)]])
    intent_label = response.generations[0][0].text.strip()
    return intent_label


    
    


def medical_question(question: str) -> str:
    prompt = f"""
You are a helpful medical AI assistant. 

RULES:
1. If the user's question is related to medical knowledge, symptoms, diseases, drugs, or treatments:
   - Answer accurately based on medical knowledge.
   - At the end of your answer, always include this disclaimer: 
     "Disclaimer: This information is for educational purposes only. Please consult a licensed healthcare professional before applying any advice."

2. If the user's question is not related to medicine or is out-of-scope:
   - Respond politely that you cannot provide guidance.
   - Example: "Sorry, I can only provide information related to medical topics."

Do NOT provide personal medical consultation, prescriptions, or any diagnosis.

User question:
{question}

RESPONSE FORMAT:
Return only the answer as plain text.
"""

    response = model.generate([[HumanMessage(content=prompt)]])
    answer = response.generations[0][0].text.strip()
    return answer




def drug_suggestion(context: str, question: str) -> str:
    prompt = f"""
You are a medical assistant AI.

Your task:
- The doctor writes ONLY the diagnosis of the patient.
- From the provided context, list ONLY the drug names that appear in the context.
- Do NOT add any new drugs.
- Do NOT provide explanations, tips, warnings, or extra information.
- If no drugs are mentioned, say "No drugs mentioned in context."

CONTEXT:
{context}

QUESTION:
{question}

INSTRUCTIONS:
1. Identify the diagnosis mentioned in the question.
2. Extract ONLY the drug names present in the context.
3. Respond concisely.

FORMAT:
Drugs: <comma-separated list of drugs>

ANSWER:
"""

    response = model.generate([[HumanMessage(content=prompt)]])
    return response.generations[0][0].text




   

   