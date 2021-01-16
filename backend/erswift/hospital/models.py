from django.db import models

class PriorityHospitalArea(models.Model):
    
    # CHOICES
    PRIORITY_AREA_OPTIONS = (
        ("Resusciation Area", "Resusciation Area"),
        ("Major Wound Area", "Major Wound Area")
    )

    area = models.CharField(choices=PRIORITY_AREA_OPTIONS, max_length=20)


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
