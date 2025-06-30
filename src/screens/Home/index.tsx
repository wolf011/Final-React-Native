
import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import movieService from '../../components/Service/movieService';
import { infosFilme } from '../../components/Models/listaFilmes';


export default function Home() {
  const [filmesMomento, setFilmesMomento] = useState<infosFilme[]>([])

  const listarLancamentos = async () => {
    const response: any = await movieService.getFilmesDoMomento();
    setFilmesMomento(response.data.results)
    console.log(filmesMomento);

  }

  useEffect(() => {
    listarLancamentos()
  }, [])


  return (

    <View style={styles.container}>
      <Text>Home</Text>
      <FlatList
        data={filmesMomento}
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
              shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 3,
            }}
          >
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
              style={styles.poster}
            />
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