from rest_framework.response import Response
from rest_framework.decorators import api_view


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
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Globe Deck 8.5 size",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    },
    {
        "id": 6, 
        "name": "Globe Deck",
        "header": "8.5 Globe Deck", 
        "full_description": "Shit Cum",
        "header_image": "https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920",
        "category_id": "skate",
        "description_images": [""],
        "price": 300
    }]


@api_view(["GET"])
def getProducts(request):
    return Response(list_of_products)

@api_view(["GET"])
def getProduct(request, **kwargs):
    id = kwargs.get("id")
    requested_elem = list(filter(lambda x: x["id"] == id, list_of_products))
    return Response(requested_elem)