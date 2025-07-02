import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, Linking, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { AxiosResponse } from 'axios';
import movieService from '../../components/Service/movieService';
import user from '../../components/Models/log';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Contexts/AuthContext';

type ParamNavegacao = {
  Home: string,
  Login: string,
  Favoritos: string,
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {login} = useAuth();
  
  const [tk, setTk] = useState("");
  const navigation = useNavigation<NavigationProp<ParamNavegacao>>();

  const autenticar = async () => {
    const response: AxiosResponse<user> | undefined = await movieService.getToken();
    if (response?.data?.request_token) {
      setTk(response.data.request_token)
      console.log(tk);

      const authUrl = `https://www.themoviedb.org/authenticate/${tk}`;
      Linking.openURL(authUrl);
      Alert.alert("Atenção", "Autorize o acesso e volte para o app.");


      setTimeout(async () => {
        const sessao = await movieService.criarSessaoComToken(tk);
        if (sessao?.data?.session_id) {

          await login(sessao.data.session_id);
          alert("Sessão criada com sucesso!");

        } else {
          alert("Erro ao criar sessão. Você autorizou o token?");
        }
      }, 10000);
    } else {
      alert("Erro ao obter token.");
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/user.png')} style={styles.imagem} />
      <Text style={styles.title}>Login</Text>

      <TextInput value={email ?? ""} style={styles.input} onChangeText={setEmail} placeholder='Insira email' />
      <TextInput value={senha ?? ""} secureTextEntry style={styles.input} onChangeText={setSenha} placeholder='Insira senha' />

      <TouchableOpacity style={styles.botao} onPress={autenticar}>
        <Text style={styles.botaoTexto}>Login com TMDB</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}