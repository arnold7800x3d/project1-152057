from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ('userID', 'username', 'email', 'university', 'role', 'password')
        read_only_fields = ('userID',)

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('userID', 'username', 'email', 'university', 'role')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = 'email'  # Use email as username field

    def validate(self, attrs):
        # Authenticate user using email and password
        credentials = {
            'email': attrs.get('email'),
            'password': attrs.get('password')
        }

        user = authenticate(**credentials)
        if user is None:
            raise serializers.ValidationError('Invalid credentials')

        data = super().validate(attrs)
        data['user'] = UserSerializer(self.user).data
        return data
