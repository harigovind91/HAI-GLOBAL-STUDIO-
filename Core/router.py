# Core/router.py
# हमने आपके मॉड्यूल्स को इम्पोर्ट किया है
try:
    from modules import accounting, agriculture, software, mechanic, hosting
except ImportError:
    # अगर फाइलें अभी नहीं बनी हैं, तो सिस्टम क्रैश न हो
    pass

def route(category, prompt):
    c = category.lower()

    try:
        if "account" in c:
            return accounting.process(prompt)
        
        if "agriculture" in c:
            return agriculture.process(prompt)
        
        if "software" in c or "app" in c:
            return software.process(prompt)

        if "mechanic" in c:
            return mechanic.process(prompt)

        if "hosting" in c:
            return hosting.process(prompt)

        return {
            "status": "active",
            "message": f"Module '{c}' recognized, but logic pending attachment."
        }
        
    except Exception as e:
        return {"status": "error", "message": f"Routing failed: {str(e)}"}
          
