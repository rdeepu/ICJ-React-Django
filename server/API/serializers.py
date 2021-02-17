from rest_framework import serializers
from .models import newsUpdate_Home,eventsCalender_Home,recentEvent_Home
from .models import historyText_History,chairmenICJ_History

class newsUpdatesserializer(serializers.ModelSerializer):
    class Meta:
        model = newsUpdate_Home
        fields = ('id','newsUpdates_EN','newsUpdates_DE')

class eventsCalenderserializer(serializers.ModelSerializer):
    class Meta:
        model = eventsCalender_Home
        fields = ('id','date','time','duration','events_EN','events_DE')

class recentEventserializer(serializers.ModelSerializer):
    class Meta:
        model = recentEvent_Home
        fields = ('id','image','img_description_EN','img_description_DE')

class historyTextserializer(serializers.ModelSerializer):
    class Meta:
        model = historyText_History
        fields = ('id', 'historyText_EN','historyText_DE')

class chairmenICJserializer(serializers.ModelSerializer):
    class Meta:
        model = chairmenICJ_History
        fields = ('id','timePeriod','chairmen_EN','viceChairmen_EN','chairmen_DE','viceChairmen_DE')