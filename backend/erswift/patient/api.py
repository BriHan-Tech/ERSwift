from rest_framework.viewsets import ModelViewSet

from .models import PriorityPatient, Patient
from .serializers import PriorityPatientSerializer, PatientSerializer


class PriorityPatientViewSet(ModelViewSet):
    queryset = PriorityPatient.objects.all()
    serializer_class = PriorityPatientSerializer

class PatientViewSet(ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
