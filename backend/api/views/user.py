from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.generics import (CreateAPIView, 
                                     ListAPIView)
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from ..models import Anime, FavouriteAnime
from ..serializers import ( UserSerializer, 
                            AnimeSerializer,
                            AnimeWatchHistorySerializer,
                            FavouriteAnimeSerializer)

class UserCreateAPIView(CreateAPIView):
    serializer_class = UserSerializer

class TokenAPIView(APIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is None:
            return Response({"error":"user with this username or password does not exist"}, status=400)
        token = Token.objects.get_or_create(user=user)
        return Response({
            "token":str(token[0])
        })
    
class ValidateTokenAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        return Response({
            "valid":True
        })
    
class GetPrivateUserInfoAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        user = request.user
        return Response({
            "username":user.username
        })
    
class GetPublicUserInfoAPIView(APIView):

    def get(self, request, *args, **kwargs):
        id = request.GET.get("id", None)
        username = request.GET.get("username", None)
        user = None
        if id is not None:
            user = User.objects.get(id=id)
        elif username is not None:
            user = User.objects.get(username=username)
    
        if user is None:
            return Response({
                "error":"user not found"
            })

        return Response({
            "username":user.username
        })


class AppendUserAnimeWatchHistoryCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = AnimeWatchHistorySerializer

class GetUserAnimeWatchHistoryListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = AnimeSerializer

    def get_queryset(self):
        user = self.request.user
        return Anime.objects.filter(animewatchhistory__user=user).order_by("-animewatchhistory__timestamp")

class GetUserFavouriteAnimesListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = AnimeSerializer

    def get_queryset(self):
        user = self.request.user
        return Anime.objects.filter(favouriteanime__user=user)

class AddUserFavouriteAnimeCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = FavouriteAnimeSerializer

class RemoveUserFavouriteAnimeAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        anime_id = self.kwargs["pk"]
        FavouriteAnime.objects.get(user=user, anime=anime_id).delete()
        return Response({"anime":anime_id})
