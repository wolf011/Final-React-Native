import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, Linking } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AxiosResponse } from 'axios';
import movieService from '../../Components/Service/movieService';
import user from '../../Components/Models/log';
import { salvarSessao } from '../../Components/Storage/auth';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tk, setTk] = useState("");

  const autenticar = async () => {
    const response: AxiosResponse<user> | undefined = await movieService.getToken();
    if (response && response.data) {
      setTk(response.data.request_token)

      // Redirecionar usuário para autenticar no navegador
      const authUrl = `https://www.themoviedb.org/authenticate/${tk}`;
      Linking.openURL(authUrl); // Abre o navegador

      // Instrução: Peça para o usuário voltar após autorizar

      setTimeout(async () => {
        const sessao = await movieService.criarSessaoComToken(tk);
        if (sessao?.data?.session_id) {
          await salvarSessao(sessao.data.session_id);
          alert("Sessão criada com sucesso!");
        } else {
          alert("Erro ao criar sessão. Você autorizou o token?");
        }
      }, 10000); // Aguarda 10s para dar tempo de autorizar
    } else {
      alert("Erro ao obter token.");
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/user.png')} style={styles.imagem} />
      <Text style={styles.title}>Login</Text>

      <TextInput value={email ?? ""} style={styles.input} onChangeText={setEmail} placeholder='Insira email' />
      <TextInput value={senha ?? ""} style={styles.input} onChangeText={setSenha} placeholder='Insira senha' />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Pesquisar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}