from django.urls import path
from rest_framework.routers import DefaultRouter

from .api import HospitalAreaViewSet, PriorityHospitalAreaViewSet

ROUTER = DefaultRouter()
ROUTER.register("hospital-priority-areas", PriorityHospitalAreaViewSet)
ROUTER.register("hospital-areas", HospitalAreaViewSet)

urlpatterns = ROUTER.urls
