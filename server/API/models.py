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
    image = models.FileField(upload_to = 'pageOne/',default = None)
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
