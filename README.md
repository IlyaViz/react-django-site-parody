# react-django-site-copy
studing react + django

Parody on anitype site


# To run

1 - Steps:

1)docker-compose up 
2) connect to backend container and run "python manage.py migrate" ( if runs for the first time )
3) open backend on localhost:8000 / open frontend on localhost:3000


2 - Steps:

1) pull
2) run backend server:
- create venv and install requirements.txt
- activate venv
- python manage.py runserver 0.0.0.0:8000 (port can be changed in frontend/src/api/Constant) 
3) run frontend:
- npm install
- npm start
4) open backend on localhost:8000 / open frontend on localhost:3000


3 - Steps:

1) apply all files in k8s
2) connect to backend container and run "python manage.py migrate" ( if runs for the first time )
3) open backend on localhost:30800 / open frontend on localhost:30300
