import Axios from "axios";
import {read_cookie} from "sfcookies";

const host = "http://127.0.0.1:4567"

const cookie = read_cookie("jwt");
const config = {headers: {authorization: `Bearer ${cookie}`}};

const get = async (link) => {
    let response = await Axios.get(`${host}${link}`, config)
    return response.data
}

const post = async (link, data) => {
    let response = await Axios.post(`${host}${link}`, data, config)
    return response.data
}

const put = async (link, data) => {
    let response = await Axios.put(`${host}${link}`, data, config)
    return response.data
}

export {get, post, put};

