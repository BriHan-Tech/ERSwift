# Generated by Django 3.0.8 on 2021-01-16 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0005_auto_20210116_1656'),
    ]

    operations = [
        migrations.AlterField(
            model_name='priorityhospitalarea',
            name='area',
            field=models.CharField(choices=[('Resusciation Area', 'Resusciation Area'), ('Major Wound Area', 'Major Wound Area')], max_length=20),
        ),
    ]
