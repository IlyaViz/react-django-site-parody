from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView
from rest_framework.response import Response
from django.db.models.functions import Length
from ..pagination import StandardResultsSetPagination
from ..models import Anime
from ..serializers import AnimeSerializer

class AnimeCreateAPIView(CreateAPIView):
    serializer_class = AnimeSerializer

class AnimeRetrieveAPIView(RetrieveAPIView):
    serializer_class = AnimeSerializer

    def get_queryset(self):
        return Anime.objects.all()
    
class LastAnimesListApiView(ListAPIView):
    serializer_class = AnimeSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        return Anime.objects.order_by("-id")
    
class SearchAnimeByNameListAPIView(ListAPIView):
    serializer_class = AnimeSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        name_query = self.kwargs["name_query"]
        return Anime.objects.filter(name__contains=name_query).order_by(Length("name").asc())
