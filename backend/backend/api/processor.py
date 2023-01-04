from django.core import serializers
import json
from .models import Products


class Processor:
    
    def _extractorFunc(self, elem):
        pk = elem["pk"]
        fields = elem["fields"]
        fields["pk"] = pk
        return fields

    def serializeOutput(self, lst_of_objects):
        json_obj = serializers.serialize("json", lst_of_objects)
        dic_obj = json.loads(json_obj)
        merged_object = list(map(self._extractorFunc, dic_obj))
        return merged_object

    def filterByCategory(self, category):
        pass

    def filterByName(self, category):
        pass
