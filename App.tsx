import AuthProvider, { useAuth } from './src/Contexts/AuthContext';
import { StatusBar } from 'react-native';
import Rotas from './src/Routes';


export default function App() {
  const {isAuthenticated}  = useAuth();
  
  return (
    <AuthProvider>
      <StatusBar barStyle={'default'} />
      <Rotas/>
    </AuthProvider>
  );
}
