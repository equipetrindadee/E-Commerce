// configApi.js

import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.25.252:8082', // ou a URL do seu backend
    baseURL:'http://localhost:8082',
});

// Adicione um interceptor para adicionar o token JWT a cada requisição
/* api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
); */

export default api;
