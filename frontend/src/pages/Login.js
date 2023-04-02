import React from 'react';

import $ from 'jquery'
import {bake_cookie} from 'sfcookies';


import Buttons from './component/Button'
import Navbar from './component/NavbarOut'

import * as AxiosUtils from "../utils/Axios";

const submitForm = async (e) => {
    e.preventDefault()
    if ($('#email')[0].value === "" || $('#password')[0].value === "") {
        return
    }
    let response = await AxiosUtils.post('/login', {
        email: $("#email")[0].value,
        password: $("#password")[0].value
    })
    if (response.code !== 200) {
        alert('Wrong Credentials')
        return
    }
    bake_cookie('jwt', response.token)
    window.location.href = "http://127.0.0.1:3000/home";
    return
}

const Login = () => {
    return (<>
            <Navbar/>
            <div className='container m-5'>
                <form>
                    <div className='mb-3 form-floating'>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='bruce@wayne.com'/>
                        <label htmlFor="email" className="form-label">Email or Username</label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="password" className="form-control" id="password" placeholder='1'/>
                        <label htmlFor="password" className="form-label">Password</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="check">Remember Me</label>
                    </div>
                    <Buttons text='Submit' onClick={e => submitForm(e)}/>
                </form>
            </div>
        </>
    );
};

export default Login;
