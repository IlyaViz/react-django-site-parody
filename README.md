# react-django-site-copy
studing react + django

Parody on anitype site


# To run

1(for development) - Steps:

1) set DEBUG = True in backend/site_copy/settings.py
2) docker-compose up --build
3) open backend on localhost:8000/backend | open frontend on localhost:3000

2(for production, but not finished. For now can be run for local test) - Steps:

1) set DEBUG = False in backend/site_copy/settings.py
2) apply all k8s files
3) run "helm install my-ingress-nginx ingress-nginx/ingress-nginx"
4) open backend on localhost/backend | open frontend on localhost
