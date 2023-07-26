FROM python:alpine3.17

WORKDIR /telegram-bot
COPY . .
RUN pip install -r requirements.txt
ENV BACKEND_IP="172.16.0.2:8000"

CMD [ "python", "main.py" ]