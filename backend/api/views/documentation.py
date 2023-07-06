from rest_framework.views import APIView
from rest_framework.response import Response

def get_prettified_endpoint_documentation(endpoint:str, 
                          methods:list, 
                          body_data:list, 
                          description:str) -> dict:
    result = {
        "endpoint":endpoint,
        "methods":methods,
        "body data":body_data,
        "description":description
    }
    return result

class Documentation(APIView):
    def get(self, request, *args, **kwargs):
        result = []
        data = [
            ["create_user", ["post"], ["username", "password"], "create user if not already exists"],
            ["get_token", ["post"], ["username", "password"], "get or create token if user exists"],
            ["validate_token", ["get"], [], "validate token recieved in Authorization header"],
            ["get_user_info", ["get"], [], "get user info by token recieved in Authorization header"],
            ["append_user_anime_watch_history", ["post"], ["anime_id"], "append anime taking by anime_id to history of User found by token recieved in Authorization header"],
            ["get_user_anime_watch_history", ["get"], [], "get anime watch history of User found by token recieved in Authorization header"],
            ["add_user_favourite_anime", ["post"], ["anime_id"], "add favourite anime to User found by token recieved in Authorization header"],
            ["get_user_favourite_animes", ["get"], [], "get favourite animes of User found by token recieved in Authorization header"],
            ["create_anime", ["post"], ["name", "description", "image"], "create new anime; image should be a file"],
            ["get_anime/<int:pk>", ["get"], [], "return anime by it's id = pk"],
            ["get_new_animes/<int:count>", ["get"], [], "return <count> new animes"],
            # bug with that endpoint ["add_episode", ["post"], ["name", "episode_number", "anime"]],
            ["get_episodes/<int:anime_pk>", ["get"], [], "return episodes for anime with id = anime_pk"],
            ["get_episode_video/<int:episode_pk>", ["get"], [], "return episode with id = episode_pk with rewind feature"],
            ["remove_user_favourite_anime/<int:pk>", ["delete"], [], "delete favourite anime of User found by token recieved in Authorization header by anime's id = pk"]
        ]
        for instance in data:
            documentation_dict = get_prettified_endpoint_documentation(*instance)
            result.append(documentation_dict)
        return Response(result)
        
class TestAPIView(APIView):
    pass