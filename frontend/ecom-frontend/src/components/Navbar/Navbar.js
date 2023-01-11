import {Link} from 'react-router-dom'
import React, {useState ,useEffect} from 'react';
import axios from 'axios';

const Navbar = () => {

    const [loggedStatus, changeLoggedStatus] = useState("")

    const logout = async () => {
      await axios.get("http://localhost:8000/logout")
      window.location.reload(false);
    }

    const checkLoggesStatus = async () => {
      let resp = await axios.get("http://localhost:8000/check-session")
      let status = resp.data.data

      if (status === "logged") {
        changeLoggedStatus("logged")
      }
    }

    useEffect(() => {
      checkLoggesStatus()
    }, [])

    const modifyNavbar = () => {
      if (loggedStatus === "") {
        return (
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to={"/login"}>Login</Link>
          </li>
        )
      } else {
        return (
          <>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to={"/profile"}>Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={logout} aria-current="page" >Logout</Link>
          </li>
          </>
        )
      }
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" class="navbar-brand">M-Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link">Categories</Link>
              </li>
            </ul>

            <ul className="navbar-nav align-self-end mb-2 mb-lg-0">
              {modifyNavbar()}
              <li className="nav-item">
                <Link className="nav-link" to={"/cart"}>Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;