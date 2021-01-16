from django.urls import path
from rest_framework.routers import DefaultRouter

from .api import HospitalAreaViewSet, PriorityHospitalArea

ROUTER = DefaultRouter()
ROUTER.register("hospital-priority-areas", PriorityHospitalArea)
ROUTER.register("hospital-areas", HospitalAreaViewSet)

urlpatterns = ROUTER.urls
