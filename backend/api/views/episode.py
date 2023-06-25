from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response
from django.http.response import FileResponse
from django.conf import settings
from ranged_fileresponse import RangedFileResponse
from wsgiref.util import FileWrapper
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
    
class GetEpisodeVideoAPIView(APIView):
    def get(self, request, *args, **kwargs):
        id = kwargs["episode_pk"]
        try:
            episode_instance = Episode.objects.get(id=id)
        except:
            return Response({"error":"episode with this id not found"})
        video_path = episode_instance.episode.path

        response = RangedFileResponse(request, open(video_path, "rb"))
        response["Content-type"] = "video/mp4"

        return response
    
