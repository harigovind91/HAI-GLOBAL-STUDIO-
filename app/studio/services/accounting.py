def run(prompt: str):
    try:
        words = prompt.lower().split()
        data = {"income": 0.0, "expense": 0.0, "gst": 0.0}

        # स्मार्ट लूप: अगर यूजर 'income: 5000' या 'income 5000' लिखे, दोनों चलेगा
        for i, w in enumerate(words):
            if i + 1 < len(words):
                clean_word = w.replace(":", "")
                if clean_word in data:
                    try:
                        data[clean_word] = float(words[i+1])
                    except ValueError:
                        continue

        profit = data["income"] - data["expense"]
        gst_amount = profit * (data["gst"] / 100)

        return {
            "status": "Success",
            "report": {
                "Income": f"₹{data['income']}",
                "Expense": f"₹{data['expense']}",
                "Net Profit": f"₹{profit}",
                "GST Payable": f"₹{round(gst_amount, 2)}"
            }
        }
    except Exception as e:
        return {"status": "Error", "message": str(e)}
