from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.generics import (CreateAPIView)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from ..serializers import UserSerializer, TokenSerializer

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
    
class GetUserInfoByTokenAPIView(APIView):
    serializer_class = TokenSerializer

    def post(self, request, *args, **kwargs):
        token = request.POST["key"]
        try:
            user = Token.objects.get(key=token).user
        except:
            return Response({
            "error":f"no user for token {token}"
        }, status=400)
        return Response({
            "username":user.username
        })