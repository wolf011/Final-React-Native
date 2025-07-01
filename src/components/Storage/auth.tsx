import AsyncStorage from '@react-native-async-storage/async-storage';

export async function salvarSessao(sessionId: string) {
  await AsyncStorage.setItem('session_id', sessionId);
}

export async function obterSessao() {
  return await AsyncStorage.getItem('session_id');
}

export async function removerSessao() {
  await AsyncStorage.removeItem('session_id');
}
