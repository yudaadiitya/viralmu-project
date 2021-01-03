import axios from 'axios';

const token = window.localStorage.getItem('token');
const API_URL = 'http://localhost:3001/api/'

const axiosIntance = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

export default axiosIntance;