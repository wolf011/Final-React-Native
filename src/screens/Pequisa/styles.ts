import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
    marginBottom: 16,
    overflow: 'hidden',
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  conteudo: {
    alignItems: "center",
    alignContent: "center"
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descricao: {
    color: '#fff',
    padding:10
  },
  input: {
    color: 'white',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 30
  },
  botao1: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    marginRight: 70,
    alignSelf: 'center'
  },
  botao2: {
    backgroundColor: 'rgb(255, 0, 0)',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center"
  },
  botoes: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 30,
    
    
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: "500",
    textAlign: 'center',
    paddingBottom: "10%"
  },
  gradientOverlay: {
        position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  botaoSobre: {
    marginTop: 12,
    backgroundColor: '#3366FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
  }
});