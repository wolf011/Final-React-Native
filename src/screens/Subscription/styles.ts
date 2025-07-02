import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  titulo: {
    marginTop: 0 ,
     fontSize: 24,
    marginBottom: 80,
    textAlign: 'center',
  },

  input: {
    fontSize: 17,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: '#111',
    padding: 15,
    marginBottom: 16,
    borderRadius: 8,
  },
  botao: {
    
    marginTop :50,
    backgroundColor: '#007bff',
    padding: 17,
    borderRadius: 20,
  },
  textoBotao: {
    borderColor: '#111',
   fontFamily: 'Poppins-Regular',  
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  avatar: {
  width: 100,
  height: 100,
  borderRadius: 50, 
  marginBottom: 30,
  alignSelf: 'center',
}
});