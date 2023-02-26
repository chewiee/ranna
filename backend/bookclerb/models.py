from django.db import models

class BookClub(models.Model):
    name = models.CharField(max_length=200)
    

class Book(models.Model):
    title = models.CharField(max_length=200)
    
    
class BookClubSession(models.Model):
    book_club = models.ForeignKey(BookClub, on_delete=models.CASCADE)
    session_date = models.DateField()
    book = models.ForeignKey(Book, blank=True, null=True, default=None, on_delete=models.SET_NULL)
    

    
