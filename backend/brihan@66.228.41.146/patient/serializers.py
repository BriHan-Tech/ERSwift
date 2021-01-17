from rest_framework import serializers
from patient.models import PriorityPatient, Patient


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"


class PriorityPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriorityPatient
        fields = "__all__"


class VerifyPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ["id"]


class VerifyPriorityPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriorityPatient
        fields = ["id"]

        