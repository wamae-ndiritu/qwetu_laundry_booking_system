# Generated by Django 5.0.4 on 2024-05-11 21:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_booking_amount'),
    ]

    operations = [
        migrations.RenameField(
            model_name='booking',
            old_name='time',
            new_name='schedule',
        ),
        migrations.RemoveField(
            model_name='booking',
            name='hostel',
        ),
        migrations.RemoveField(
            model_name='booking',
            name='room',
        ),
        migrations.RemoveField(
            model_name='booking',
            name='service',
        ),
        migrations.AddField(
            model_name='booking',
            name='date',
            field=models.DateField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='booking',
            name='hostel_name',
            field=models.CharField(default=None, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='booking',
            name='pick_up_method',
            field=models.CharField(default=None, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='booking',
            name='room_no',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.CreateModel(
            name='BookingItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booking', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='app.booking')),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.service')),
            ],
        ),
    ]