from django.core import serializers
import json
from .models import Products


class Processor:
    
    @staticmethod
    def _extractorFunc(elem):
        pk = elem["pk"]
        fields = elem["fields"]
        fields["pk"] = pk
        return fields

    @staticmethod
    def serializeOutput(lst_of_objects):
        json_obj = serializers.serialize("json", lst_of_objects)
        dic_obj = json.loads(json_obj)
        merged_object = list(map(Processor._extractorFunc, dic_obj))
        return merged_object

    @staticmethod
    def filterByCategory(category):
        filtered_products = Processor.serializeOutput(Products.objects.filter(category_id=category))
        return filtered_products

    @staticmethod
    def filterByName(filter):
        allObjects = Products.objects.all()
        filtered_objects = []

        for object in allObjects:
            filter_processed = filter.replace(" ", "").lower()
            processed_name = object.name.replace(" ", "").lower()

            if filter_processed in processed_name:
                filtered_objects.append(object)
        
        sorted_objects = sorted(filtered_objects, key=lambda x: x.name)
        serialized_objects = Processor.serializeOutput(sorted_objects)

        print([obj["name"] for obj in serialized_objects])
        return serialized_objects
