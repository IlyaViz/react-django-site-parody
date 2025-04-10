from django.urls import path
from .views.documentation import Documentation
from .views.user import (UserCreateAPIView, 
                         TokenAPIView, 
                         ValidateTokenAPIView,
                         GetPrivateUserInfoAPIView,
                         GetPublicUserInfoAPIView)
from .views.anime import   (AnimeCreateAPIView,
                            AnimeRetrieveAPIView, 
                            LastAnimesListApiView,
                            SearchAnimeByNameListAPIView)
from .views.episode import (EpisodeCreateAPIView, 
                            EpisodesListApiView, 
                            GetNewEpisodesListAPIView)
from .views.favourite_anime import (AddUserFavouriteAnimeCreateAPIView,
                                    UserFavouriteAnimesListAPIView,
                                    RemoveUserFavouriteAnimeDestroyAPIView)
from .views.documentation import TestAPIView
from .views.comment import CommentsListAPIView, CommentCreateAPIView
from .views.telegram_user import TelegramUserCreateAPIView, TelegramUserDestroyAPIView
from .views.anime_distribution_subscription import (AnimeDistributionSubscriptionCreateAPIView, 
                                                    AnimeDistributionSubscriptionDestroyAPIView,
                                                    GetTelegramChatIdsOfAnimeDistributionSubscribersAPIView)
from .views.anime_watch_history import (AppendUserAnimeWatchHistoryCreateAPIView,
                                        UserAnimeWatchHistoryListAPIView)

app_name = 'api'

urlpatterns = [
    path("", Documentation.as_view()),

    path("create_user", UserCreateAPIView.as_view()), 
    path("get_token", TokenAPIView.as_view()),
    path("validate_token", ValidateTokenAPIView.as_view()),
    path("get_private_user_info", GetPrivateUserInfoAPIView.as_view()),
    path("get_public_user_info", GetPublicUserInfoAPIView.as_view()),
    path("add_user_favourite_anime", AddUserFavouriteAnimeCreateAPIView.as_view()),
    path("get_user_favourite_animes", UserFavouriteAnimesListAPIView.as_view()),
    path("remove_user_favourite_anime/<int:pk>", RemoveUserFavouriteAnimeDestroyAPIView.as_view()),

    path("append_user_anime_watch_history", AppendUserAnimeWatchHistoryCreateAPIView.as_view()),
    path("get_user_anime_watch_history", UserAnimeWatchHistoryListAPIView.as_view()),

    path("create_anime", AnimeCreateAPIView.as_view()),
    path("get_anime/<int:pk>", AnimeRetrieveAPIView.as_view()),
    path("get_new_animes", LastAnimesListApiView.as_view()),
    path("search_anime_by_name/<str:name_query>", SearchAnimeByNameListAPIView.as_view()),

    path("add_episode/", EpisodeCreateAPIView.as_view()),
    path("get_episodes/<int:anime_pk>", EpisodesListApiView.as_view()),
    path("get_new_episodes", GetNewEpisodesListAPIView.as_view()),

    path("add_comment", CommentCreateAPIView.as_view()),
    path("get_comments/<str:type>/<int:commented_object_id>", CommentsListAPIView.as_view()),

    path("create_telegram_user", TelegramUserCreateAPIView.as_view()),
    path("remove_telegram_user", TelegramUserDestroyAPIView.as_view()),

    path("subscribe_anime_distribution", AnimeDistributionSubscriptionCreateAPIView.as_view()),
    path("unsubscribe_anime_distribution/<int:pk>", AnimeDistributionSubscriptionDestroyAPIView.as_view()),
    path("get_telegram_chat_ids_of_anime_distribution_subscribers/<int:anime_pk>", GetTelegramChatIdsOfAnimeDistributionSubscribersAPIView.as_view()),

    path("test", TestAPIView.as_view())
]
