import axios from 'axios';

const api = axios.create({
    // caso ocorra erro, substituir para seu ip (ex: http://192.168.1.000:3333)
    baseURL: 'http://localhost:3333',
    headers: { 'Content-Type': 'application/json' }
});

export default api;