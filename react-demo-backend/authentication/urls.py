from django.urls import path
from authentication.views import register, login

urlpatterns = [
    path('signup/', register),
    path('signin/', login),
]