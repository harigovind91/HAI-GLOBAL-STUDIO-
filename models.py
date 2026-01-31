from sqlalchemy import Column, Integer, Float, String, DateTime
from datetime import datetime
from db import Base

class Journal(Base):
    __tablename__ = "journal"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String) # यूजर की दी हुई तारीख
    created_at = Column(DateTime, default=datetime.utcnow) # सिस्टम की तारीख
    
    transaction_id = Column(String) # यूनिक आईडी (Link Debit/Credit)
    account = Column(String, index=True)
    category = Column(String) # e.g., "Hosting", "Salary", "Seed Purchase"
    
    debit = Column(Float, default=0.0)
    credit = Column(Float, default=0.0)
    description = Column(String, nullable=True) # छोटा नोट
  
