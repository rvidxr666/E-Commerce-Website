import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CartPosition from './CartPosition';

const ShoppingCart = () => {

    const [cartProducts, changeCartProducts] = useState([])
    const [cartSum, changeCartSum] = useState(0)
      
    const fetchAPI = async () => {
        var resp = await axios.get("http://localhost:8000/cart")
        changeCartProducts(resp.data.cart_products)
        changeCartSum(resp.data.cart_sum)
    }

    const refrestPage = () => {
        window.location.reload(false);
    }

    const onDelete = async (e, id) => {
        e.preventDefault();
        await axios.delete(`http://localhost:8000/cart/${id}`)
        refrestPage()
        // changeCartProducts(resp.data.cart_products)
    }

    const changeSum = async (id, cartQuantity) => {
        var req = {"id":id, "quantity":cartQuantity}
        await axios.put(`http://localhost:8000/cart/${id}`, req)
        refrestPage()
    }

    const checkout = async () => {
        await axios.get(`http://localhost:8000/checkout`) 
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return  (
        <div className="container">
            <div className="row">
                <div style={{"font-size": "30px"}} className="col lead font-weight-bold text-center mt-4">Shopping Cart</div>
            </div>
            <div className="row mt-5">
                    <div className="col-2" />
                    <div className="col-2 text-center" style={{"font-size": "25px"}} ><b>Product</b></div> 
                    <div className="col-3 text-center" style={{"font-size": "25px"}} ><b>Price</b></div> 
                    <div className="col-3 text-center" style={{"font-size": "25px"}} ><b>Quantity</b></div> 
                    <div className="col-2 text-center" style={{"font-size": "25px"}} ><b>Sum</b></div> 
            </div>
            {cartProducts.map((product, i) => {
                return (
                        <CartPosition product={product} deleteFunction={onDelete} changeSum={changeSum} />
                    
                    // <div className="ms-2 me-2 mt-4 row align-items-center position-relative" style={{"box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    //     <img width="20" height="200" src={"https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920"} class="col-2 pe-4" alt="..."/>
                    //     <div className="col-2 text-center" style={{"font-size": "20px"}}>{product.name}</div> 
                    //     <div className="col-3 text-center" style={{"font-size": "20px"}}>{product.price}$</div> 
                    //     <div className="col-3 text-center d-flex justify-content-center" style={{"font-size": "20px"}}>
                    //         <input type="number" value={() => getAmountChosen(i)} aria-label="Search" className="form-control ms-4" style={{"width":"100px"}}/>
                    //     </div> 
                    //     <div className="col-2" style={{"font-size": "20px"}}>
                    //         <div className="text-center">120$</div>
                    //     </div>
                    //     <div class="d-flex gap-2 d-md-block">
                    //         <button className="btn btn-danger position-absolute bottom-0 end-0 me-5" type="button">Delete</button>
                    //     </div>            
                    // </div>  
                )
            })}

            <div className="row" style={{"paddingTop": "20px", "paddingBottom": "15px"}}>Cart Sum: {cartSum}$</div>

            <div className="row position-relative" style={{"padding-top": "15px", "padding-bottom": "40px"}}>
                <button onClick={checkout} className="btn btn-success position-absolute bottom-0 end-0" type="button">Checkout</button>      
            </div>



            {/* <div className="ms-2 me-2 mt-4 row align-items-center position-relative" style={{"box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <img width="20" height="200" src={"https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920"} class="col-2 pe-4" alt="..."/>
                    <div className="col-2 text-center" style={{"font-size": "20px"}}>Globe Deck</div> 
                    <div className="col-3 text-center" style={{"font-size": "20px"}}>39.99$</div> 
                    <div className="col-3 text-center d-flex justify-content-center" style={{"font-size": "20px"}}>
                        <input type="number" aria-label="Search" className="form-control ms-4" style={{"width":"100px"}}/>
                    </div> 
                    <div className="col-2" style={{"font-size": "20px"}}>
                        <div className="text-center">120$</div>
                    </div>
                    <div class="d-flex gap-2 d-md-block">
                        <button className="btn btn-danger position-absolute bottom-0 end-0 me-5" type="button">Delete</button>
                    </div>
                        
            </div>
            <div className="ms-2 me-2 mt-4 row align-items-center" style={{"box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <img width="20" height="200" src={"https://static.supersklep.pl/1118744-deck-globe-goodstock-black.jpg?w=1920"} class="col-2 pe-4" alt="..."/>
                    <div className="col-2 text-center" style={{"font-size": "20px"}}>Globe Deck</div> 
                    <div className="col-3 text-center" style={{"font-size": "20px"}}>39.99$</div> 
                    <div className="col-3 text-center d-flex justify-content-center" style={{"font-size": "20px"}}>
                        <input type="number" aria-label="Search" className="form-control ms-4" style={{"width":"100px"}}/>
                    </div> 
                    <div className="col-2 text-center" style={{"font-size": "20px"}}>120$</div> 
            </div> */}
        </div>
    )

}



export default ShoppingCart;