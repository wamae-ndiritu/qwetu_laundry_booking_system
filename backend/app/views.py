from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser, Service, Schedule, Booking
from .serializers import CustomUserSerializer, ServiceSerializer, ScheduleSerializer, BookingSerializer



@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        user_serializer = CustomUserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            # Generate JWT token
            refresh = RefreshToken.for_user(user)
            token = {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            return Response({"user": user_serializer.data, "token": token}, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login


@api_view(['POST'])
def login(request):
    data = request.data
    password = data.get('password', None)
    email = data.get('email', None)
    if not email:
        return Response({"message": "Email required!"}, status=status.HTTP_400_BAD_REQUEST)
    if not password:
        return Response({"message": "Password required!"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        user = CustomUser.objects.get(email=email)

        if not user.check_password(password):
            return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
        serializer = CustomUserSerializer(user)

        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        token = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

        return Response({"user": serializer.data, "token": token}, status=status.HTTP_200_OK)

    except CustomUser.DoesNotExist:
        return Response({"message": "User not found!"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_students(request):
    """
    List all students
    """
    students = CustomUser.objects.filter(is_staff=False)
    serializer = CustomUserSerializer(students, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user(request, user_id):
    if request.method == 'DELETE':
        try:
            user = CustomUser.objects.get(id=user_id)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except CustomUser.DoesNotExist:
            return Response({"message": "User not found!"}, status=status.HTTP_404_NOT_FOUND)


# Services

# Create service
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_service(request):
    """Create Service object
    """
    serializer = ServiceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_services(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_service(request, service_id):
    """Delete Service Object with the specified ID
    """
    try:
        service = Service.objects.get(id=service_id)
        service.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Service.DoesNotExist:
            return Response({"message": "Service not found!"}, status=status.HTTP_404_NOT_FOUND)
    
# Schedules
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_schedule(request):
    """Create Schedule Object
    """
    serializer = ScheduleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_schedules(request):
    schedules = Schedule.objects.all()
    serializer = ScheduleSerializer(schedules, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_schedule(request, schedule_id):
    """
    Delete Schedule with the specified ID
    """
    try:
        schedule = Schedule.objects.get(id=schedule_id)
        schedule.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Schedule.DoesNotExist:
        return Response({"message": "Schedule not found!"}, status=status.HTTP_404_NOT_FOUND)


# Bookings
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book(request):
    """Book for laundry service
    """
    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_bookings(request):
    """
    List all bookings
    """
    bookings = Booking.objects.all()
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
