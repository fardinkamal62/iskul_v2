import {Link} from 'react-router-dom'

// import * as cookie from 'sfcookies'
import {delete_cookie} from 'sfcookies'

import '../../App.css'
import './Button'
import Button from "./Button";

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
                            <Button text='Log Out' color='red' onClick={()=>{logout()}}/>
                        </li>
                    </ul>
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;
