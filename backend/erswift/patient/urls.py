from django.urls import path
from rest_framework.routers import DefaultRouter

from .api import PatientViewSet, PriorityPatientViewSet, MinPatientViewSet, MinPriorityPatientViewSet, VerifyPatientViewSet, VerifyPriorityPatientViewSet

ROUTER = DefaultRouter()
ROUTER.register("patient", PatientViewSet)
ROUTER.register("priority_patient", PriorityPatientViewSet)
ROUTER.register("min-patient", MinPatientViewSet)
ROUTER.register("min-priority_patient", MinPriorityPatientViewSet)
ROUTER.register("verify-patient", VerifyPatientViewSet)
ROUTER.register("verify-priority_patient", VerifyPriorityPatientViewSet)

urlpatterns = ROUTER.urls
