import { View, Text } from 'react-native'
import api from "../Api/api";

async function getMovie() {
    try {
        return await api.get(`/movie/12`, {headers: {Token: ""}})

    } catch (error) {
        console.error(error);

    }
}

export default {getMovie};