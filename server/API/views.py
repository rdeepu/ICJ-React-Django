import json

from django.db.models.query import QuerySet
from rest_framework import viewsets

from django.shortcuts import render
from django.core.mail import EmailMessage
from django.http import HttpResponse

from .models import newsUpdate_Home,eventsCalender_Home,recentEvent_Home
from .models import historyText_History,chairmenICJ_History
from .models import postalAddress_Contact
from .models import Organization,Membership,downloads_Membership,objectivePurpose_Objective
from .models import scope_A_Activitie,scope_A_Sub_Activitie,scope_B_Activitie
from .models import elc_Activitie,le_Activitie

from .serializers import newsUpdatesserializer,eventsCalenderserializer,recentEventserializer
from .serializers import historyTextserializer, chairmenICJserializer
from .serializers import postalAddressserializer,organizationSerializer
from .serializers import membershipSerializer,downloadsMembershipserializer,objectivePurposeserializer
from .serializers import scope_A_serializer, scope_A_Sub_serializer,scope_B_serializer 
from .serializers import englishLiteratureClubserializer, latestActivitiesserializer

# Create your views here. 
        
def contactUs(request):
    if request.method == 'POST':   
        formData = json.loads(request.body)         
        send_mail = EmailMessage(formData['subject'],formData['areaQuery'] + '\n\n' + formData['fullName'] + '\n' + formData['mailEmail'],formData['mailEmail'],['deepu.rpillai@gmail.com'])
        send_mail.send()   
        return HttpResponse('Message sent...')

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

class postalAddressView(viewsets.ModelViewSet):
    serializer_class = postalAddressserializer
    queryset = postalAddress_Contact.objects.all()

class organizationView(viewsets.ModelViewSet):
    serializer_class = organizationSerializer
    queryset = Organization.objects.all()

class membershipView(viewsets.ModelViewSet):
    serializer_class = membershipSerializer
    queryset = Membership.objects.all()

class downloadsView(viewsets.ModelViewSet):
    serializer_class=downloadsMembershipserializer
    queryset=downloads_Membership.objects.all()

class objectivePurposeView(viewsets.ModelViewSet):
    serializer_class=objectivePurposeserializer
    queryset=objectivePurpose_Objective.objects.all()

class scopeActivities_A_View(viewsets.ModelViewSet):
    serializer_class = scope_A_serializer
    queryset = scope_A_Activitie.objects.all()

class scope_SubActivities_A_View(viewsets.ModelViewSet):
    serializer_class = scope_A_Sub_serializer
    queryset = scope_A_Sub_Activitie.objects.all()

class scopeActivities_B_View(viewsets.ModelViewSet):
    serializer_class = scope_B_serializer
    queryset = scope_B_Activitie.objects.all()

class englishLiteratureClubView(viewsets.ModelViewSet):
    serializer_class = englishLiteratureClubserializer
    queryset = elc_Activitie.objects.all()

class latestActivitiesView(viewsets.ModelViewSet):
    serializer_class = latestActivitiesserializer
    queryset = le_Activitie.objects.all()