import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to='/'>
                    <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                    ProjectZ
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/addcategories">Create Categories</Link>
                        <Link className="nav-link" to="/additems">Create Items</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
