import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuth } from '../../Contexts/AuthContext';
import { styles } from '../Logout/styles';

export default function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    const sair = async () => {
      await logout();
    };
    sair();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.texto}>Saindo...</Text>
    </View>
  );
}