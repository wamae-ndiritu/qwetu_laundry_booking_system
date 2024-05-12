from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser, Service, Schedule, Booking, BookingItem
from .serializers import CustomUserSerializer, ServiceSerializer, ScheduleSerializer, BookingSerializer, BookingItemSerializer



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


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_user(request, user_id):
    try:
        user = CustomUser.objects.get(id=user_id)
    except CustomUser.DoesNotExist:
        return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = CustomUserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    user = request.user
    booking_data = {
        'client': user.id,
        'schedule': int(request.data.get('schedule')),
        'date': request.data.get('date'),
        'amount': request.data.get('amount'),
        'notes': request.data.get('notes', 'No additional notes'),
        'hostel_name': request.data.get('hostel_name'),
        'room_no': request.data.get('room_no'),
        'pick_up_method': request.data.get('pick_up_method')
    }
    serializer = BookingSerializer(data=booking_data)
    if serializer.is_valid():
        booking = serializer.save()
        services = request.data.get('services', [])
        for serviceId in services:
            try:
                service = Service.objects.get(id=serviceId)
                booking_item_info = {
                    'booking': booking.id,
                    'service': service.id
                }
                booking_serializer = BookingItemSerializer(data=booking_item_info)
                if booking_serializer.is_valid():
                    booking_serializer.save()
                else:
                    booking.delete()
                    return Response(booking_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Service.DoesNotExist:
                booking.delete()
                return Response({"message": "Service with the given service ID not found!"}, status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Get all bookings
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_bookings(request):
    """
    List all bookings
    """
    bookings = Booking.objects.all()
    bookings_info = []
    for booking in bookings:
        serializer = BookingSerializer(booking)
        bookingItems = BookingItem.objects.filter(booking__id=booking.id)
        booking_items_info = []
        for item in bookingItems:
            service = Service.objects.get(id=item.service_id)
            booking_service_serializer = ServiceSerializer(service)
            booking_items_info.append(booking_service_serializer.data)
        schedule = Schedule.objects.get(id=booking.schedule.id)
        schedule_serializer = ScheduleSerializer(schedule)
        client = CustomUser.objects.get(id=booking.client.id)
        bookings_info.append(
            {**serializer.data, 'services': booking_items_info, 'schedule': schedule_serializer.data, 'client': client.full_name})
    return Response(bookings_info, status=status.HTTP_200_OK)

# Get User bookings
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_bookings(request, user_id):
    """
    List User bookings
    """
    bookings = Booking.objects.filter(client__id=user_id)
    bookings_info = []
    for booking in bookings:
        serializer = BookingSerializer(booking)
        bookingItems = BookingItem.objects.filter(booking__id=booking.id)
        booking_items_info = []
        for item in bookingItems:
            service = Service.objects.get(id=item.service_id)
            booking_service_serializer = ServiceSerializer(service)
            booking_items_info.append(booking_service_serializer.data)
        schedule = Schedule.objects.get(id=booking.schedule.id)
        schedule_serializer = ScheduleSerializer(schedule)
        bookings_info.append(
            {**serializer.data, 'services': booking_items_info, 'schedule': schedule_serializer.data})
    return Response(bookings_info, status=status.HTTP_200_OK)
