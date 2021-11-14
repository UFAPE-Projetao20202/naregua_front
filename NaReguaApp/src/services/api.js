import axios from 'axios';

const api = axios.create({
    // caso ocorra erro, substituir para seu ip (ex: http://192.168.1.000:3333)
    baseURL: 'http://10.0.0.118:19002',
    headers: { 'Content-Type': 'application/json' }
});

export default api;