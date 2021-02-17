from django.shortcuts import render

from .models import newsUpdate_Home,eventsCalender_Home,recentEvent_Home
from .models import historyText_History,chairmenICJ_History

from .serializers import newsUpdatesserializer,eventsCalenderserializer,recentEventserializer
from .serializers import historyTextserializer, chairmenICJserializer


from rest_framework import viewsets

# Create your views here.
class newsUpdateView(viewsets.ModelViewSet):
    serializer_class = newsUpdatesserializer
    queryset = newsUpdate_Home.objects.all()

class eventsCalenderView(viewsets.ModelViewSet):
    serializer_class = eventsCalenderserializer
    queryset = eventsCalender_Home.objects.all()

class recentEventsView(viewsets.ModelViewSet):
    serializer_class = recentEventserializer
    queryset = recentEvent_Home.objects.all()

class historyTextView(viewsets.ModelViewSet):
    serializer_class = historyTextserializer
    queryset =  historyText_History.objects.all()

class chairmenICJView(viewsets.ModelViewSet):
    serializer_class = chairmenICJserializer
    queryset = chairmenICJ_History.objects.all()