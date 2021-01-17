from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from .models import HospitalArea, PriorityHospitalArea
from .serializers import HospitalAreaSerializer, PriorityHospitalAreaSerializer, MinHospitalAreaSerializer, MinPriorityHospitalAreaSerializer


class HospitalAreaViewSet(ModelViewSet):
    queryset = HospitalArea.objects.all()
    serializer_class = HospitalAreaSerializer
    permission_classes = [permissions.IsAuthenticated]


class PriorityHospitalAreaViewSet(ModelViewSet):
    queryset = PriorityHospitalArea.objects.all()
    serializer_class = PriorityHospitalAreaSerializer
    permission_classes = [permissions.IsAuthenticated]


# The Following Serializers Do NOT Require Authentication.
class MinHospitalAreaViewSet(ModelViewSet):
    queryset = HospitalArea.objects.all()
    serializer_class = MinHospitalAreaSerializer
    http_method_names = ['get']


class MinPriorityHospitalAreaViewSet(ModelViewSet):
    queryset = PriorityHospitalArea.objects.all()
    serializer_class = MinPriorityHospitalAreaSerializer
    http_method_names = ['get']