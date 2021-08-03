from rest_framework import serializers
from .models import newsUpdate_Home,eventsCalender_Home,recentEvent_Home
from .models import historyText_History,chairmenICJ_History,postalAddress_Contact
from .models import Organization,Membership,downloads_Membership,objectivePurpose_Objective
from .models import scope_A_Activitie, scope_A_Sub_Activitie, scope_B_Activitie
from .models import elc_Activitie, le_Activitie

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

class postalAddressserializer(serializers.ModelSerializer):
    class Meta:
        model=postalAddress_Contact
        fields=('id','contactPerson','institutionName','streetNumber','postcodeCity','Email')

class organizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields=('id','personName_EN','positionHeld_EN','personName_DE','positionHeld_DE')

class membershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields=('id','strength','feePerson','feeFamily')

class downloadsMembershipserializer(serializers.ModelSerializer):
    class Meta:
        model=downloads_Membership
        fields=('id','membership_file')


class objectivePurposeserializer(serializers.ModelSerializer):
    class Meta:
        model=objectivePurpose_Objective
        fields=('id','point_EN','point_DE')

class scope_A_serializer(serializers.ModelSerializer):
    class Meta:
        model= scope_A_Activitie
        fields=('id','heading_EN','heading_DE')

class scope_A_Sub_serializer(serializers.ModelSerializer):
    class Meta:
        model=scope_A_Sub_Activitie
        fields=('id','sub_heading_EN','sub_heading_DE') 

class scope_B_serializer(serializers.ModelSerializer):
    class Meta:
        model= scope_B_Activitie
        fields=('id','heading_EN','heading_DE')

class englishLiteratureClubserializer(serializers.ModelSerializer):
    class Meta:
        model=elc_Activitie
        fields=('id','section_EN','topic_EN','contact_EN','section_DE','topic_DE','contact_DE')

class latestActivitiesserializer(serializers.ModelSerializer):
    class Meta:
        model = le_Activitie
        fields = ('id','displayPage','title_EN','publishedOn','eventOn','reportBy_EN','sample_image','summaryText_EN',
                  'paragraphOne_EN','paragraphTwo_EN','paragraphThree_EN','title_DE','reportBy_DE','summaryText_DE',
                  'paragraphOne_DE','paragraphTwo_DE','paragraphThree_DE')
