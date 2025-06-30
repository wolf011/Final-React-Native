import { View, Text } from 'react-native'
import api from "../Api/api";

async function getFilmes() {
    try {
        return await api.get(`/discover/movie`)

    } catch (error) {
        console.error(error);
    }
}

async function getFilmesPorNome(nome: string) {
    try {
        return await api.get(`/search/movie?query=${nome}&language=pt-BR`)

    } catch (error) {
        console.error(error);
    }
}

async function getFilmesDoMomento() {
    try {
        return await api.get(`/movie/now_playing`)

    } catch (error) {
        console.error(error);
    }
}

export default {getFilmes, getFilmesDoMomento, getFilmesPorNome};