from django.urls import path
from . import views


urlpatterns = [
    path('', views.getProducts),
    path('<int:id>/', views.getProduct)
]