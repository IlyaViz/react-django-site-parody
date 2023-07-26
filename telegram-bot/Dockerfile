FROM python:alpine3.17

WORKDIR /telegram-bot
COPY . .
RUN pip install -r requirements.txt

CMD [ "python", "main.py" ]