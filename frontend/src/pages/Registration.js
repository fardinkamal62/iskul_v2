import React, {useState} from 'react';
import $ from "jquery";
import Axios from "axios";

import Buttons from "./component/Button";
import Navbar from "./component/NavbarOut";

const Registration = () => {
    const [name, changeName] = useState('')
    const [registration, changeRegistration] = useState()
    const [roll, changeRoll] = useState()
    const [number, changeNumber] = useState()
    const [email, changeEmail] = useState('')
    const submitForm = (e) => {
        e.preventDefault()
        if ($('#reg')[0].value === "") {
            console.log('Invalid')
            return
        }
        $('#reg').prop("disabled", true);
        Axios.post('http://127.0.0.1:4567/registration/check', {
            reg: $("#reg")[0].value,
        }).then((res) => {
            let data = res.data[0]
            console.log(res)
            $('#step-1').prop("hidden", true);
            $("#step-2").prop("hidden", false);
            changeName(data.name)
            changeEmail(data.email)
            changeNumber(data.phone)
            changeRegistration(data.code)
            changeRoll(data.roll)
        })
    }
    const createAccount = (e) => {
        e.preventDefault()
        if ($('#username')[0].value !== '' && $('#password')[0].value !== '') {
            Axios.post('http://127.0.0.1:4567/registration', {
                reg: $("#reg")[0].value,
                username: $('#username')[0].value,
                password: $('#password')[0].value
            }).then((res) => {
                let data = res.data
                if (data.error) {
                    alert('Sorry account already exist. Redirecting to sign in page')
                    window.location.href = "http://127.0.0.1:3000/login";
                }
                if (data.acknowledged) {
                    alert('Account Creation Successful. Redirecting to sign in page')
                    window.location.href = "http://127.0.0.1:3000/login";
                    return
                }
            })
            return
        }
        alert('Enter username & password')
        return
    }
    return (
        <>
            <Navbar/>
            <div className='container m-5' id='step-1'>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="exampleInputEmail1" className="form-label">Registration Number</label>
                        <input type="text" className="form-control" id="reg"/>
                    </div>
                    <Buttons text='Submit' onClick={e => submitForm(e)}/>
                </form>
            </div>
            <div id='step-2' hidden={true} className='container m-5'>
                <div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type='text' className='form-control' id='username'/>
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type='password' className='form-control' id='password'/>
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type='text' className='form-control' id='name' disabled={true} value={name}/>
                    <label htmlFor="exampleInputEmail1" className="form-label">Registration Number</label>
                    <input type='text' className='form-control' id='reg' disabled={true} value={registration}/>
                    <label htmlFor="exampleInputEmail1" className="form-label">Roll</label>
                    <input type='text' className='form-control' id='roll' disabled={true} value={roll}/>
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                    <input type='text' className='form-control' id='phone' disabled={true} value={number}/>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type='text' className='form-control' id='email' disabled={true} value={email}/>
                </div>
                <br/>
                <Buttons text='Create Account' onClick={e => createAccount(e)}/>
            </div>
        </>
    );
};

export default Registration;
