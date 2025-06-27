
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import movieService from '../../components/Service/movieService';
import IMovie from '../../components/Models/IMovie';


export default function Home() {
  const [movies, setMovies] = useState<IMovie | []>([])

  const listar = async () => {
      const response: any = await movieService.getMovie();
      setMovies(response.data.results)
      console.log(response.data.original_title);
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