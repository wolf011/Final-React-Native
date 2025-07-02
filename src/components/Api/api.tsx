import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '4e5030d6ff48d5e136b85eef0c2b4104',
        language: 'pt-BR'
    }
});

export default api;
