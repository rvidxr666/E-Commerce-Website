from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.core import serializers
from .models import Products, Categories
import json
from .history import History
from .processor import Processor
from .cart import Cart, CartProduct


@api_view(["GET", "POST"])
def getProducts(request):
    
    if request.query_params.get('name'):
        print(request.query_params.get('name'))
        filtered_objects = Processor.filterByName(filter=request.query_params.get('name'))
        return Response(filtered_objects)
    
    if request.query_params.get('category_id'):
        filtered_objects = Processor.filterByCategory(category=request.query_params.get('category_id'))
        return Response(filtered_objects)

    products = Processor.serializeOutput(Products.objects.all())
    return Response(products)


@api_view(["GET"])
def getProduct(request, **kwargs):
    id = kwargs.get("id")
    product = Processor.serializeOutput([Products.objects.get(pk=id)])

    product_history = History(request)
    product_history.add(id)
    viewed_products = product_history.getViewedProducts()

    if viewed_products:
        serialized_products = Processor.serializeOutput(viewed_products)
    else:
        serialized_products = [{"category_id": "", "header_image":"", "pk":""}]

    return Response({"product":product, "viewedProducts":serialized_products})


@api_view(["GET"])
def get_categories(request):
    categories = Processor.serializeOutput(Categories.objects.all())
    return Response(categories)


@api_view(["GET", "POST"])
def cart(request):
    cart = Cart(request)
    # del request.session["shopping_cart"]
    if request.method == "POST":
        request_data = request.data # {"id":num, "quantity": num}

        product = [Products.objects.get(pk=request_data["id"])]
        product_serialized = Processor.serializeOutput(product)[0]
        product_serialized["cart_quantity"] = request_data["quantity"]

        # Replace existing one
        if int(request_data["id"]) in cart.get_cart_ids():
            cart.replace_existing(product_serialized)
            print("Replace ", cart.cart)
            return Response("OK", status=status.HTTP_200_OK)

        # cart_product = CartProduct(request_data["id"], product_serialized, request_data["quantity"])
        cart.add(product_serialized)
        print("Add ", cart.cart)
        return Response("OK", status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        pass
    else:
        cart_products = cart.cart
        print("Get products ", cart_products)
        return Response(cart_products, status=status.HTTP_200_OK)  

    # return Response("OK")


