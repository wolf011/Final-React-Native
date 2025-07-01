import { Text,  SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Carrossel from '../../components/Carrossel';


export default function Home() {

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Filmes do Momento</Text>
      <Carrossel />
    </SafeAreaView>
  )
}
