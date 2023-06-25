from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers import EpisodeSerializer

DOCUMENTATION = {
    "/create_user":{
        "methods": ["post"],
        "parameters":["username", "password"],
        "description": "if user with this credential does not exist, then creates user. Otherwise returns error"
    },
    "/get_token":{
        "methods": ["post"],
        "parameters":["username", "password"],
        "description": "if user with this credentials exist, then create or retrieve api token. Otherwise returns error"
    },
    "create_anime/":{
        "methods": ["post"],
        "parameters":["name", "description", "image"],
        "description": "name should be unique"
    },
    "get_anime/<int:pk>/":{
        "methods": ["get"],
        "parameters":[],
        "description":"get anime by id <pk>"
    },
    "add_episode/":{
        "methods": ["post"],
        "parameters":["name", "episode number", "episode", "anime"],
        "description":"name should be unique, episode is videofile, anime is id of anime"
    },
    "get_episodes/<int:anime_pk>":{
        "methods":["get"],
        "parameters":[],
        "description":"get episodes for anime with id <anime_pk>"
    }
}

class Documentation(ListAPIView):
    def get(self, request, *args, **kwargs):
        return Response(DOCUMENTATION)
    
class TestAPIView(APIView):
    pass