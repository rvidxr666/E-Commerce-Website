from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.getProducts),
    path('products', views.getProducts),
    path('products/<int:id>/', views.getProduct)
]