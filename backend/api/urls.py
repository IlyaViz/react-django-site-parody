from django.urls import path
from .views.documentation import Documentation
from .views.user import (UserCreateAPIView, 
                         TokenAPIView, 
                         ValidateTokenAPIView,
                         GetUserInfoAPIView,
                         AppendUserAnimeWatchHistoryCreateAPIView,
                         GetUserAnimeWatchHistoryListAPIView,
                         AddUserFavouriteAnimeCreateAPIView,
                         GetUserFavouriteAnimesListAPIView,
                         RemoveUserFavouriteAnimeAPIView
                        )
from .views.anime import   (AnimeCreateAPIView,
                            AnimeRetrieveAPIView, 
                            LastAnimesListApiView,
                            SearchAnimeByNameListAPIView)
from .views.episode import (EpisodeCreateAPIView, 
                            GetEpisodesListApiView, 
                            GetEpisodeVideoAPIView)
from .views.documentation import TestAPIView
from .views.comment import GetCommentsListAPIView, AddCommentCreateAPIView


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
    path("remove_user_favourite_anime/<int:pk>", RemoveUserFavouriteAnimeAPIView.as_view()),

    path("create_anime", AnimeCreateAPIView.as_view()),
    path("get_anime/<int:pk>", AnimeRetrieveAPIView.as_view()),
    path("get_new_animes/<int:count>", LastAnimesListApiView.as_view()),
    
    path("add_episode/", EpisodeCreateAPIView.as_view()),
    path("get_episodes/<int:anime_pk>", GetEpisodesListApiView.as_view()),
    path("get_episode_video/<int:episode_pk>", GetEpisodeVideoAPIView.as_view()),

    path("search_anime_by_name/<str:name_query>", SearchAnimeByNameListAPIView.as_view()),

    path("add_comment", AddCommentCreateAPIView.as_view()),
    path("get_comments/<str:type>/<int:commented_object_id>", GetCommentsListAPIView.as_view()),

    path("test", TestAPIView.as_view())
]
