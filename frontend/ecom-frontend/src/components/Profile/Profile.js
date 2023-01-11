import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


const Profile = () => {

    const navigate = useNavigate()
    const [profileData, changeProfileData] = useState("")

    const fetchAPI = async () => {
        let resp = await axios.get("http://localhost:8000/get-user")
        if (resp.data.data === "invalid") {
            navigate("/login")
        } else {
            changeProfileData(resp.data.data)
        }
    }


    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                <span class="font-weight-bold">{profileData.name}</span>
                <span class="text-black-50">{profileData.pk}</span><span> </span></div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Profile</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">Name: <b>{profileData.name}</b></div>
                        <div class="col-md-6">Surname: <b>{profileData.surname}</b></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">Email: <b>{profileData.pk}</b></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">Birth Date:</div>
                        <div><b>{profileData.birth_date}</b></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">Balance:</div>
                        <div><b>{profileData.finance}$</b></div>
                    </div>
                    <Link to={"/profile/edit"} className="mt-5 text-center btn btn-primary profile-button" type="Button">Edit Profile</Link>
                </div>
            </div>
        </div>
    </div>
    )
}



export default Profile