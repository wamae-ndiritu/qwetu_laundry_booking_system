from django.urls import path
from . import views

urlpatterns = [
    path('users/register/', views.create_user),
    path('users/login/', views.login),
    path('users/students/', views.get_students),
    path('users/staffs/', views.get_staffs),
    path('users/<int:user_id>/update/', views.update_user),
    path('users/<int:user_id>/bookings/', views.get_user_bookings),
    path('users/<int:user_id>/stats/', views.get_user_stats),
    path('services/create/', views.create_service),
    path('services/', views.get_services),
    path('services/<int:service_id>/delete/', views.delete_service),
    path('schedules/', views.get_schedules),
    path('schedules/create/', views.create_schedule),
    path('schedules/<int:schedule_id>/delete/', views.delete_schedule),
    path('bookings/new/', views.book),
    path('bookings/', views.get_bookings),
    path('admin/stats/', views.get_stats),
]