import { useState, useMemo } from "react";
import { read_cookie } from "sfcookies";

import * as axios from "../utils/Axios";

import Navbar from "../pages/component/NavbarIn";
import Sidebar from "../pages/component/Sidebar";

import Personal from "../pages/home/Personal";
import Class from "../pages/home/Class";

const Home = () => {
  const auth = async (link) => {
    const cookie = read_cookie("jwt");
    const config = { headers: { authorization: `Bearer ${cookie}` } };
    const response = await axios.get(`/home?section=${link}`, config);
    if (response.code !== 200) {
      window.location.href = "http://127.0.0.1:3000/login";
    }
    return response;
  };
  const switchView = (path, res) => {
    switch (path) {
      case "personal":
        return <Personal data={res} />;
      case "class":
        return <Class data={res} />;
      default:
        return <Personal data={res} />;
    }
  };
  const [id, setId] = useState("");
  const res = {};

  const page = async (e) => {
    setId(e.target.id);
    res.authentication = await auth(id);
  };
  useMemo(() => {
    const run = async () => {
      await page({ target: { id: "personal" } });
    };
    run();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar page={page} />
      <div className="container my-5 shadow p-3 rounded-3">
        {switchView(id, res)}
      </div>
    </>
  );
};

export default Home;
