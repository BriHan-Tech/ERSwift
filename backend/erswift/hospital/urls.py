from django.urls import path
from rest_framework.routers import DefaultRouter

from .api import HospitalAreaViewSet

ROUTER = DefaultRouter()
ROUTER.register("hospital-areas", HospitalAreaViewSet)

urlpatterns = ROUTER.urls
