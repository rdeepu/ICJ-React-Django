from django.contrib import admin
from .models import newsUpdate_Home,eventsCalender_Home,recentEvent_Home
from .models import historyText_History,chairmenICJ_History

# Register your models here.

admin.site.register(newsUpdate_Home)
admin.site.register(eventsCalender_Home)
admin.site.register(recentEvent_Home)
admin.site.register(historyText_History)
admin.site.register(chairmenICJ_History)
