from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from ..serializers import AnimeWatchHistorySerializer, AnimeSerializer
from ..models import Anime
from ..pagination import StandardResultsSetPagination

class AppendUserAnimeWatchHistoryCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = AnimeWatchHistorySerializer

class UserAnimeWatchHistoryListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = AnimeSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        user = self.request.user
        return Anime.objects.filter(animewatchhistory__user=user).order_by("-animewatchhistory__timestamp")
