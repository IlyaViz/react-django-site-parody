# Generated by Django 4.2.2 on 2023-06-16 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='episode',
            name='episode_number',
            field=models.SmallIntegerField(default=1),
            preserve_default=False,
        ),
    ]
