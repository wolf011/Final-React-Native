import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/SERRA (1).png')} style={styles.logo} />
      <Text style={styles.text}>Carregando...</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.percent}>{progress}%</Text>
    </View>
  );
};

export default SplashScreen;
