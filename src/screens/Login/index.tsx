import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useAuth } from '../../Contexts/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();

  const autenticar = async () => {
    const sucesso = await login(email, senha);
    if (sucesso) {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos.');
    }
  };

  return (

  
  
      <LinearGradient colors={['#a2d4ec', '#b29eff']} style={styles.container}>
   
    <Text style={styles.title}>Realize seu login</Text>
      <Image
       source={require('../../../assets/user.png')} style={styles.imagem} />
     

      <TextInput
       value={email ?? ""} style={styles.input} onChangeText={setEmail} placeholder='Insira email'
        placeholderTextColor="#1C1C1C" />
        
      <TextInput 
      value={senha ?? ""} secureTextEntry style={styles.input} onChangeText={setSenha} placeholder='Insira senha' 
       placeholderTextColor="#1C1C1C"/>

      <TouchableOpacity style={styles.botao} onPress={autenticar}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
      </LinearGradient>
  )
}
