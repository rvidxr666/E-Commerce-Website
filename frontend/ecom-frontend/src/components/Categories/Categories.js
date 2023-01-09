import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Categories = () => {
    const [categories, changeCategories] = useState([{"pk":"", "description":"", "picture_url": ""}])


    const fetchAPI = async () => {
        var res = await axios.get("http://localhost:8000/categories")
        changeCategories(res.data)
    }  
    
    
    useEffect(() => {
        fetchAPI()
    }, [])


    const categoriesRow = (categories) => {

        return (
            <div className="row mt-2">
                {categories.map(category => {
                    return (
                        <div className="card col-3 ms-2 me-2 mt-2" style={{"width": "31rem"}}>
                            <img width="300" height="300" src={category.picture_url} class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{category.pk.charAt(0).toUpperCase() + category.pk.slice(1)}</h5>
                                <p className="card-text">{category.description}</p>
                                <Link to={`/products?filter=category_id&value=${category.pk}`} className="btn btn-primary">Check it out</Link>
                            </div> 
                        </div>  
                    )
                })}
            </div>
        )

    }


    return (
        <>
            {categories.map((category, index) => {
                if ((index + 1) % 3 === 0) {
                    return categoriesRow(categories.slice(index-2, index + 1))
                } else if (index === categories.length - 1) {
                    let rest = categories.length % 3
                    return categoriesRow(categories.slice(categories.length - rest, categories.length))
                }                
            })}
        </>
    )
}


export default Categories;