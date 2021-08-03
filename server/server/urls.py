"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from API import views

router = routers.DefaultRouter()
router.register(r'newsUpdate_Home_api',views.newsUpdateView,'API')
router.register(r'eventsCalender_Home_api',views.eventsCalenderView,'API')
router.register(r'recentEvents_Home_api',views.recentEventsView,'API')
router.register(r'historyText_History_api',views.historyTextView,'API')
router.register(r'chairmenICJ_History_api',views.chairmenICJView,'API')
router.register(r'postalAddress_Contact_api',views.postalAddressView,'API')
router.register(r'organization_api',views.organizationView,'API')
router.register(r'membership_api',views.membershipView,'API')
router.register(r'downloads_api',views.downloadsView,'API')
router.register(r'objectivePurpose_Objectives_api',views.objectivePurposeView,'API')
router.register(r'scopeActivities_A_api',views.scopeActivities_A_View,'API')
router.register(r'scope_SubActivities_A_api',views.scope_SubActivities_A_View,'API')
router.register(r'scopeActivities_B_api',views.scopeActivities_B_View,'API')
router.register(r'englishLiteratureClub_api',views.englishLiteratureClubView,'API')
router.register(r'latestActivities_api', views.latestActivitiesView,'API')

urlpatterns = [
    path('admin/', admin.site.urls),   
    path('',include('API.urls')), 
    path('',include(router.urls))    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)