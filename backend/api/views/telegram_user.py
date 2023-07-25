from rest_framework.generics import CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from ..serializers import TelegramUserSerializer
from ..models import TelegramUser


class TelegramUserCreateAPIView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    serializer_class = TelegramUserSerializer
    
class TelegramUserDestroyAPIView(DestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        favourite_anime = TelegramUser.objects.get(user=user)
        self.perform_destroy(favourite_anime)
        return Response({"user":user.username})