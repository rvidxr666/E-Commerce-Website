import React, {useState, useEffect, useNavigate} from 'react';
import ProductHeading from './ProductHeading.js';
import Carousel from '../Carousel/Carousel.js';
import CategoriesNav from '../CategoriesNav/CategoriesNav.js';
import axios from 'axios';

const Products = () => {

    const [products, changeProducts] = useState([])

    const fetchAPI = async () => {
        var res = await axios.get("http://localhost:8000/products/")
        changeProducts(res.data)
    }

    useEffect(() => {
        fetchAPI()
    }, [])


    return (
        <>
        <Carousel />
        <div className="container">
            <CategoriesNav />
            <div>
                {  
                    products.map((product, index) => {
                        if (index !== 0 && (index +1) % 4 === 0) {
                            return renderedProducts(products.slice(index-3, index + 1))
                        } else if (index === products.length - 1) {
                            let rest = products.length % 4
                            // var left = renderedProducts(products.slice(products.length - rest, products.length))
                            // console.log(left)
                            return renderedProducts(products.slice(products.length - rest, products.length))
                        }
                    })
                }
            </div>

        </div>
        </>
    )
}

const renderedProducts = (products) => {

        return (
        <div class="row wow fadeIn">
            {products.map((product) => {
                return <ProductHeading key={product.id} product={product}/>
            })}
        </div>
    )

}

export default Products;