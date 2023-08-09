FROM python:alpine3.17

WORKDIR /backend
COPY ./ ./

RUN pip install -r requirements.txt
# we replaced db.sqlite3 to db/db.sqlite3; the next line is needed to prevent an error
RUN mkdir db
RUN python manage.py migrate

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]