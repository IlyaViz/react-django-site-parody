import os

TOKEN = "5776698149:AAEFmN4J5n3nbf8f_th8LeuYo3XMwVHoKrE"
BACKEND_IP = os.environ.get("BACKEND_IP", "127.0.0.1:8000") 
BACKEND_URL = f'http://{BACKEND_IP}/backend/api/'
HEADERS = {
    "Authorization": "Token 8b5e0e923022d9ff9c792b6dc548859b737b7a0d"
}
BOT_KEYBOARD_OPTIONS = ["/chat_id"]
