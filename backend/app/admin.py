from django.contrib import admin
from .models import CustomUser, Service, Schedule, Booking

admin.site.register(CustomUser)
admin.site.register(Service)
admin.site.register(Schedule)
admin.site.register(Booking)
