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
    const productsPerPage = 4

    const query = new URLSearchParams(useLocation().search);
    console.log(query.get("id"));
    console.log(query.get("artist"));

    const fetchAPI = async () => {
        var res = await axios.get("http://localhost:8000/products/")
        changeProducts(res.data)
    }

    const fetchAPIFilteredTest = async (e, filter) => {
        e.preventDefault()

        if (filter === "name") {
            console.log(e)
            var filter_value = e.target[0].value
            var res = await axios.get(`http://localhost:8000/products?${filter}=${filter_value}`)
        } else {
            filter_value = e.target.name
            var res = await axios.get(`http://localhost:8000/products?${filter}=${filter_value}`)
        }

        changeProducts(res.data)
        changeCurrentPage(1)
    }

    // const fetchAPIFiltered = async (filter) => {
    //     let req = {"filter": filter}
    //     var res = await axios.post("http://localhost:8000/products/", req)
    //     changeProducts(res.data)
    //     changeCurrentPage(1)
    // }

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

    useEffect(() => {
        fetchAPI()
    }, [])

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