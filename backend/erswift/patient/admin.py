from django.contrib import admin
from patient.models import PriorityPatient, Patient

admin.site.register(PriorityPatient)
admin.site.register(Patient)
