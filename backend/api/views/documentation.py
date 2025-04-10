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
            ["get_private_user_info", ["get"], [], "get private user info by token recieved in Authorization header"],
            ["get_public_user_info?id/username", ["get"], [], "get public user info by id = <id> or username = <username> in params"], 
            ["append_user_anime_watch_history", ["post"], ["anime"], "append anime taking by anime_id to history of User found by token recieved in Authorization header"],
            ["get_user_anime_watch_history", ["get"], [], "get anime watch history of User found by token recieved in Authorization header"],
            ["add_user_favourite_anime", ["post"], ["anime"], "add favourite anime to User found by token recieved in Authorization header"],
            ["get_user_favourite_animes", ["get"], [], "get favourite animes of User found by token recieved in Authorization header"],
            ["create_anime", ["post"], ["name", "description", "image"], "create new anime; image should be a file"],
            ["get_anime/<int:pk>", ["get"], [], "return anime by it's id = <pk>"],
            ["get_new_animes", ["get"], [], "return new animes"],
            # bug with that endpoint ["add_episode", ["post"], ["name", "episode_number", "anime"]],
            ["get_episodes/<int:anime_pk>", ["get"], [], "return episodes for anime with id = <anime_pk>"],
            ["remove_user_favourite_anime/<int:pk>", ["delete"], [], "delete favourite anime of User found by token recieved in Authorization header by anime's id = <pk>"],
            ["search_anime_by_name/<str:name_query>", ["get"], [], "return animes with names that contains part = <name_query>"],
            ["add_comment", ["post"], ["type", "commented_object_id", "content"], "add comment for object(anime or comment) with type = <type> and id = <commented_object_id> and content = <content>"],
            ["get_comments/<str:type>/<int:commented_object_id>", ["get"], [], "get comments for object(anime or comment) with type = <type> and id = <commented_object_id>"],
            ["create_telegram_user", ["post"], ["chat_id"], "create telegram user instance by User found by token recieved in Authorization header and chat_id"],
            ["remove_telegram_user", ["delete"], [], "delete telegram user instance by User found by token recieved in Authorization header"],
            ["subscribe_anime_distribution", ["post"], ["anime"], "subscribes to anime distribution by User found by token recieved in Authorization header and anime" ], 
            ["unsubscribe_anime_distribution/<int:pk>", ["delete"], [], "unsubscribes of anime distribution by User found by token recieved in Authorization header and anime"],
            ["get_telegram_chat_ids_of_anime_distribution_subscribers/<int:anime_pk>", ["get"], [], "return subscribers' chat ids by anime_id (admin only)"],
            ["get_new_episodes", ["get"], [], "return new episodes"]    
    
        ]
        for instance in data:
            documentation_dict = get_prettified_endpoint_documentation(*instance)
            result.append(documentation_dict)
        return Response(result)
        
class TestAPIView(APIView):
    pass