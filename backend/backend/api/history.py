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

        self.session["history"].append(id)
        
        history_len = len(self.session["history"])
        if history_len > 5:
            self.session["history"] = self.session["history"][history_len-6:]

        self.session.modified = True



    



        

