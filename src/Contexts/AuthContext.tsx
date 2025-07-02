import React, { createContext, useContext, useEffect, useState } from 'react'
import { obterSessao, removerSessao, salvarSessao } from '../components/Storage/auth';

interface AuthContextProps {
    isAuthenticated: boolean;
    sessionId: string | null;
    login: (sessionId: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [sessionId, setSessionId] = useState<string | null>(null);

    useEffect(() => {
        const carregarSessao = async () => {
            const sessao = await obterSessao();
            if (sessao) setSessionId(sessao);
        };
        carregarSessao();
    }, []);

    const login = async (novaSessao: string) => {
        await salvarSessao(novaSessao);
        setSessionId(novaSessao);
    };

    const logout = async () => {
        await removerSessao();
        setSessionId(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!sessionId, sessionId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
}