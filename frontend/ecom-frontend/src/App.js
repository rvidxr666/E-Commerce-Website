import "bootstrap/dist/css/bootstrap.min.css"
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './mdb.css'
import './App.css'
import './style.css'


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.js"
import Homepage from "./components/Home/Homepage.js"
import Products from "./components/Products/Products.js";
import Product from "./components/Products/Product.js";


function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />}> </Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/skate/:id" element={<Product />}></Route>
          </Routes>
      </Router>
      <div style={{bottom:0}}>
      {/* <footer class="pt-3 mt-3 mb-3 text-muted border-top">
        © 2022
      </footer> */}
      </div>
    </div>
  );
}

export default App;
