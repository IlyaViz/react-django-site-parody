# react-django-site-copy
studing react + django

Parody on anitype site


# To run

1(for development) - Steps:

// for now there is bug with media files: they cannot be opened.

1) docker-compose up 
2) connect to backend container and run "python manage.py migrate" ( if runs for the first time )
3) open backend on localhost:8000 | open frontend on localhost:3000

2(for production, but not finished. For now can be run locally) - Steps:

1) apply all k8s files
2) run "helm install my-ingress-nginx ingress-nginx/ingress-nginx"
3) connect to backend container and run "python manage.py migrate" ( if runs for the first time )
4) open backend on localhost/backend | open frontend on localhost
