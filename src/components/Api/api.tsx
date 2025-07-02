import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '2f131750254607ed4d38ad28047c1392',
        language: 'pt-BR'
    }
});

export default api;
