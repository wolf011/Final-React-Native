import { Text, Alert, TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient';


export default function Subscription() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  const handleCadastro = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Digite um e-mail válido.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }


    const novoUsuario = { nome, email, senha };
    

    try {
      const dadosSalvos = await AsyncStorage.getItem('usuarios');
      const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      const jaExiste = usuarios.some((u: any) => u.email === email);
      if (jaExiste) {
        Alert.alert('Erro', 'Este e-mail já está cadastrado.');
        return;
      }

      usuarios.push(novoUsuario);
      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));

      Alert.alert('Sucesso', 'Usuário cadastrado!');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar o usuário.');
      console.error(error);
    }
  }


  return (
   <LinearGradient colors={['#a2d4ec', '#b29eff']} style={styles.container}>
       <Text style={styles.titulo}>Faça o seu cadastro</Text>

       <Image
   source={require('../../../assets/user.png')}
  style={styles.avatar}
/>

     <TextInput
       placeholder='Digite o seu nome'
       placeholderTextColor="#1C1C1C" 
       value={nome}
       onChangeText={setNome}
       style={styles.input}
       />
      <TextInput
        placeholder='Digite seu e-mail'
           placeholderTextColor="#1C1C1C" 
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <TextInput
        placeholder='Digite sua senha'
           placeholderTextColor="#1C1C1C" 
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry
      />

<TouchableOpacity onPress={handleCadastro} style={styles.botao}>
  <Text style={styles.textoBotao}>Cadastrar</Text>
</TouchableOpacity>

 </LinearGradient>
  )
}