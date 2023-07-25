from django.contrib import admin
from .models import (Anime, 
                     Episode, 
                     AnimeWatchHistory,
                     FavouriteAnime,
                     Comment,
                     AnimeDistributionSubscription,
                     TelegramUser)

# Register your models here.
admin.site.register(Anime)
admin.site.register(Episode)
admin.site.register(AnimeWatchHistory)
admin.site.register(FavouriteAnime)
admin.site.register(Comment)
admin.site.register(TelegramUser)
admin.site.register(AnimeDistributionSubscription)