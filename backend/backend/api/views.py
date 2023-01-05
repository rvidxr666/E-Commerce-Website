from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core import serializers
from .models import Products
import json
from .history import History
from .processor import Processor


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


