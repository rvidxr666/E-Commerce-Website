import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import React, {useState} from 'react';



const Register = () => {

    const navigate = useNavigate();

    const [flashMessage, setFlashMessage] = useState({"message":null, "color": "red"})

    const filterData = (arr) => {
        let req = {}
        for (let elem of arr) {
            if (elem.tagName === "INPUT") {
                req[elem.name] = elem.value
            } else if (elem.tagName === "SELECT") {
                req[elem.name] = elem.value[0]
            }
        }
        return req
    }

    // Add some validation
    const submitData = async (e) => {
        e.preventDefault()

        let req = filterData(e.target)
        let resp = await axios.post("http://localhost:8000/register", req)
        let status = resp.data.data

        if (status === "registered") {
            setFlashMessage({"message":"User already registered!", "color": "red"})
        } else {
            setFlashMessage({"message":"You succesfully registered!", "color": "green"})
            navigate("/login")
        }
    }

    return (
            <div className="container-fluid">
                <div className="row justify-content-center mt-3">
                    <div className="col-md-3">
                        <form className="form-container" method="POST" onSubmit={submitData}>
                        <div className="mb-3">
                            <label for="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label for="surname" className="form-label">Your Surname</label>
                            <input type="text" className="form-control" id="surname" name="surname" required/>
                        </div>
                        <div className="mb-3">
                            <label for="birth" className="form-label">Your Date of Birth</label>
                            <input type="date" className="form-control" id="birth" name="birth" required/>
                        </div>
                        <div className="mb-3">
                            <label for="gender" className="form-label">Your Gender</label>
                            <select id="gender" className="form-control" name="gender" required>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required/>
                        </div>
                        <div className="text-center" style={{"color":flashMessage.color}}>{flashMessage.message}</div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">Register</button>
                            <Link to = {"/login"} className="btn btn-secondary" type="button">Back</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}



export default Register;