# Create your models here.

from django.db import models
from rest_framework import serializers

# message Django Model数据结构
class Message(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()

# 序列化
class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ('url', 'subject', 'body', 'pk')
