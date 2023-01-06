import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Categories = () => {
    const [categories, changeCategories] = useState([{"category":"", "description":"", "picture_url": ""}])


    const fetchAPI = async () => {
        var res = await axios.get("http://localhost:8000/categories")
        changeCategories(res.data)
    }  
    
    
    useEffect(() => {
        fetchAPI()
    }, [])


    return (
    <div className="row mt-2">
        {categories.map((category) => {
            return (        
                <div className="card col ms-2 me-2" style={{"width": "18rem"}}>
                    <img width="300" height="300" src={category.picture_url} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{category.category}</h5>
                        <p className="card-text">{category.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })}
        </div>
    )
}


export default Categories;