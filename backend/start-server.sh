#!/bin/bash
python manage.py migrate
gunicorn --bind 0.0.0.0:80 site_copy.wsgi