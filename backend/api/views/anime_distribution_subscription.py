from rest_framework.generics import CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from ..serializers import AnimeDistributionSubscriptionSerializer
from ..models import AnimeDistributionSubscription, User, TelegramUser
from ..pagination import StandardResultsSetPagination

class AnimeDistributionSubscriptionCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = AnimeDistributionSubscriptionSerializer

class AnimeDistributionSubscriptionDestroyAPIView(DestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        anime_id = self.kwargs["pk"]
        favourite_anime = AnimeDistributionSubscription.objects.get(user=user, anime=anime_id)
        self.perform_destroy(favourite_anime)
        return Response({"anime":anime_id})

class GetAnimeDistributionSubscriberTelegramChatIdsAPIView(APIView):
    permission_classes = [IsAdminUser]
    authentication_classes = [TokenAuthentication]
    pagination_class = StandardResultsSetPagination

    def get(self, request, *args, **kwargs):
        anime_id = kwargs["anime_pk"]
        chat_ids = []
        # temporary solution with raw sql 
        for instance in TelegramUser.objects.raw(f"SELECT api_telegramuser.id, chat_id FROM api_telegramuser JOIN api_animedistributionsubscription ON api_telegramuser.user_id=api_animedistributionsubscription.user_id WHERE anime_id={anime_id}"):
            chat_ids.append(instance.chat_id)
        return Response(chat_ids)