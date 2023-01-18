from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.core import serializers
from .models import Products, Categories, Users, Transactions
import json
from .history import History
from .processor import Processor
from .cart import Cart, CartProduct
import datetime


@api_view(["GET", "POST"])
def getProducts(request):
    
    if request.query_params.get('name'):
        print(request.query_params.get('name'))
        filtered_objects = Processor.filterByName(filter=request.query_params.get('name'))
        return Response(filtered_objects)
    
    if request.query_params.get('category_id'):
        filtered_objects = Processor.filterByCategory(category=request.query_params.get('category_id'))
        return Response(filtered_objects)

    products = Processor.serializeOutput(Products.objects.filter(quantity__gt=0))
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
    
    if request.method == "GET":
        cart_products = cart.cart
        cart_sum = cart.cart_sum()
        print(cart_products)
        return Response({"cart_products":cart_products, "cart_sum":cart_sum}, status=status.HTTP_200_OK)  

    request_data = request.data 
    product_id = int(request_data["id"])
    quantity = request_data["quantity"]

    if request.method == "POST":

        product = [Products.objects.get(pk=product_id)]
        product_serialized = Processor.serializeOutput(product)[0]
        product_serialized["cart_quantity"] = quantity

        # Replace existing one
        if product_id in cart.get_cart_ids():
            cart.replace_existing(product_id, quantity)
            return Response("OK", status=status.HTTP_200_OK)

        # cart_product = CartProduct(request_data["id"], product_serialized, request_data["quantity"])
        cart.add(product_serialized)
        return Response("OK", status=status.HTTP_200_OK)

@api_view(["DELETE", "PUT"])
def cart_modifications(request, **kwargs):
    cart = Cart(request)
    product_id = int(kwargs["id"])

    if request.method == "PUT":
        product_id = int(request.data["id"])
        quantity = int(request.data["quantity"])
        cart.replace_existing(product_id, quantity)
        return Response("OK", status=status.HTTP_200_OK)

    if request.method == "DELETE":
        cart.remove(product_id)
        print("Cart from remove method", request.session["shopping_cart"] )
        return Response("OK", status=status.HTTP_200_OK)


@api_view(["POST"])
def login(request):
    request_data = request.data

    try:
        user = Users.objects.get(pk=request_data["email"])
    except Users.DoesNotExist:
        user = ""

    if user and request_data["password"] == user.password:
        request.session["user_email"] = user.email
        request.session.modified = True
        return Response({"data":"allowed"}, status=status.HTTP_200_OK)

    return Response({"data":"rejected"}, status=status.HTTP_200_OK)

@api_view(["GET"])
def logout(request):
    if request.session.get("user_email"):
        del request.session["user_email"]
        request.session.modified = True
        return Response({"data":"unlogged"}, status=status.HTTP_200_OK)
    else:
        return Response({"data":"unlogged"}, status=status.HTTP_200_OK)


@api_view(["POST"])
def register(request):
    request_data = request.data

    try:
        user = Users.objects.get(pk=request_data["email"])
    except Users.DoesNotExist:
        user = ""

    if user:
        return Response({"data": "registered"}, status=status.HTTP_200_OK)

    user = Users(
                email=request_data["email"],
                name=request_data["name"],
                surname=request_data["surname"],
                password=request_data["password"],
                finance=0,
                gender=request_data["gender"],
                birth_date=request_data["birth"]   
            ) 

    user.save()
    return Response({"data":"OK"}, status=status.HTTP_200_OK)


@api_view(["GET"])
def check_session(request):
    if request.session and request.session.get("user_email"):
        return Response({"data":"logged"}, status=status.HTTP_200_OK)
    else:
        return Response({"data":"unlogged"}, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_user(request):
    user_email = request.session.get("user_email")

    if user_email:
        user = Users.objects.get(pk=user_email)
        user_serialized = Processor.serializeOutput([user])[0]
        print(user_serialized)
        return Response({"data":user_serialized})
    
    else:
        return Response({"data":"invalid"})

@api_view(["POST"])
def edit_user(request):

    request_data = request.data
    user = Users.objects.get(pk=request.session["user_email"])

    user.name = request_data.get("name") if request_data.get("name") else user.name
    user.surname = request_data.get("surname") if request_data.get("surname") else user.surname
    user.birth_date = request_data.get("birth_date") if request_data.get("birth_date") else user.birth_date
    user.finance = int(request_data.get("finance")) + user.finance if request_data.get("finance") else user.finance
    user.save()

    return Response({"data":"OK"})


@api_view(["GET"])
def checkout(request):
    cart = Cart(request)
    cart_objects = cart.cart

    user = Users.objects.get(pk=request.session["user_email"])
    timestamp = datetime.datetime.now()

    if user.finance < cart.cart_sum():
        Processor.create_transactions(
                                        cart_objects=cart_objects, 
                                        timestamp=timestamp, 
                                        status="rejected", 
                                        user_email=request.session["user_email"]
                                      )
        print("rejected")
        return Response({"data": "insufficient funds"})
    
    Processor.create_transactions(
                                  cart_objects=cart_objects, 
                                  timestamp=timestamp, 
                                  status="accepted", 
                                  user_email=request.session["user_email"]
                                  )

    user.finance = user.finance - cart.cart_sum()
    user.save()
    
    cart.empty_cart()
    return Response({"data": "success"})







