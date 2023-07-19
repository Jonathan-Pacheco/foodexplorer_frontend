import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-0fpb.onrender.com"
    //baseURL:"http://localhost:3333"
});