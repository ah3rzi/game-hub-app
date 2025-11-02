import axios, { CanceledError } from "axios";

const apiClient = axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'e53bba19d7914970889f528d70c8e06d',
    }
})

export default apiClient;

export {CanceledError};