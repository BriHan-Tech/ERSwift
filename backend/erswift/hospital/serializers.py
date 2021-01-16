from rest_framework import serializers

from .models import HospitalArea, PriorityHospitalArea
from patient.models import PriorityPatient, Patient


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"


class PriorityPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriorityPatient
        fields = "__all__"


class PriorityHospitalAreaSerializer(serializers.ModelSerializer):
    priority_patients = PriorityPatientSerializer(read_only=True, many=True)

    class Meta:
        model = PriorityHospitalArea
        fields = "__all__"


class HospitalAreaSerializer(serializers.ModelSerializer):
    patients = PatientSerializer(read_only=True, many=True)

    class Meta:
        model = HospitalArea
        fields = "__all__"
