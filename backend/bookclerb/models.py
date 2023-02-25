from django.db import models

class BookClub(models.Model):
    name = models.CharField(max_length=200)
    
    
class BookClubSession(models.Model):
    session_date = models.DateField()
    
    
class Book(models.Model):
    title = models.CharField(max_length=200)
    
