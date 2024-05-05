from rest_framework import serializers
from .models import CustomUser, Service, Schedule, Booking


class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True)  # Set password as write-only

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'full_name', 'email', 'contact', 'is_staff', 'is_active', 'password']
        read_only_fields = ['id'] 

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            **validated_data)
        return user


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'rate']


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id', 'start_time', 'end_time']


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'client', 'service', 'schedule', 'hostel', 'room', 'notes', 'amount']