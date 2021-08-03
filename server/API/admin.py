from django.contrib import admin
from .models import newsUpdate_Home,eventsCalender_Home,recentEvent_Home
from .models import historyText_History,chairmenICJ_History,postalAddress_Contact
from .models import Organization,Membership,downloads_Membership,objectivePurpose_Objective
from .models import scope_A_Activitie, scope_A_Sub_Activitie,scope_B_Activitie
from .models import elc_Activitie,le_Activitie

# Register your models here.

admin.site.register(newsUpdate_Home)
admin.site.register(eventsCalender_Home)
admin.site.register(recentEvent_Home)
admin.site.register(historyText_History)
admin.site.register(chairmenICJ_History)
admin.site.register(postalAddress_Contact)
admin.site.register(Organization)
admin.site.register(Membership)
admin.site.register(downloads_Membership)
admin.site.register(objectivePurpose_Objective)
admin.site.register(scope_A_Activitie)
admin.site.register(scope_A_Sub_Activitie)
admin.site.register(scope_B_Activitie)
admin.site.register(elc_Activitie)
admin.site.register(le_Activitie)