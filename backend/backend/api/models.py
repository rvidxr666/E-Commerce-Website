# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Products(models.Model):
    product_id = models.IntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    header = models.TextField(blank=True, null=True)
    full_description = models.TextField(blank=True, null=True)
    header_image = models.TextField(blank=True, null=True)
    category_id = models.TextField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    quantity = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'products'

class Categories(models.Model):
    category = models.TextField(primary_key=True, max_length=64)
    description = models.TextField(blank=True, null=True)
    picture_url = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'categories'


class Users(models.Model):
    email = models.TextField(primary_key=True, max_length=64)
    name = models.TextField(blank=True, null=True)
    surname = models.TextField(blank=True, null=True)
    password = models.TextField(blank=True, null=True)
    finance = models.IntegerField(null=True, blank=True)
    gender = models.CharField(blank=True, null=True, max_length=1)
    birth_date = models.DateField(null=True, blank=True)

    class Meta:
        managed = True
        db_table = 'users'

    
class Transactions(models.Model):
    transaction_id = models.IntegerField(primary_key=True)
    user_email = models.TextField(blank=True, null=True)
    product_id = models.IntegerField(blank=True, null=True)
    timestamp = models.DateTimeField(blank=True, null=True)
    quantity = models.IntegerField(null=True, blank=True)
    sum = models.IntegerField(null=True, blank=True)
    status = models.CharField(blank=True, null=True, max_length=1)

    class Meta:
        managed = True
        db_table = 'transactions'




# CREATE TABLE IF NOT EXISTS ecommerce.transactions (
#     transaction_id int NOT NULL AUTO_INCREMENT,
#     user_email TEXT,
#     product_id INT,
#     timestamp TIMESTAMP,
#     quantity INT, 
#     status TEXT,
#     CONSTRAINT TRANSACTION_KEY PRIMARY KEY (transaction_id)
# );
