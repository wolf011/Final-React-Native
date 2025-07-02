import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Home from './src/screens/Home';
import { Feather } from '@expo/vector-icons';
import Favorites from './src/screens/Favoritos';
import Login from './src/screens/Login';
import Subscription from './src/screens/Subscription';
import { StatusBar } from 'react-native';
import Pesquisa from './src/screens/Pequisa';
import SplashScreen from './src/screens/Splash';
import AuthProvider, { useAuth } from './src/Contexts/AuthContext';
import Rotas from './src/Routes';
import NetInfo from '@react-native-community/netinfo';

export default function App() {
   const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  const {isAuthenticated}  = useAuth();
  
  return (
    <AuthProvider>
      <StatusBar barStyle={'default'} />
      <Rotas/>
    </AuthProvider>
  );
}
