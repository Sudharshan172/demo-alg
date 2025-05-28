from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)  # Ensure unique email
    name = models.CharField(max_length=255, default="Unknown")  # Add name field

    groups = models.ManyToManyField(Group, related_name="customuser_groups")  # Fix conflict
    user_permissions = models.ManyToManyField(Permission, related_name="customuser_permissions")  # Fix conflict

    USERNAME_FIELD = "email"  # Login via email
    REQUIRED_FIELDS = ["name"]  # Name required

    def __str__(self):
        return self.email
