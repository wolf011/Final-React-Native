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

export type { Usuario, AuthContextProps };