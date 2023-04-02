import React from 'react';
import {Link} from 'react-router-dom'

import '../../App.css'

const imageStyle = {
    width: '30%', height: 'auto', margin: '0 0 0 auto'
}

const Navbar = () => {
    return (
        <navbar id="navbar" className="navbar navbar-expand-md navbar-dark p-2 sticky-top"
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
                            <Link to="/home" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/registration" className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;
