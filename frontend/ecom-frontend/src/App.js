import "bootstrap/dist/css/bootstrap.min.css"
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './mdb.css'
import './App.css'
import './style.css'
import './card.css'
import { v4 as uuidv4 } from 'uuid';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.js"
import Homepage from "./components/Home/Homepage.js"
import Products from "./components/Products/Products.js";
import Product from "./components/Products/Product.js";
import Categories from "./components/Categories/Categories"
import ShoppingCart from "./components/Cart/ShoppingCart"
import Login from "./components/User/Login"
import Register from "./components/User/Register"
import Profile from "./components/Profile/Profile"
import EditProfile from "./components/Profile/EditProfile"


function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />}> </Route>
            <Route path="/products" element={<Products key={uuidv4()} />}></Route>
            <Route path="/products/:category_id/:id" element={<Product />}></Route>
            <Route path="/categories" element={<Categories/>}></Route>
            <Route path="/cart" element={<ShoppingCart/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}>
            </Route>
            <Route path="/profile/edit" element={<EditProfile />}></Route>
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
