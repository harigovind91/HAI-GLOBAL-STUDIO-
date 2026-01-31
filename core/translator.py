from google.generativeai import GenerativeModel

def universal_hai_response(prompt, target_language="Hindi"):
    # Gemini 3 Flash को निर्देश
    system_instruction = f"""
    You are HAI (Hari AI). Respond in {target_language}.
    Ensure the terminology of Accounting, Banking, and Agriculture is 
    technically accurate in that specific language.
    """
    
    # AI प्रोसेसिंग
    # ... (Gemini API Call)
    return response_text
  
