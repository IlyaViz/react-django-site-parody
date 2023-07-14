from django.contrib import admin
from .models import (Anime, 
                     Episode, 
                     AnimeWatchHistory,
                     FavouriteAnime,
                     Comment)

# Register your models here.
admin.site.register(Anime)
admin.site.register(Episode)
admin.site.register(AnimeWatchHistory)
admin.site.register(FavouriteAnime)
admin.site.register(Comment)