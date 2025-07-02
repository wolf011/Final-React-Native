import { View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import React, { useCallback, useState } from 'react';
import { styles } from './styles';
import { useAuth } from '../../Contexts/AuthContext';
import movieService from '../../Components/Service/movieService';
import { listarFavoritos, removerFavorito } from '../../Components/Service/favoritosService';
import { infosFilme } from '../../Components/Models/listaFilmes';
import { useFocusEffect } from '@react-navigation/native';

export default function Favoritos() {
  const { user } = useAuth();
  const [filmes, setFilmes] = useState<infosFilme[] | []>([]);
  const [modalIdVisivel, setModalIdVisivel] = useState<number | null>(null);



  const carregarFavoritos = async () => {
    if (!user?.email) return;

    const ids = await listarFavoritos(user.email);

    const promessas = ids.map(async (id: number) => {
      const filme = await movieService.getFilmesPorId(id);
      return filme?.data;
    });

    const resultados = await Promise.all(promessas);
    const filtrados = resultados.filter(filme => filme !== null);
    setFilmes(filtrados);
  };

  useFocusEffect(
    useCallback(() => {
      carregarFavoritos();

      const intervalo = setInterval(() => {
        carregarFavoritos();
      }, 60000);

      return () => clearInterval(intervalo);
    }, [user])
  );

  const handleRemover = async (filmeId: number) => {
    if (!user?.email) return;

    await removerFavorito(user.email, filmeId);
    await carregarFavoritos();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Favoritos</Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
              style={styles.poster}
            />

            <View style={styles.botoes}>
              <TouchableOpacity style={styles.botao1} onPress={() => setModalIdVisivel(item.id)}>
                <Text style={styles.botaoTexto}>Sobre</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botao2}
                onPress={() => handleRemover(item.id)}
              >
                <Text style={styles.botaoTexto}>Remover</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.titulo}>{item.title}</Text>

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
        )}
      />
    </View>
  );
}
