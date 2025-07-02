import * as React from "react";
import { View, Image, Text, TouchableOpacity, Alert, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import axios from "axios";
import { styles } from "./styles";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "df7b1eb1b20938e535742adbdcb93950";

export default function Carrossel() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [movies, setMovies] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => setMovies(res.data.results.slice(0, 6)))
      .catch((err) => console.error(err));
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
                source={{ uri: IMAGE_URL + item.poster_path }}
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
