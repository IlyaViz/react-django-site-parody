from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from ..models import Anime
from ..serializers import AnimeSerializer

class AnimeCreateAPIView(CreateAPIView):
    serializer_class = AnimeSerializer

class AnimeRetrieveAPIView(RetrieveAPIView):
    serializer_class = AnimeSerializer

    def get_queryset(self):
        return Anime.objects.all()