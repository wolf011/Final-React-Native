import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '15f893bf768863e9dfdd315ec901e25f',
        language: 'pt-BR'
    }
});

export default api;