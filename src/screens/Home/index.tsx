
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import movieService from '../../components/Service/movieService';
import listaFilmes from '../../components/Models/listaFilmes';


export default function Home() {
  const [movies, setMovies] = useState<listaFilmes | []>([])

  const listar = async () => {
      const response: any = await movieService.getMovie();
      setMovies(response.data.results)
      console.log(movies);
  }
  
  
  useEffect(() => {
    listar();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}