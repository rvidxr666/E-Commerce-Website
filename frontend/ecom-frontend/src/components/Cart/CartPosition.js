import React, {useState} from 'react';

const CartPosition = ({product}) => {

    const [cartQuantity, changeCartQuantity] = useState(product.cart_quantity)
    const [cartSum, changeCartSum] = useState(cartQuantity * product.price)

    console.log("crtQuantity", cartQuantity)
    const onChangeCartAmount = (e) => {
        e.preventDefault()
        var value = e.target.value
        var valForSum = 0

        if (value <= 0) {
            changeCartQuantity(1)
            valForSum = 1
        } else if (value > product.quantity) {
            changeCartQuantity(product.quantity) 
            valForSum = product.quantity
        } else {
            changeCartQuantity(value) 
            valForSum = value
        }

        changeCartSum(valForSum * product.price)
    }


    return (
        <div className="ms-2 me-2 mt-4 row align-items-center position-relative" style={{"box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <img width="20" height="200" src={product.header_image} class="col-2 pe-4" alt="..."/>
            <div className="col-2 text-center" style={{"font-size": "20px"}}>{product.name}</div> 
            <div className="col-3 text-center" style={{"font-size": "20px"}}>{product.price}$</div> 
            <div className="col-3 text-center d-flex justify-content-center" style={{"font-size": "20px"}}>
                <input type="number" value={cartQuantity} onChange={onChangeCartAmount} aria-label="Search" className="form-control ms-4" style={{"width":"100px"}}/>
            </div> 
            <div className="col-2" style={{"font-size": "20px"}}>
                <div className="text-center">{cartSum}$</div>
            </div>
            <div class="d-flex gap-2 d-md-block">
                <button className="btn btn-danger position-absolute bottom-0 end-0 me-5" type="button">Delete</button>
            </div>            
        </div>  
    )
}


export default CartPosition;