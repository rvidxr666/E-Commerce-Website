from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core import serializers
from .models import Products
import json


list_of_products = [{
        "id": 1, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    }, 
    {
        "id": 2, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    }, 
    {
        "id": 3, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    }, 
    {
        "id": 4, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    }, 
    {
        "id": 5, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    },
    {
        "id": 6, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Shit Cum",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    }, 
        {
        "id": 7, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    },
    {
        "id": 8, 
        "name": "Ass Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Shit Cum",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    },
    {
        "id": 9, 
        "name": "Bitch Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    },
    {
        "id": 10, 
        "name": "Bitch Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Shit Cum",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    },
    ]


def serializeOutput(lst_of_objects):
    json_obj = serializers.serialize("json", lst_of_objects)
    dic_obj = json.loads(json_obj)
    final_json = [product["fields"] for product in dic_obj]
    return final_json


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
    requested_elem = list(filter(lambda x: x["id"] == id, list_of_products))
    return Response(requested_elem)