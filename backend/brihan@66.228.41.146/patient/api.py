from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet

from .models import PriorityPatient, Patient
from .serializers import PriorityPatientSerializer, PatientSerializer, VerifyPatientSerializer, VerifyPriorityPatientSerializer


class PriorityPatientViewSet(ModelViewSet):
    queryset = PriorityPatient.objects.all()
    serializer_class = PriorityPatientSerializer
    permission_classes = [permissions.IsAuthenticated]


class PatientViewSet(ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [permissions.IsAuthenticated]


class MinPriorityPatientViewSet(ModelViewSet):
    queryset = PriorityPatient.objects.all()
    serializer_class = PriorityPatientSerializer
    http_method_names = ['post']


class MinPatientViewSet(ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    http_method_names = ['post']
    

class VerifyPriorityPatientViewSet(ModelViewSet):
    queryset = PriorityPatient.objects.all()
    serializer_class = VerifyPriorityPatientSerializer
    http_method_names = ['get']


class VerifyPatientViewSet(ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = VerifyPatientSerializer
    http_method_names = ['get']