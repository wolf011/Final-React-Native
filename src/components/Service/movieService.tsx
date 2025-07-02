import api from "../Api/api";


async function getFilmesPorNome(nome: string) {
  try {
    return await api.get(`/search/movie?query=${nome}`)

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

async function getFilmesPorId(id: number) {
  try {
    return await api.get(`/movie/${id}`);
  } catch (error) {
    console.error("Erro ao buscar filme por ID: ", error)
    return null;
  }

}


export default {
  getFilmesDoMomento,
  getFilmesPorNome,
  getFilmesPorId
};