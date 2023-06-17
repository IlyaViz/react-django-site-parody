FROM python:alpine3.17

RUN pip install django
RUN pip install djangorestframework
RUN pip install Pillow

WORKDIR /backend

COPY ./ ./

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]