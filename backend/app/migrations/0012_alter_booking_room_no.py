# Generated by Django 5.0.4 on 2024-05-12 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_bookingitem_booking'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='room_no',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
    ]
