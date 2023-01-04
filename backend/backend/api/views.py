from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core import serializers
from .models import Products
import json
from .history import History
from .processor import Processor


def extractorFunc(elem):
    pk = elem["pk"]
    fields = elem["fields"]
    fields["pk"] = pk
    return fields

def serializeOutput(lst_of_objects):
    json_obj = serializers.serialize("json", lst_of_objects)
    dic_obj = json.loads(json_obj)
    merged_object = list(map(extractorFunc, dic_obj))
    return merged_object

# Put to the History class
def getViewedProducts(request):
    history = request.session.get("history")
    print("getViewed", history)
    if not history:
        return [{"category_id": "", "header_image":"", "pk":""}]
    
    viewed_products = [Products.objects.filter(pk=id)[0] for id in history][1:]
    viewed_products_json = serializeOutput(viewed_products)
    return viewed_products_json


@api_view(["GET", "POST"])
def getProducts(request):
    if request.method == "POST":

        filt = json.loads(request.body.decode("utf-8"))["filter"]
        filtered_products = serializeOutput(Products.objects.filter(category_id=filt))
        print(filt, "\n", filtered_products)
        return Response(filtered_products)

    products = serializeOutput(Products.objects.all())
    return Response(products)


@api_view(["GET"])
def getProduct(request, **kwargs):
    id = kwargs.get("id")
    product = serializeOutput([Products.objects.get(pk=id)])
    History(request).add(id)
    viewed_products = getViewedProducts(request)
    print("Get Product", request.session.get("history"))
    print("Session key", request.session.session_key)
    return Response({"product":product, "viewedProducts":viewed_products})

