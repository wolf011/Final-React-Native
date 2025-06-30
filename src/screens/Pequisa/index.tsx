import { View, Text, FlatList, Image, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import movieService from '../../components/Service/movieService'
import listaFilmes, { infosFilme } from '../../components/Models/listaFilmes'
import { styles } from './styles'


export default function Pesquisa() {
  const [movies, setMovies] = useState<infosFilme[] | []>([]);
  const [nome, setNome] = useState<string>("");
  const [modalIdVisivel, setModalIdVisivel] = useState<number | null>(null);

  const listar = async () => {
    const response: any = await movieService.getFilmesPorNome(nome);
    setMovies(response.data.results);

  }
  const apagar = async () => {
    setMovies([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setNome} placeholder='Nome do filme' />

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
          <View style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
              style={styles.poster}
            />
            <View style={styles.conteudo}>

              <Text style={styles.title}>{item.title}</Text>
              <Text>Lançamento: {item.release_date}</Text>
              <Text>Avaliação: {item.vote_average}</Text>


              <TouchableOpacity style={styles.botao1} onPress={() => setModalIdVisivel(item.id)}>
                <Text style={styles.botaoTexto}>Sobre</Text>
              </TouchableOpacity>


              <Modal
                visible={modalIdVisivel === item.id}
                transparent={true}
                animationType='fade'
              >
                <View style={styles.modalBackground}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>{item.overview}</Text>

                    <TouchableOpacity style={styles.botao1} onPress={() => setModalIdVisivel(null)}>
                      <Text style={styles.botaoTexto}>Fechar</Text>
                    </TouchableOpacity>

                  </View>
                </View>

              </Modal>
            </View>
          </View>
        )}
      />
    </View>
  )
}


