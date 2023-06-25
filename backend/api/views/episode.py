from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response
from django.http.response import FileResponse
from django.conf import settings
import ffmpeg
import re
import os
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
    
class GetEpisodeVideo(APIView):
    def get(self, request, *args, **kwargs):
        id = kwargs["episode_pk"]
        try:
            episode_instance = Episode.objects.get(id=id)
        except:
            return Response({"error":"episode with this id not found"})
        video_path = episode_instance.episode.path

        response = FileResponse(open(video_path, "rb"))
        response["Content-Type"] = "video/mp4"
        response["Accept-Ranges"] = "bytes"

        return response
    
    def process_range_header(self, range_header):
        range_match = re.match(r'bytes=(\d+)-(\d*)', range_header)
        start = int(range_match.group(1))
        end = int(range_match.group(2))
        total = end-start+1
        return start, end, total
