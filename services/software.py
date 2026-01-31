def run(prompt: str):
    p = prompt.lower()
    
    if "website" in p or "वेबसाइट" in p:
        return {
            "status": "Success",
            "type": "Full-Stack Website",
            "architecture": "MERN / Next.js",
            "files": ["index.html", "style.css", "main.js", "api_handler.py"],
            "roadmap": ["UI/UX Design", "Frontend Coding", "Backend Integration"],
            "next_step": "Deploy to Vercel/Netlify"
        }

    if "android app" in p or "mobile app" in p:
        return {
            "status": "Success",
            "type": "Mobile Application",
            "platform": "Android (Kotlin/Flutter)",
            "build_target": "APK / AAB Bundle",
            "files": ["AndroidManifest.xml", "MainActivity.kt", "activity_main.xml"],
            "roadmap": ["App Logic", "API Connection", "Play Store Optimization"],
            "next_step": "Generate Signed Bundle for Play Store"
        }

    return {
        "status": "Success",
        "type": "General Blueprint",
        "info": "Custom software logic initialized. Specialized modules ready for coding."
    }
