def run(prompt: str):
    p = prompt.lower()
    
    # क्रॉप और सॉइल आइडेंटिफिकेशन
    crop = "unknown"
    if "wheat" in p or "गेहूँ" in p: crop = "wheat"
    if "rice" in p or "धान" in p: crop = "rice"
    if "maize" in p: crop = "maize"

    soil = "normal"
    if "clay" in p: soil = "clay"
    if "sandy" in p: soil = "sandy"
    if "loamy" in p: soil = "loamy"

    advice = []

    # स्पेसिफिक कंडीशन्स
    if crop == "wheat" and soil == "clay":
        advice.append("जलभराव से बचने के लिए जल निकासी (drainage) का उपयोग करें।")
        advice.append("नाइट्रोजन युक्त उर्वरक (Nitrogen rich fertilizer) की सलाह दी जाती है।")

    if any(x in p for x in ["low rainfall", "rainfall low", "कम बारिश", "dry"]):
        advice.append("ड्रिप सिंचाई (Drip irrigation) का प्रयोग करें।")
        advice.append("नमी बनाए रखने के लिए मल्चिंग (Mulching) का सुझाव दिया जाता है।")

    if not advice:
        advice.append("मिट्टी की जांच कराएं और स्थानीय कृषि विभाग से संपर्क करें।")

    return {
        "status": "Success",
        "data": {
            "Detected Crop": crop.capitalize(),
            "Soil Type": soil.capitalize(),
            "Expert Advice": advice
        }
    }
