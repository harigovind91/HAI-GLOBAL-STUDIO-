from db import SessionLocal
from models import Journal

def get_bank_summary():
    db = SessionLocal()
    try:
        # बैंक अकाउंट से जुड़ी सारी डेबिट और क्रेडिट एंट्रीज
        bank_entries = db.query(Journal).filter(Journal.account.ilike('%bank%')).all()
        
        deposits = sum(e.debit for e in bank_entries)
        withdrawals = sum(e.credit for e in bank_entries)
        current_balance = deposits - withdrawals
        
        return {
            "status": "Success",
            "bank_balance": round(current_balance, 2),
            "total_deposits": round(deposits, 2),
            "total_withdrawals": round(withdrawals, 2)
        }
    finally:
        db.close()
