# react-django-site-copy
studing react + django

Parody on anitype site


# To run

1(for development) - Steps:

1) set DEBUG = True in backend/site_copy/settings.py
2) docker-compose up --build
3) (if 500 error) try to connect to backend django container and run 'python manage.py migrate'
4) open backend on localhost:8000/backend | open frontend on localhost:3000

2(for production, not finished) - Steps (won't work due to no images on docker hub):

1) set DEBUG = False in backend/site_copy/settings.py
2) apply all k8s files
3) run "helm install my-ingress-nginx ingress-nginx/ingress-nginx"
4) (if 500 error) try to connect to backend gunicorn container and run 'python manage.py migrate'
5) open backend on localhost/backend | open frontend on localhost
