# Generated by Django 5.0.4 on 2024-05-12 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_rename_time_booking_schedule_remove_booking_hostel_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='notes',
            field=models.TextField(null=True),
        ),
    ]
