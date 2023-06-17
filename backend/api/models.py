from django.db import models
from django.dispatch import receiver
import os

# Create your models here.
class Anime(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to="images/")
    
    def __str__(self):
        return f'{self.name}'

class Episode(models.Model):
    name = models.CharField(max_length=100, unique=True)
    episode_number = models.SmallIntegerField(null=False, blank=False)
    episode = models.FileField(upload_to="videos/", null=False, blank=False)
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE)
    
# delete episode when Episode is deleted
@receiver(models.signals.post_delete, sender=Episode)
def auto_delete_file_on_change(sender, instance, **kwargs):
    if instance.episode:
        if os.path.isfile(instance.episode.path):
            os.remove(instance.episode.path)   

# delete image when Anime is deleted
@receiver(models.signals.post_delete, sender=Anime)
def auto_delete_file_on_change(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)   