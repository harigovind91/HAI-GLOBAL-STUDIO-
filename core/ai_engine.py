import google.generativeai as genai
import os

# Gemini 3 Flash Configuration
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-1.5-flash') # Gemini 3 (Flash Variant)

def ask_hai(task_category, data_summary):
    prompt = f"""
    You are HAI (Hari AI), the core brain of this Global Enterprise System.
    Category: {task_category}
    Data: {data_summary}
    
    Task: Analyze this data and provide 3-4 bullet points of 'Actionable Intelligence'.
    Keep it professional, witty, and sharp.
    """
    response = model.generate_content(prompt)
    return response.text
  
