import React, {useState} from 'react';
import {useLocation} from 'react-router-dom'

const Product = (props) => {
    console.log(props)
    const [quantity, setQuantity] = useState(1)
    const location = useLocation()
    const state = location.state
    // const [product, setProduct] = useState([])

  //   const fetchAPI = async () => {
  //     var res = await axios.get(`http://localhost:8000/products/${product.}`)
  //     changeProducts(res.data)
  // }

    // useEffect(() => {
    //     fetchAPI()
    // }, [])

    const setQuantityOnChange = (event) => {
      if (event.target.value <= 0){
        setQuantity(1)
      }
      else {
        setQuantity(event.target.value)
      }
    }

    return (
        <div className="container dark-grey-text mt-5">
        <div className="row wow fadeIn">

          <div className="col-md-6 mb-4">
  
            <img src={state.header_image} className="img-fluid" alt=""/>
  
          </div>
  
          <div className="col-md-6 mb-4">
            <div className="p-4">
  
              <div className="mb-3">
                <a href="">
                  <span className="badge purple mr-1">{state.category_id}</span>
                </a>
              </div>
  
              <p className="lead">
                <span>${state.price}</span>
              </p>
  
              <p className="lead font-weight-bold">Description</p>
  
              <p>{state.full_description}</p>
  
              <form className="d-flex justify-content-left">
                <input onChange={setQuantityOnChange} value={quantity} type="number" aria-label="Search" className="form-control" style={{"width":"100px"}}/>
                <button className="btn btn-primary btn-md my-0 p" type="submit">Add to cart</button>
              </form>
  
            </div>
  
          </div>
  
        </div>

      <div className="row d-flex justify-content-center wow fadeIn">
        <div className="col-md-6 text-center">

          <h4 className="my-4 h4">Additional information</h4>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
            voluptates,
            quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>

        </div>

      </div>
        </div>
    ) 
}


export default Product;