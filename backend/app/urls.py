from django.urls import path
from . import views

urlpatterns = [
    path('users/register/', views.create_user),
    path('users/login/', views.login),
    path('users/students/', views.get_students),
]