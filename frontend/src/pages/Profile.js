import React, {useMemo, useState} from 'react';
import {useParams} from 'react-router-dom'

import * as axios from "../utils/Axios";

const style = {
    "width": '15%', "height": 'auto', "margin": "0 45 0"
}

const Profile = () => {
    const [userInfo, setRes] = useState({})
    const [loaded, setLoaded] = useState(false)

    const params = useParams();

    const auth = async () => {
        const response = await axios.post(`/profile`, {username: params.id});
        if (response.code !== 200) {
            window.location.href = "http://127.0.0.1:3000/login";
        }
        return response;
    };

    useMemo(() => {
        (async () => {
            let response = await auth();
            setRes(response);
            userInfo !== '' && setLoaded(true)
        })()
    }, [])

    return (
        <>{(loaded) ?
            <div className="container my-5 p-3 rounded-3">
                <div className='position-relative'>
                </div>
                <img src={`${process.env.PUBLIC_URL}/profile_photo/${userInfo.data.profile_photo}`}
                     className="img-fluid d-sm-block d-none rounded-circle mx-auto" alt="user"
                     style={style}/>
                <div className='text-center'>
                    <div className='h2 m-3 text-decoration-underline'>Hello I'm {userInfo.data.name}</div>
                    <div className='h4'>Student of Dhaka International University</div>
                </div>
                <div className='m-4 card p-4'>
                    <div className='h4'>Contact information:</div>
                    <ul>
                        <li className='list-group-item'><span className='bi-telephone'/> {userInfo.data.phone}</li>
                        <li className='list-group-item'><span className='bi-mailbox' typeof='email'/> {userInfo.data.email}</li>
                    </ul>
                </div>
            </div> : <div className='h3 text-center'>Loading...</div>}
        </>
    );
};

export default Profile;