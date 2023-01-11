import React, {useState, useEffect} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Product = (props) => {

    const [quantity, setQuantity] = useState(1)
    const [thisProduct, updateThisProduct] = useState(
      [
        {
          "name":"",
          "header":"",
          "full_description":"",
          "header_image":"",
          "category_id":"",
          "price":0,
          "quantity":0,
          "pk":0, 
          "quantity": 0
        }
      ])
    
    const [viewedProducts, modifyViewedProducts] = useState([{"category_id": "", "header_image":"", "pk":""}])
    const params = useParams();
    const prod_id = params.id

    // const location = useLocation()
    // const state = location.state
    const addToCart = async (e) => {
      e.preventDefault();
      var quantiy = e.target[0].value
      var request = {"id": prod_id, "quantity": quantiy}
      var resp = await axios.post(`http://localhost:8000/cart`, request)
    }


    const getProduct = async () => {
      let resp = await axios.get(`http://localhost:8000/products/${prod_id}/`, {'withCredentials': true })
      updateThisProduct(resp.data.product)
      modifyViewedProducts(resp.data.viewedProducts)
    }

    useEffect(() => {
      getProduct()
      window.scrollTo(0, 0)
    }, [prod_id])

    const setQuantityOnChange = (event) => {
      if (event.target.value <= 0){
        setQuantity(1)
      }
      else if (event.target.value >= thisProduct[0].quantity)  {
        setQuantity(thisProduct[0].quantity)
      } else {
        setQuantity(event.target.value)
      }
    }

    const displayViewedProducts = (product) => {
      if (viewedProducts.length === 1 && Object.values(viewedProducts[0]).filter(x => x === "").length === Object.keys(viewedProducts[0]).length) {
        return <h4>No Items</h4>
      } else {
        return (  
                  <div class="col mb-4 text-center">
                    <Link state={product} to={`/products/${product.category_id}/${product.pk}`}>
                    <img width="500" height="500" src={`${product.header_image}`} className="img-fluid" alt=""/>
                    <h5 style={{"color":"#2F4F4F"}} className="mt-2 lead font-weight-bold">{product.name}</h5>
                    </Link>
                  </div>
                )
      }
    }

    return (
        <div className="container dark-grey-text mt-5">
          <div className="row wow fadeIn">

            <div className="col-md-6 mb-4">
    
              <img src={thisProduct[0].header_image} className="img-fluid" alt=""/>
    
            </div>
    
            <div className="col-md-6 mb-4">
              <div className="p-4">
              <p className="lead font-weight-bold"><b>{thisProduct[0].name}</b></p>
                <div className="mb-3">
                  <a href=""> {/* Implement Redirect to the filter */}
                    <span className="badge purple mr-1">{thisProduct[0].category_id}</span>
                  </a>
                </div>
    
                <p className="lead">
                  <span>${thisProduct[0].price}</span>
                </p>
    
                <p className="lead font-weight-bold mt-4">Description</p>
    
                <p>{thisProduct[0].full_description}</p>
    
                <form className="d-flex justify-content-left mt-4" onSubmit={addToCart}>
                  <input onChange={setQuantityOnChange} value={quantity} type="number" aria-label="Search" className="form-control" style={{"width":"100px"}}/>
                  <button className="btn btn-primary btn-md my-0 p" type="submit">Add to cart</button>
                </form>
    
              </div>
    
            </div>
    
          </div>

        <div className="row d-flex justify-content-center wow fadeIn mt-4">
          <div className="col-md-6 text-center">

            <h4 className="my-4 h4">Additional information</h4>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
              voluptates,
              quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>

          </div>

        </div>

        <div class="row wow fadeIn mt-4">
          <h4 className="my-4 h4 text-center">Recently Viewed</h4>
            {viewedProducts.map(product => displayViewedProducts(product))}
        </div>

      </div>
    ) 
}



export default Product;