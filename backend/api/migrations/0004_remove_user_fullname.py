# Generated by Django 5.0.3 on 2024-08-01 07:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_user_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='fullname',
        ),
    ]
