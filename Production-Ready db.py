import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# ENVIRONMENT VARIABLES से URL उठाएंगे, वरना डिफ़ॉल्ट SQLite यूज़ करेंगे
# Vercel पर हम Postgres का URL डालेंगे, लोकल पर ये 'accounts.db' बनाएगा
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./accounts.db")

if DATABASE_URL.startswith("sqlite"):
    # SQLite के लिए 'check_same_thread' जरूरी है
    engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
else:
    # PostgreSQL के लिए स्टैंडर्ड इंजन
    engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# डेटाबेस सेशन पाने के लिए Dependency (FastAPI में उपयोग के लिए)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
      
