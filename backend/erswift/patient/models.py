"""
patient/models.py
------------------
"""

from django.db import models
from hospital.models import PriorityHospitalArea, HospitalArea


class PriorityPatient(models.Model):
    # Choices
    PRIORITY_CHOICES = (
        ("breathing", "breathing"),
        ("fatal-wounds", "fatal-wounds"),
        ("coma", "coma"),
        ("shock", "Signs of Shock"),
        ("dehydration", "Severe Signs of Dehydration"),
        ("other", "Other")
    )

    # Fields
    first_name = models.CharField(max_length=26)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.CharField(max_length=30)
    
    current_time = models.DateTimeField(auto_now=True)

    emer_reasoning = models.CharField(choices=PRIORITY_CHOICES, max_length=15)
    extra_information = models.TextField(blank=True, null=True)

    hospital_area = models.ForeignKey(PriorityHospitalArea, related_name="priority_patients",
                                        on_delete=models.CASCADE, blank=True, null=True)


    resusciation_area = ["breathing", "coma", "shock", "dehydration"]

    def save(self, *args, **kwargs):

        if self.emer_reasoning in self.resusciation_area:
            self.hospital_area = PriorityHospitalArea.objects.get(area="Resusciation Area")
        else:
            self.hospital_area = PriorityHospitalArea.objects.get(area="Major Wound Area")

        super().save(*args, **kwargs)

    
    def __str__(self):
        return "{0} {1} in Hospital Area {2}".format(self.first_name, self.last_name, self.hospital_area)


class Patient(models.Model):

    # Condition Options
    INJURY_SYMPTOMS = (
        ("sick", "Sick"),
        ("temperature", "Temperature"),
        ("cut", "Cut"),
        ("trauma", "Trauma"),
        ("poisoning", "Poisoning"),
        ("burns", "Burns"),
        ("other", "Other")
    )

    CUT_LOCATION = (
        ("head", "Head"),
        ("torso", "Torso"),
        ("arms", "Arms"),
        ("legs", "Legs")
    )
    
    # Fields
    first_name = models.CharField(max_length=26)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.CharField(max_length=30)

    current_time = models.DateTimeField(auto_now=True)
    
    reasoning = models.CharField(choices=INJURY_SYMPTOMS, max_length=11)
    cut_location = models.CharField(choices=CUT_LOCATION, max_length=5, null=True, blank=True)
    extra_information = models.TextField(blank=True, null=True)

    hospital_area = models.ForeignKey(HospitalArea, related_name="patients", on_delete=models.CASCADE)


    minor_procedures = ["cut", "poisoning"]

    def save(self, *args, **kwargs):

        if self.reasoning in self.minor_procedures:
            self.hospital_area = HospitalArea.objects.get(area="Resusciation Area")
        else:
            self.hospital_area = HospitalArea.objects.get(area="Major Wound")

        super().save(*args, **kwargs)



    def __str__(self):
        return "{0} {1} in Hospital Area {2}".format(self.first_name, self.last_name, self.hospital_area)
