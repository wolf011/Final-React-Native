import AsyncStorage from '@react-native-async-storage/async-storage';

export async function adicionarFavorito(email: string, filmeId: number) {
  const chave = `favoritos_${email}`;
  const favoritosJson = await AsyncStorage.getItem(chave);
  const favoritos: number[] = favoritosJson ? JSON.parse(favoritosJson) : [];

  if (!favoritos.includes(filmeId)) {
    favoritos.push(filmeId);
    await AsyncStorage.setItem(chave, JSON.stringify(favoritos));
  }
}

export async function removerFavorito(email: string, filmeId: number) {
  const chave = `favoritos_${email}`;
  const favoritosJson = await AsyncStorage.getItem(chave);
  const favoritos: number[] = favoritosJson ? JSON.parse(favoritosJson) : [];

  const novosFavoritos = favoritos.filter(id => id !== filmeId);
  await AsyncStorage.setItem(chave, JSON.stringify(novosFavoritos));
}

export async function listarFavoritos(email: string): Promise<number[]> {
  const chave = `favoritos_${email}`;
  const favoritosJson = await AsyncStorage.getItem(chave);
  return favoritosJson ? JSON.parse(favoritosJson) : [];
}
