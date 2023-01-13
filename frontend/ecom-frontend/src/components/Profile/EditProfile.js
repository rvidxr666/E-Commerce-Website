import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'


const EditProfile = () => {

    const [currBalance, changeCurrBalance] = useState("")
    const navigate = useNavigate();

    const [flashMessage, setFlashMessage] = useState({"message":null, "color": "red"})

    const fetchUserData = async () => {
        let resp = await axios.get("http://localhost:8000/get-user")
        let balance = resp.data.data.finance
        changeCurrBalance(balance)
    }

    const filterData = (e) => {
        let obj = {}
        for (let elem of e.target) {
            if (elem.tagName === 'INPUT' && elem.value !== "") {
                obj[elem.name] = elem.value
            }
        }
        return obj

    }
    const submitData = async (e) => {
        e.preventDefault();
        let filteredData  = filterData(e)

        if (parseInt(filteredData.finance) + currBalance > 10000 || parseInt(filteredData.finance) > 10000) {
            setFlashMessage({"message":"Maximum balance allowed is 10000$!", "color": "red"})
            return
        }

        let resp = await axios.post("http://localhost:8000/edit-user", filteredData)

        if (resp.data.data === "registered") {
            setFlashMessage({"message":"User with such email is already registered!", "color": "red"})
            return
        }

        navigate("/profile")
    }

    useEffect(() => {
        fetchUserData()
    })

    return (
        <div className="container rounded bg-white mt-2 mb-5">
        <div className="row">
        <div className="col-md-3 border-right"></div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="text-right">Edit Profile</h4>
                </div>
                <div className="mb-4">You can change as much positions as you want</div>
                <form className="form-container" method="POST" onSubmit={submitData}>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" name="name" className="form-control" placeholder="first name"/></div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" name="surname" className="form-control" placeholder="surname" /></div>
                </div>
                <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Add to Balance</label><input type="number" name="finance" className="form-control" placeholder="enter balance"/></div>                    <div className="col-md-6"><label className="labels">Birth Date</label><input type="date" name="birth_date" className="form-control" placeholder="date"/></div>
                </div>
                <div className="text-center mt-3" style={{"color":flashMessage.color}}>{flashMessage.message}</div>
                <div className="mt-3 text-center"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                </form>
            </div>
        </div>
    </div>
</div>
    )
}


export default EditProfile;