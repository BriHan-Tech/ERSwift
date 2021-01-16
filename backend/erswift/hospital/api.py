from rest_framework.viewsets import ModelViewSet
from .models import HospitalArea
from .serializers import HospitalAreaSerializer


class HospitalAreaViewSet(ModelViewSet):
    queryset = HospitalArea.objects.all()
    serializer_class = HospitalAreaSerializer