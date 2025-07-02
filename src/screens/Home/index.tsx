import { Text, SafeAreaView, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import Carrossel from '../../components/Carrossel';


export default function Home() {
  const scaleAnimada = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.timing(scaleAnimada, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (

    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.gradientOverlay}
      />
      <Animated.Text
        style={[
          styles.header,
          {
            transform: [{ scale: scaleAnimada }],
            fontFamily: 'Montserrat_700Bold',
          },
        ]}
      >
        Filmes do Momento
      </Animated.Text>
      <Carrossel />
    </SafeAreaView>
  )
}
