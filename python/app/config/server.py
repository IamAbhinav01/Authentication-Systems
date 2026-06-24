import os
from dotenv import load_dotenv
load_dotenv()


exports = {
    "SECRET_PASS": os.getenv("SECRET_PASS")
}