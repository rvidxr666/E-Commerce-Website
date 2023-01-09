from .processor import Processor

class Cart:
    def __init__(self, request):

        self.session = request.session

        if not self.session.get("shopping_cart"):
            self._initCart()
        else:
            self.cart = self.session["shopping_cart"] 
        
    def _initCart(self):
        self.session["shopping_cart"] = []
        self.cart = self.session["shopping_cart"] 

    def add(self, cart_product):
        self.cart.append(cart_product)
        self.session.modified = True
    
    def remove(self, id):
        self.cart = filter(lambda x: x["pk"]!= id, self.cart)
        self.session.modified = True

    def get_cart_ids(self):
        ids = list(map(lambda x: x["pk"], self.cart))
        return ids
    
    def replace_existing(self, cart_product):
        target_id = cart_product["pk"]

        for i in range(len(self.cart)):
            if self.cart[i]["pk"]== target_id:
               self.cart[i] = cart_product
               break
        

    

class CartProduct:
    def __init__(self, id, product, quantity):
        self.id = id
        self.product = product
        self.quantity = quantity