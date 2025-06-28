
import { View, Text, FlatList, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import movieService from '../../components/Service/movieService';
import listaFilmes, { MovieSummary } from '../../components/Models/listaFilmes';


export default function Home() {
  const [movies, setMovies] = useState<listaFilmes | []>([])
  const [moviesPlaying, setMoviesPlaying] = useState<MovieSummary[]>([])

  const listar = async () => {
    const response: any = await movieService.getMovie();
    setMovies(response.data.results)
    console.log(movies);
  }

  const listarLancamentos = async () => {
    const response: any = await movieService.getMovieNowPaying();
    setMoviesPlaying(response.data.results)
    console.log(moviesPlaying);


  }

  useEffect(() => {
    listarLancamentos()
  }, [])


  useEffect(() => {
    listar();
  }, []);

  return (

    <View style={styles.container}>
      <Text>Home</Text>
      <FlatList
        data={moviesPlaying}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#f2f2f2',
              padding: 16,
              width: 200,
              height: 100,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 3,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center',
              }}
              
            >
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  )
}