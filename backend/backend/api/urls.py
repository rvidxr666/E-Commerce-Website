from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.getProducts),
    path('products', views.getProducts),
    path('products/<int:id>/', views.getProduct),
    path('categories', views.get_categories), 
    path('cart', views.cart),
    path('cart/<int:id>', views.cart_modifications),
    path('register', views.register),
    path('login', views.login), 
    path('check-session', views.check_session),
    path('logout', views.logout)
]