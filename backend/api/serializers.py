from rest_framework import serializers
from .models import Anime, Episode
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]

    def save(self, **kwargs):
        username = self.validated_data["username"]
        password = self.validated_data["password"]
        User.objects.create_user(username=username, password=password)

class AnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = "__all__"

class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = "__all__"

   