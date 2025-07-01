import api from "../Api/api";

async function getToken() {
    try {
        return await api.get(`/authentication/token/new`)

    } catch (error) {
        console.error(error);
    }
}

async function criarSessaoComToken(token: string) {
  try {
    return await api.post(`/authentication/session/new`, {
      request_token: token
    });
  } catch (error) {
    console.error("Erro ao criar sessão:", error);
  }
}

async function obterConta(sessionId: string) {
  try {
    const response = await api.get(`/account?session_id=${sessionId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados da conta", error);
    return null;
  }
}

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

export default { getFilmes, getFilmesDoMomento, getFilmesPorNome, getToken, criarSessaoComToken, obterConta };