import React from 'react';
import {Link} from 'react-router-dom'

import '../../App.css'

const imageStyle = {
    width: '30%', height: 'auto', margin: '0 0 0 auto'
}

const Navbar = () => {
    return (
        <navbar id="navbar" className="navbar navbar-expand-md navbar-dark p-2 sticky-top"
                style={{background: "green"}}>
            <div className="container">
                <Link to="/">
                    <img className="navbar-brand img-fluid d-sm-block d-none rounded-circle float-start"
                         src="https://play-lh.googleusercontent.com/n5DHD7aLjABMNZ7i4to3rLQwAQZrfl_0EitbyRUygUvADCKVkyE1KqiqOkAaBnBzOjY=w240-h480"
                         style={imageStyle} alt='DIU Logo'/></Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbutton"
                        aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbutton">
                    <ul className="navbar-nav ms-auto">
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
