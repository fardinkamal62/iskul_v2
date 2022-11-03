import Axios from "axios";

const host = "http://127.0.0.1:4567"

const get = async (link, config) => {
    let response = await Axios.get(`${host}${link}`, config)
    return response.data
}

const post = async (link, data, config) => {
    let response = await Axios.post(`${host}${link}`, data, config)
    return response.data
}

export {get, post};

