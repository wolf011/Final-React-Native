import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'cole_sua_apikey_aqui',
        language: 'pt-BR'
    }
});

export default api;