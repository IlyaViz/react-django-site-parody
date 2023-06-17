from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response
from ..models import Episode, Anime
from ..serializers import EpisodeSerializer

class EpisodeCreateAPIView(CreateAPIView):
    serializer_class = EpisodeSerializer

class GetEpisodesListApiView(ListAPIView):
    serializer_class = EpisodeSerializer

    def get_queryset(self):
        anime_id = self.kwargs['anime_pk']
        return Episode.objects.filter(anime__id=anime_id)

    def get(self, request, *args, **kwargs):
        anime_id = self.kwargs['anime_pk']
        try:
            Anime.objects.get(id=anime_id)
        except Anime.DoesNotExist:
            return Response({"error":"anime with this id does not exist"})
        return super().get(request, *args, **kwargs)