from django.urls import path
from .views.documentation import Documentation
from .views.user import (UserCreateAPIView, 
                         TokenAPIView, 
                         ValidateTokenAPIView,
                         GetUserInfoAPIView,
                         AppendUserAnimeWatchHistoryCreateAPIView,
                         GetUserAnimeWatchHistoryListAPIView,
                         AddUserFavouriteAnimeCreateAPIView,
                         GetUserFavouriteAnimesListAPIView
                        )
from .views.anime import (  AnimeCreateAPIView,
                            AnimeRetrieveAPIView, 
                            LastAnimesListApiView)
from .views.episode import (EpisodeCreateAPIView, 
                            GetEpisodesListApiView, 
                            GetEpisodeVideoAPIView)
from .views.documentation import TestAPIView


app_name = 'api'

urlpatterns = [
    path("", Documentation.as_view()),

    path("create_user", UserCreateAPIView.as_view()),

    path("get_token", TokenAPIView.as_view()),
    path("validate_token", ValidateTokenAPIView.as_view()),
    path("get_user_info", GetUserInfoAPIView.as_view()),
    path("append_user_anime_watch_history", AppendUserAnimeWatchHistoryCreateAPIView.as_view()),
    path("get_user_anime_watch_history", GetUserAnimeWatchHistoryListAPIView.as_view()),
    path("add_user_favourite_anime", AddUserFavouriteAnimeCreateAPIView.as_view()),
    path("get_user_favourite_animes", GetUserFavouriteAnimesListAPIView.as_view()),

    path("create_anime", AnimeCreateAPIView.as_view()),
    path("get_anime/<int:pk>", AnimeRetrieveAPIView.as_view()),
    path("get_new_animes/<int:count>", LastAnimesListApiView.as_view()),
    
    path("add_episode/", EpisodeCreateAPIView.as_view()),
    path("get_episodes/<int:anime_pk>", GetEpisodesListApiView.as_view()),
    path("get_episode_video/<int:episode_pk>", GetEpisodeVideoAPIView.as_view()),

    path("test", TestAPIView.as_view())
]
