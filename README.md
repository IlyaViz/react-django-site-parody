# react-django-site-copy
studing react + django

Parody on anitype site


# To run:
Either docker-compose up 

Or 

Steps:

1) pull
2) run backend server:
- activate venv
- python manage.py runserver 0.0.0.0:8000 (port can be changed in frontend/src/api/Constant) 
3) change in frontend/src/api/Constants backendUrl ip to local ip of computer on which you run backend server
4) run frontend:
- npm start 
