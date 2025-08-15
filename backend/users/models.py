import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, username=None, university='', role='Student', **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username or '', university=university, role=role, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, username='admin', **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, username=username, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    userID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    university = models.CharField(max_length=255, blank=True)
    ROLE_CHOICES = [('Staff','Staff'), ('Student','Student'), ('Admin','Admin')]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='Student')

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        Group,
        related_name="users_custom_user_set",
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups",
        related_query_name="users_custom_user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="users_custom_user_set",
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions",
        related_query_name="users_custom_user",
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email
