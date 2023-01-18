import React, {useState, useEffect, useNavigate} from 'react';
import { useLocation } from "react-router-dom";
import ProductHeading from './ProductHeading.js';
import Carousel from '../Carousel/Carousel.js';
import CategoriesNav from '../CategoriesNav/CategoriesNav.js';
import axios from 'axios';
import Pagination from '../Pagination/Pagination.js';

const Products = () => {

    const [products, changeProducts] = useState([])
    const [currentPage, changeCurrentPage] = useState(1)
    const productsPerPage = 8

    const query = new URLSearchParams(useLocation().search);

    const filter_name = query.get("filter")
    const filter_val = query.get("value");

    const fetchAPI = async () => {
        var res = await axios.get("http://localhost:8000/products/")
        changeProducts(res.data)
    }

    const fetchAPIFilteredTest = async (filter_name, filter_value) => {

        if (filter_name === "name") {
            var res = await axios.get(`http://localhost:8000/products?${filter_name}=${filter_value}`)
        } else {
            var res = await axios.get(`http://localhost:8000/products?${filter_name}=${filter_value}`)
        }

        changeProducts(res.data)
        changeCurrentPage(1)
    }

    const switchPage = (num) => {
        changeCurrentPage(num)
    }

    const previousPage = () => {
        if (currentPage !== 1) {
            changeCurrentPage(currentPage - 1);
        }
     }
   
     const nextPage = () => {
        if (currentPage !== Math.ceil(products.length / productsPerPage)) {
            changeCurrentPage(currentPage + 1);
        }
     }

    // whenever filter is changed
    useEffect(() => {
        if (filter_name != null && filter_val != null) {
            var filter = query.get("filter")
            var filter_value = query.get("value")
            fetchAPIFilteredTest(filter, filter_value)
        } else {
            fetchAPI()
        }
    }, [filter_val])

    const lastItemIndex = productsPerPage * currentPage
    const firstItemIndex = lastItemIndex - productsPerPage
    const currentPosts = products.slice(firstItemIndex, lastItemIndex)


    return (
        <>
        <Carousel />
        <div className="container">
            <CategoriesNav getAll={fetchAPI} getFilteredTest={fetchAPIFilteredTest}/>
            <div>
                {  
                    currentPosts.map((product, index) => {
                        if (index !== 0 && (index +1) % 4 === 0) {
                            return renderedProducts(currentPosts.slice(index-3, index + 1))
                        } else if (index === currentPosts.length - 1) {
                            let rest = currentPosts.length % 4
                            return renderedProducts(currentPosts.slice(currentPosts.length - rest, currentPosts.length))
                        }
                    })
                }
            </div>
        </div>
        <Pagination productsPerPage={productsPerPage} totalAmount={products.length} changePageFunc={switchPage} nextPage={nextPage} previousPage={previousPage} />
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