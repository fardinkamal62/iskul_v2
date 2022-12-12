import React from 'react';

import $ from 'jquery'
import {bake_cookie} from 'sfcookies';


import Buttons from './component/Button'
import Navbar from './component/NavbarOut'

import * as AxiosUtils from "../utils/Axios";

const submitForm = async (e) => {
    e.preventDefault()
    if ($('#email')[0].value === "" || $('#password')[0].value === "") {
        console.log('Input both email & password')
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
                    <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"/>
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
