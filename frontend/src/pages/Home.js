import {useState, useMemo} from "react";

import * as axios from "../utils/Axios";

import Navbar from "../pages/component/NavbarIn";
import Sidebar from "../pages/component/Sidebar";

import Personal from "../pages/home/Personal";
import Class from "../pages/home/Class";
import EditProfile from "./home/Personal/EditProfile";

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    const [res, setRes] = useState({})
    const [id, setId] = useState('')

    const changeRes = (val) => {
        setRes({})
        setRes(res => ({...res, ...val}));
    }

    const auth = async (link) => {
        const response = await axios.get(`/home?section=${link}`);
        if (response.code !== 200) {
            window.location.href = "http://127.0.0.1:3000/login";
        }
        return response;
    };

    useMemo(() => {
        setLoaded(true);
    }, [res])

    // for switching page
    const switchView = (id, res) => {
        switch (id) {
            case "personal":
                return <Personal data={res} page={page}/>;
            case "class":
                return <Class data={res} />;
            case "editProfile":
                return <EditProfile data={res} page={page}/>
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
        setLoaded(false);
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
                {(loaded) ? switchView(id, res) : <div className='h3 text-center'>Loading...</div>}
            </div>
        </>
    );
};

export default Home;
