from rest_framework.generics import CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from ..serializers import AnimeDistributionSubscriptionSerializer
from ..models import AnimeDistributionSubscription, User

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

class GetAnimeDistributionSubscribersAPIView(APIView):
    permission_classes = [IsAdminUser]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        anime_id = kwargs["anime_pk"]
        user_ids = AnimeDistributionSubscription.objects.filter(anime=anime_id).values_list("user", flat=True)
        return Response(user_ids)