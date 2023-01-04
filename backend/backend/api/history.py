from .models import Products

class History:
    def __init__(self, request):
        self.session = request.session
        self._history_init()

    def _history_init(self):
        if "history" not in self.session:
            self.session["history"] = []

    def add(self, id):
        if id in self.session["history"]:
            self.session["history"].remove(id)

        self.session["history"].insert(0, id)
        
        history_len = len(self.session["history"])
        if history_len > 5:
            self.session["history"] = self.session["history"][history_len-6:]

        self.session.modified = True
    
    def getViewedProducts(self, request):
        history = request.session.get("history")
        if not history:
            return [{"category_id": "", "header_image":"", "pk":""}]
        
        viewed_products = [Products.objects.filter(pk=id)[0] for id in history][1:]
        viewed_products_json = self.serializeOutput(viewed_products)
        return viewed_products_json



    



        

