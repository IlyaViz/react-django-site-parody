from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.generics import (CreateAPIView, 
                                     ListAPIView,
                                     DestroyAPIView)
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from ..models import Anime, FavouriteAnime, TelegramUser
from ..serializers import ( UserSerializer, 
                            AnimeSerializer,
                            FavouriteAnimeSerializer)
from ..pagination import StandardResultsSetPagination

class UserCreateAPIView(CreateAPIView):
    serializer_class = UserSerializer

class TokenAPIView(APIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        username = request.data["username"]
        password = request.data["password"]
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
        result = {}
        user = request.user
        try:
            telegram_user = TelegramUser.objects.get(user=user)
            result.update({"telegram_chat_id":telegram_user.chat_id})
        except:
            pass

        result.update({"username":user.username})

        return Response(result)
    
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
