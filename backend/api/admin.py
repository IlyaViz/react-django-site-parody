from django.contrib import admin
from .models import Anime, Episode, AnimeWatchHistory

# Register your models here.
admin.site.register(Anime)
admin.site.register(Episode)
admin.site.register(AnimeWatchHistory)