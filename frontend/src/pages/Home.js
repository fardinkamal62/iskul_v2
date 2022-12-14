import {useState, useMemo} from "react";
import {read_cookie} from "sfcookies";

import * as axios from "../utils/Axios";

import Navbar from "../pages/component/NavbarIn";
import Sidebar from "../pages/component/Sidebar";

import Personal from "../pages/home/Personal";
import Class from "../pages/home/Class";

const Home = () => {
    let loaded = false;
    const [res, setRes] = useState({})
    const [id, setId] = useState('')

    const changeRes = (val) => {
        setRes({})
        setRes(res => ({...res, ...val}));
    }

    const auth = async (link) => {
        const cookie = read_cookie("jwt");
        const config = {headers: {authorization: `Bearer ${cookie}`}};
        const response = await axios.get(`/home?section=${link}`, config);
        if (response.code !== 200) {
            window.location.href = "http://127.0.0.1:3000/login";
        }
        return response;
    };

    useMemo(() => {
        loaded = true;
    }, [res])

    // for switching page
    const switchView = (id, res) => {
        switch (id) {
            case "personal":
                return <Personal data={res}/>;
            case "class":
                return <Class data={res}/>;
            default:
                return <Personal data={res}/>
        }
    };

    // function to change page
    const page = async (e) => {
        let targetId = e.target.id;
        setId(targetId);
    };

    // on id change to fetch response of that section
    useMemo(() => {
        loaded = false;
        (async () => {
            let response = await auth(id);
            changeRes(response);
        })()
        return () => null
    }, [id])

    // on start
    useMemo(() => {
        setId('personal');
    }, []);

    return (
        <>
            <Navbar/>
            <Sidebar page={page}/>
            <div className="container my-5 card p-3 rounded-3">
                {!loaded && <div className='h3 text-center'>Loading...</div>}
                {(loaded) && switchView(id, res)}
            </div>
        </>
    );
};

export default Home;
