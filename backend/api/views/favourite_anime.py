from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.generics import (CreateAPIView,
                                     ListAPIView, 
                                     DestroyAPIView)
from ..serializers import AnimeSerializer, FavouriteAnimeSerializer
from ..models import Anime, FavouriteAnime
from ..pagination import StandardResultsSetPagination

class UserFavouriteAnimesListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = AnimeSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        user = self.request.user
        return Anime.objects.filter(favouriteanime__user=user)

class AddUserFavouriteAnimeCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = FavouriteAnimeSerializer

class RemoveUserFavouriteAnimeDestroyAPIView(DestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        anime_id = self.kwargs["pk"]
        favourite_anime = FavouriteAnime.objects.get(user=user, anime=anime_id)
        self.perform_destroy(favourite_anime)
        return Response({"anime":anime_id})
