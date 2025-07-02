import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

interface AuthContextProps {
  user: Usuario | null;
  isAuthenticated: boolean;
  login: (email: string, senha: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);

  useEffect(() => {
    carregarUsuario();
  }, []);

  const carregarUsuario = async () => {
    const userJson = await AsyncStorage.getItem('usuario_logado');
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
  };

  const login = async (email: string, senha: string) => {
    const usersJson = await AsyncStorage.getItem('usuarios');
    const usuarios: Usuario[] = usersJson ? JSON.parse(usersJson) : [];

    const encontrado = usuarios.find(u => u.email === email && u.senha === senha);
    if (encontrado) {
      await AsyncStorage.setItem('usuario_logado', JSON.stringify(encontrado));
      setUser(encontrado);
      return true;
    }

    return false;
  };

  const logout = async () => {
    await AsyncStorage.removeItem('usuario_logado');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
