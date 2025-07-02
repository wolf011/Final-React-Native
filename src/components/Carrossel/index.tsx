import * as React from "react";
import { View, Image, Text, TouchableOpacity, Alert, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import axios, { AxiosResponse } from "axios";
import { styles } from "./styles";
import movieService from "../Service/movieService";
import { listaFilmes } from "../Models/listaFilmes";


export default function Carrossel() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [movies, setMovies] = React.useState<any[]>([]);

  React.useEffect(() => {
    const carregarFilmes = async () => {
      const response: AxiosResponse<listaFilmes> | undefined = await movieService.getFilmesDoMomento();
      if (response && response.data) {
        response.data.results.length >= 1 ? setMovies(response.data.results.slice(0, 6)) : Alert.alert("Filme não encontrado!", "Tente com outro nome")
      } else {
        setMovies([]);
      }
    };
    carregarFilmes();
  }, []);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - Math.round(progress.value),
      animated: true,
    });
  };

  const handleSaibaMais = (movie: any) => {
    Alert.alert(`Mais informações sobre: ${movie.title}`, `${movie.overview}`);
  };

  return (
    <View style={styles.container} >
      {movies.length > 0 && (
        <Carousel
          ref={ref}
          width={Dimensions.get('window').width}
          height={styles.imagem.height}
          data={movies}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => handleSaibaMais(item)}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}
                style={styles.imagem}
                resizeMode="cover"
              />

            </TouchableOpacity>
          )}
        />
      )}

      <Pagination.Basic
        progress={progress}
        data={movies}
        dotStyle={styles.rolamento}
        containerStyle={styles.paginacaoContainer}
        onPress={onPressPagination}
      />
    </View>
  );
}
