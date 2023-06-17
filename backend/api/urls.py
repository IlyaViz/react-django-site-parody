from django.urls import path
from .views.documentation import Documentation
from .views.user import UserCreateAPIView, TokenCreateAPIView
from .views.anime import AnimeCreateAPIView, AnimeRetrieveAPIView
from .views.episode import EpisodeCreateAPIView, GetEpisodesListApiView

app_name = 'api'

urlpatterns = [
    path("", Documentation.as_view()),

    path("create_user", UserCreateAPIView.as_view()),

    path("get_token", TokenCreateAPIView.as_view()),
    
    path("create_anime", AnimeCreateAPIView.as_view()),
    path("get_anime/<int:pk>", AnimeRetrieveAPIView.as_view()),
    
    path("add_episode/", EpisodeCreateAPIView.as_view()),
    path("get_episodes/<int:anime_pk>", GetEpisodesListApiView.as_view())
]
