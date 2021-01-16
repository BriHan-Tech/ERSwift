from django.db import models

class HospitalArea(models.Model):
    
    # CHOICES
    AREA_OPTIONS = (
        ("resusciation", "Resusciation Area"),
        ("trauma", "Major Wound"),
        ("minor-procedure", "Major Procedure"),
        ("consultation", "Consultation"),
        ("network", "Network")
    )

    area = models.CharField(choices=AREA_OPTIONS, max_length=16)


    def __str__(self):
        return str(self.area)