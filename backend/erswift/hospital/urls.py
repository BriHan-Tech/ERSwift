from django.urls import path
from rest_framework.routers import DefaultRouter

from .api import HospitalAreaViewSet, PriorityHospitalAreaViewSet, MinHospitalAreaViewSet, MinPriorityHospitalAreaViewSet

ROUTER = DefaultRouter()
ROUTER.register("hospital-priority-areas", PriorityHospitalAreaViewSet)
ROUTER.register("hospital-areas", HospitalAreaViewSet)
ROUTER.register("min-hospital-priority-areas", MinPriorityHospitalAreaViewSet)
ROUTER.register("min-hospital-areas", MinHospitalAreaViewSet)


urlpatterns = ROUTER.urls
