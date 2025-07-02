import React from "react";
import { StatusBar } from "react-native";
import { AuthProvider } from "./src/Contexts/AuthContext";
import Rotas from "./src/Routes";



export default function App() {
  
  return (
    <AuthProvider>
      <StatusBar barStyle={'default'} />
      <Rotas/>
    </AuthProvider>
  );
}
