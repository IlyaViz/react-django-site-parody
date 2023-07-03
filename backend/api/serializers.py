from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import (Anime, 
                     Episode, 
                     AnimeWatchHistory,
                     FavouriteAnime)

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
    episode_video_url = serializers.SerializerMethodField()

    class Meta:
        model = Episode
        fields = ["id", "name", "episode_number", "episode_video_url", "anime"]

    def get_episode_video_url(self, obj):
        protocol = self.context['request'].scheme
        site_domain = self.context['request'].get_host() 
        endpoint = f'{protocol}://{site_domain}/api/get_episode_video/{str(obj.id)}'
        return endpoint

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = ["key"]
    
class AnimeWatchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = AnimeWatchHistory
        fields = ["anime"]

    def save(self, **kwargs):
        user = self.context["request"].user
        anime = self.validated_data["anime"]
        self.Meta.model.objects.create(user=user, anime=anime)

class FavouriteAnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavouriteAnime
        fields = ["anime"]

    def save(self, **kwargs):
        user = self.context["request"].user
        anime = self.validated_data["anime"]
        self.Meta.model.objects.create(user=user, anime=anime)