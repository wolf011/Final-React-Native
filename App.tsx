import { AuthProvider } from "./src/Contexts/AuthContext";
import Rotas from "./src/Routes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Home from './src/screens/Home';
import { Feather } from '@expo/vector-icons';
import Favorites from './src/screens/Favoritos';
import Login from './src/screens/Login';
import Subscription from './src/screens/Subscription';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import Pesquisa from './src/screens/Pequisa';
import SplashScreen from './src/screens/Splash';
import NetInfo from '@react-native-community/netinfo';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
  
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  
  return (
    <AuthProvider>
      <StatusBar barStyle={'default'} />
      {!isConnected && (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>⚠️Sem conexão com a internet</Text>
        </View>
      )}
      <Rotas/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  offlineText: {
    color: 'white',
    fontWeight: 'bold'
  }
});