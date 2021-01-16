from django.db import models

class PriorityHospitalArea(models.Model):
    
    # CHOICES
    PRIORITY_AREA_OPTIONS = (
        ("resusciation", "Resusciation Area"),
        ("major-wound", "Major Wound")
    )

    area = models.CharField(choices=PRIORITY_AREA_OPTIONS, max_length=16)


    def __str__(self):
        return str(self.area)

class HospitalArea(models.Model):
    
    # CHOICES 
    AREA_OPTIONS = (
        ("minor-procedure", "Minor Procedure"),
        ("consultation", "Consultation"),
        ("network", "Network")
    )

    area = models.CharField(choices=AREA_OPTIONS, max_length=16)

    def __str__(self):
        return str(self.area)
