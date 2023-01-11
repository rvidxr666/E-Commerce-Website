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
        for i in range(len(self.cart)):
            if self.cart[i]["pk"] == id:
                self.cart.pop(i)
                self.session.modified = True
                break


        print("self.cart ", self.cart)
        self.session.modified = True

    def get_cart_ids(self):
        ids = list(map(lambda x: x["pk"], self.cart))
        return ids
    
    def replace_existing(self, target_id, cart_quantity):
        print("self_cart", self.cart)
        for i in range(len(self.cart)):
            if self.cart[i]["pk"] == target_id:        
               self.cart[i]["cart_quantity"] = cart_quantity
               break
        
        self.session.modified = True
    
    def cart_sum(self):
        sm = 0
        for i in range(len(self.cart)):
            sm += (int(self.cart[i]["price"])*int(self.cart[i]["cart_quantity"])) 
        return sm

    

class CartProduct:
    def __init__(self, id, product, quantity):
        self.id = id
        self.product = product
        self.quantity = quantity