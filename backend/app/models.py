from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None, **extra_fields):
        if not username:
            raise ValueError('The username must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, password, **extra_fields)


class CustomUser(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contact = models.CharField(max_length=15)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username



class Service(models.Model):
    title = models.CharField(max_length=150, unique=True, null=False)
    description = models.CharField(max_length=255, null=False)
    rate =  models.FloatField(default=0)

class Schedule(models.Model):
    start_time = models.TimeField(null=False)
    end_time = models.TimeField(null=False)

    class Meta:
        unique_together = (("start_time", "end_time"),)

class Booking(models.Model):
    client = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    time = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    hostel = models.CharField(max_length=100, null=False)
    room = models.CharField(max_length=50, null=False)
    notes = models.CharField(max_length=255, null=True)
    amount = models.BooleanField(null=False, default=0)

