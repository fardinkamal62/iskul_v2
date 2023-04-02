import {Link} from 'react-router-dom'

// import * as cookie from 'sfcookies'
import {delete_cookie} from 'sfcookies'

import '../../App.css'
import './Button'
import Button from "./Button";
import React from "react";

const imageStyle = {
    width: '30%', height: 'auto', margin: '0 0 0 auto'
}

const Navbar = () => {
    const logout = () => {
        delete_cookie('jwt')
        window.location.href = "http://127.0.0.1:3000/";
    }
    return (
        <navbar id="navbar" className="navbar navbar-expand-md navbar-dark p-2 navbar-static-top"
                style={{background: "#003ab0"}}>
            <div className="container">
                <Link to="/" className='navbar-brand'><p style={{fontSize: 40, color: 'white', textDecoration: 'auto'}}>Iskul v2</p></Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbutton"
                        aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbutton">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Button text='Log Out' color='red' onClick={()=>{logout()}}/>
                        </li>
                    </ul>
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;
