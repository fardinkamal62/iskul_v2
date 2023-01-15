import React, {useState} from 'react';

import * as AxiosUtils from "../../../utils/Axios";
import {delete_cookie} from "sfcookies";
import $ from "jquery"

const EditProfile = ({data, page}) => {
    const userInfo = data.data;
    const pass = e => page(e);
    const [name, changeName] = useState(userInfo.name)
    const [username, changeUserName] = useState(userInfo.username)
    const [phone, changePhone] = useState(userInfo.phone)
    const [email, changeEmail] = useState(userInfo.email)
    const [cred, changeCred] = useState(false)

    const updateProfile = async (e) => {
        e.preventDefault()
        let response = await AxiosUtils.put('/home/updateProfile', {
            name,
            username,
            phone,
            email,
            password: $('#newpass').val()
        })
        if (response.code !== 200) {
            alert('Wrong Credentials')
            return
        }
        if (cred) {
            delete_cookie('jwt')
            alert("Username changed, please login with new credentials")
            window.location.href = "http://127.0.0.1:3000/login";
        }
        return
    }
    return (
        <>
            <div className='position-absolute'>
                <button id='personal' className='btn text-primary' onClick={(e) => pass(e)}><span
                    className='bi bi-arrow-left-circle'/> Profile View
                </button>
            </div>
            <div className='h1 text-center'>Edit Profile</div>
            <hr/>
            <div className='position-relative'>
                <ul>
                    <li className='list-group-item'><b>Name: <input className='form-control' onChange={(e) => {
                        changeName(e.target.value)
                    }} value={name}/></b></li>
                    <li className='list-group-item'><b>Email: <input className='form-control' onChange={(e) => {
                        changeEmail(e.target.value);
                        changeCred(true);
                    }} value={email}/></b></li>
                    <li className='list-group-item'><b>Phone: <input className='form-control' onChange={(e) => {
                        changePhone(e.target.value)
                    }} value={phone}/></b></li>
                </ul>
                <br/>
                <ul>
                    <li className='list-group-item'><b>Username: <input className='form-control' onChange={(e) => {
                        changeCred(true);
                        changeUserName(e.target.value);
                    }} value={username}/></b></li>
                    <li className='list-group-item'><b>New Password: <input id='newpass' type='password'
                                                                            className='form-control'/></b></li>
                </ul>
                <button className='btn btn-outline-primary position-relative start-50' onClick={(e) => {
                    updateProfile(e)
                }}>Update
                </button>
            </div>
        </>
    );
};

export default EditProfile;