# Generated by Django 4.2.2 on 2023-07-14 14:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0007_alter_episode_unique_together'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('anime', 'anime'), ('comment', 'comment')], max_length=50)),
                ('commented_object_id', models.BigIntegerField()),
                ('created_at', models.TimeField(auto_now_add=True)),
                ('updated_at', models.TimeField(auto_now=True)),
                ('content', models.CharField(max_length=1000)),
                ('commenter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
