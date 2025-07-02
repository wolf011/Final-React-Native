import { View, Text, FlatList, Image, TextInput, TouchableOpacity, Modal, Alert } from 'react-native'

import React, { useState } from 'react'
import movieService from '../../Components/Service/movieService'
import listaFilmes, { infosFilme } from '../../Components/Models/listaFilmes'
import { styles } from './styles'
import { AxiosResponse } from 'axios'
import { adicionarFavorito } from '../../Components/Service/favoritosService'
import { useAuth } from '../../Contexts/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur'



export default function Pesquisa() {
  const [movies, setMovies] = useState<infosFilme[] | []>([]);
  const [nome, setNome] = useState<string>("");
  const [modalIdVisivel, setModalIdVisivel] = useState<number | null>(null);

  const { user } = useAuth();

  const listar = async () => {
    const response: AxiosResponse<listaFilmes> | undefined = await movieService.getFilmesPorNome(nome);
    if (response && response.data) {
      response.data.results.length >= 1 ? setMovies(response.data.results) : Alert.alert("Filme não encontrado!", "Tente com outro nome")
    } else {
      setMovies([]);
    }

  }
  const apagar = async () => {
    setMovies([]);
    setNome('')
  }

  return (
    <View style={styles.container}>
      
      <TextInput value={nome ?? ""} style={styles.input} onChangeText={setNome} placeholder='Nome do filme' placeholderTextColor={"white"} />
    

      <View style={styles.botoes}>

        <TouchableOpacity style={styles.botao1} onPress={listar}>
          <Text style={styles.botaoTexto}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao2} onPress={apagar}>
          <Text style={styles.botaoTexto}>Apagar</Text>
        </TouchableOpacity>
        
      </View>

      

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BlurView intensity={50} tint="light" style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
              style={styles.poster}
            />
            <View style={styles.conteudo}>
              
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.descricao}>Lançamento: {item.release_date}</Text>
                <Text style={styles.descricao}>Avaliação: {item.vote_average}</Text>


              <TouchableOpacity style={styles.botao1} onPress={() => setModalIdVisivel(item.id)}>
                <Text style={styles.botaoTexto}>Sobre</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botao1}
                onPress={async () => {
                  if (user?.email) {
                    await adicionarFavorito(user.email, item.id);
                    Alert.alert('Adicionado aos favoritos!');
                  } else {
                    Alert.alert('Erro', 'Usuário não autenticado.');
                  }
                }}
              >
                <Text style={styles.botaoTexto}>Favoritar</Text>
              </TouchableOpacity>


              <Modal
                visible={modalIdVisivel === item.id}
                transparent={true}
                animationType='fade'
              >
                <View style={styles.modalBackground}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>{item.overview}</Text>

                    <TouchableOpacity style={styles.botao2} onPress={() => setModalIdVisivel(null)}>
                      <Text style={styles.botaoTexto}>Fechar</Text>
                    </TouchableOpacity>

                  </View>
                </View>

              </Modal>
            </View>
            
          </BlurView>
        )}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        start={{ x: 0.5, y: 1 }}         
        end={{ x: 0.5, y: 0 }}
        style={styles.gradientOverlay}
      />
    </View>
  )
}


