from rest_framework.viewsets import ModelViewSet
from .models import HospitalArea, PriorityHospitalArea
from .serializers import HospitalAreaSerializer, PriorityHospitalAreaSerializer


class HospitalAreaViewSet(ModelViewSet):
    queryset = HospitalArea.objects.all()
    serializer_class = HospitalAreaSerializer

class PriorityHospitalAreaViewSet(ModelViewSet):
    queryset = PriorityHospitalArea.objects.all()
    serializer_class = PriorityHospitalAreaSerializer
