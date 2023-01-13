import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import React, {useState} from 'react';


const Login = () => {

    const navigate = useNavigate();

    const [flashMessage, setFlashMessage] = useState({"message":null, "color": "red"})

    const submitData = async (e) => {
        e.preventDefault()
    
        let req = {"email": e.target[0].value, "password": e.target[1].value}
        let resp = await axios.post("http://localhost:8000/login", req)
        let status = resp.data.data
    
        if (status === "allowed") {
            setFlashMessage({"message":"You succesfully registered!", "color": "green"})
            navigate("/profile")
            window.location.reload(false);
        } else {
            setFlashMessage({"message":"Email or password are incorrect!", "color": "red"})
        }
    }


    return (
        <div className="row justify-content-center align-items-center mt-4 position-relative">
            <div className="col-md-3">
                <form className="form-container" method="POST" onSubmit={submitData}>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Email" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="Password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Password" rows="3"></input>
                    </div>
                    <div className="text-center" style={{"color":flashMessage.color}}>{flashMessage.message}</div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">Submit</button>
                        <Link to={"/register"} class="btn btn-secondary" type="button">Register</Link>
                  </div>
                </form>
            </div>
        </div>
    )
}



export default Login;