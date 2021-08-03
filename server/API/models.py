from django.db import models

# Create your models here.

class newsUpdate_Home(models.Model):
    newsUpdates_EN = models.CharField(max_length = 500)
    newsUpdates_DE = models.CharField(max_length = 500)

class eventsCalender_Home(models.Model):
    date = models.DateField()
    time = models.TimeField()
    duration = models.CharField(max_length=20)
    events_EN = models.CharField(max_length=100)
    events_DE = models.CharField(max_length=100)

class recentEvent_Home(models.Model):
    image = models.FileField(upload_to = 'recentEvents/',default = None)
    img_description_EN = models.CharField(max_length = 100)
    img_description_DE = models.CharField(max_length = 100)

class historyText_History(models.Model):
    historyText_EN = models.TextField()
    historyText_DE = models.TextField()

class chairmenICJ_History(models.Model):
    timePeriod = models.CharField(max_length = 50)
    chairmen_EN = models.CharField(max_length = 100)
    viceChairmen_EN = models.CharField(max_length = 100)
    chairmen_DE = models.CharField(max_length=100)
    viceChairmen_DE = models.CharField(max_length=100)

class postalAddress_Contact(models.Model):
    contactPerson = models.CharField(max_length=100)
    institutionName = models.CharField(max_length=100)
    streetNumber = models.CharField(max_length=100)
    postcodeCity = models.CharField(max_length=100)
    Email = models.EmailField()

class Organization(models.Model):
    personName_EN = models.CharField(max_length=100)
    positionHeld_EN = models.CharField(max_length=100)
    personName_DE = models.CharField(max_length=100)
    positionHeld_DE = models.CharField(max_length=100)

class Membership(models.Model):
    strength = models.CharField(max_length = 20)
    feePerson = models.CharField(max_length = 20)
    feeFamily = models.CharField(max_length = 20)

class downloads_Membership(models.Model):
    membership_file = models.FileField(upload_to = 'downloads/', default=None)

class objectivePurpose_Objective(models.Model):
    point_EN = models.TextField() 
    point_DE = models.TextField()

class scope_A_Activitie(models.Model):
    heading_EN = models.TextField()    
    heading_DE = models.TextField()

class scope_A_Sub_Activitie(models.Model):
    sub_heading_EN = models.TextField()
    sub_heading_DE = models.TextField()

class scope_B_Activitie(models.Model):
    heading_EN = models.TextField()    
    heading_DE = models.TextField()

class elc_Activitie(models.Model):
    section_EN = models.TextField(default=None,blank=True,null=True)
    topic_EN = models.TextField(default=None,blank=True,null=True)
    contact_EN = models.TextField(default=None,blank=True,null=True)
    section_DE = models.TextField(default=None,blank=True,null=True)
    topic_DE = models.TextField(default=None,blank=True,null=True)
    contact_DE = models.TextField(default=None,blank=True,null=True)

class le_Activitie(models.Model):
    displayPage=models.TextField(default=1)
    title_EN = models.TextField()
    publishedOn = models.DateField(auto_now_add=True)
    eventOn = models.TextField()
    reportBy_EN = models.TextField(default=None)
    sample_image = models.FileField(upload_to = 'recentEvents/',default = None)
    summaryText_EN = models.TextField()
    paragraphOne_EN = models.TextField(default=None,blank=True,null=True)
    paragraphTwo_EN = models.TextField(default=None,blank=True,null=True)
    paragraphThree_EN = models.TextField(default=None,blank=True,null=True)
    
    title_DE = models.TextField() 
    reportBy_DE = models.TextField(default=None) 
    summaryText_DE = models.TextField()
    paragraphOne_DE = models.TextField(default=None,blank=True,null=True)
    paragraphTwo_DE = models.TextField(default=None,blank=True,null=True)
    paragraphThree_DE = models.TextField(default=None,blank=True,null=True)



    


