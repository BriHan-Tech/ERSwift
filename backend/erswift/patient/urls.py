from django.urls import path
from rest_framework.routers import DefaultRouter

from .api import PatientViewSet, PriorityPatientViewSet

ROUTER = DefaultRouter()
ROUTER.register("patient", PatientViewSet)
ROUTER.register("priority_patient", PriorityPatientViewSet)

urlpatterns = ROUTER.urls
