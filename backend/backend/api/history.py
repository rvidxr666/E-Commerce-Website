from .models import Products

class History:
    def __init__(self, request):
        self.session = request.session
        self.session_key = request.session_key
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
            self.session["history"] = self.session["history"][:6]
        self.session.modified = True
    
    def getViewedProducts(self):
        history = self.session.get("history")

        if not history:
            return None
        
        viewed_products = [Products.objects.filter(pk=id)[0] for id in history][1:]
        return viewed_products



    



        

