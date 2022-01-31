import axios from "axios";

const instance = axios.create({
    baseURL: "https://merntiktokclone5.herokuapp.com/",
});

export default instance;