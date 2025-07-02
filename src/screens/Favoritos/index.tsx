import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { useAuth } from '../../Contexts/AuthContext';
import movieService from '../../Components/Service/movieService';
import { listarFavoritos, removerFavorito } from '../../Components/Service/favoritosService';

export default function Favoritos() {
  const { user } = useAuth();
  const [filmes, setFilmes] = useState<any[]>([]);


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

  useEffect(() => {
    carregarFavoritos();

    const intervalo = setInterval(() => {
      carregarFavoritos();
    }, 60000);

    return () => clearInterval(intervalo);
  }, [user]);

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
            <Text style={styles.titulo}>{item.title}</Text>

            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => handleRemover(item.id)}
            >
              <Text style={styles.textoBotao}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
