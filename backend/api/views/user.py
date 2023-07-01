from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.generics import (CreateAPIView)
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
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
    
class ValidateTokenAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        return Response({
            "valid":True
        })
    
class GetUserInfoAPIView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request, *args, **kwargs):
        user = request.user
        return Response({
            "username":user.username
        })