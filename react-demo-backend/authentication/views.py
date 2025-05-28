from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from authentication.models import CustomUser

@api_view(['POST'])
def register(request):
    name = request.data.get("name")
    email = request.data.get("email")
    password = request.data.get("password")

    if not name or not email or not password:
        return Response({"error": "All fields are required"}, status=400)

    if CustomUser.objects.filter(email=email).exists():
        return Response({"error": "Email already registered"}, status=400)

    user = CustomUser.objects.create_user(username=name, email=email, password=password)
    user.name = name  # Explicitly set name before saving
    user.save()

    return Response({"message": "User registered successfully!"}, status=201)

@api_view(['POST'])
def login(request):
    email = request.data.get("email")  # Fetch email
    password = request.data.get("password")  # Fetch password

    user = CustomUser.objects.filter(email=email).first()  # Find user in database

    if user and user.check_password(password):  # Validate hashed password
        refresh = RefreshToken.for_user(user)
        return Response({"access_token": str(refresh.access_token)}, status=200)
    
    return Response({"error": "Invalid credentials"}, status=401)
