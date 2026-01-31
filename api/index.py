from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
import os

# Vercel के लिए पाथ सेटिंग्स
app = Flask(__name__, template_folder='../', static_folder='../')
app.secret_key = os.environ.get("SECRET_KEY", "HAI_GLOBAL_ADMIN_2026")

# AI Setup
api_key = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-pro')

# --- ROUTES ---

@app.route('/')
def welcome_page():
    # सबसे पहले 'welcome.html' (Starfield Animation) लोड होगा
    return render_template('welcome.html')

@app.route('/studio')
def main_studio():
    # जब यूजर 'Enter Core' पर क्लिक करेगा, तब 'index.html' खुलेगा
    return render_template('index.html')

@app.route('/chat_live', methods=['POST'])
def run_advanced_engine():
    try:
        data = request.json
        cat = data.get('category', 'Global Intelligence')
        user_query = data.get('prompt', '')

        master_prompt = (
            f"USER CONTEXT: Global User interacting with HAI (Hari AI).\n"
            f"EXPERT MODE: {cat}.\n"
            f"INSTRUCTION: Act as a world-class authority. Provide complex solutions.\n"
            f"QUERY: {user_query}"
        )

        response = model.generate_content(master_prompt)
        return jsonify({"result": response.text})
    except Exception as e:
        return jsonify({"result": f"HAI Engine Error: {str(e)}"})

# Vercel को 'application' ऑब्जेक्ट की तलाश रहती है
application = app
