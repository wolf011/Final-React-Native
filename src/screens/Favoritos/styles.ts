import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#00008B',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        marginBottom: 12,
        fontWeight: '500',
        color: '#fff',
        zIndex: 2,
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
        borderRadius: 8
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


    gradientOverlay: {
        position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    },
    conteudo: {
    alignItems: "center",
    alignContent: "center"
    },
    tituloFilme: {
        
    }

});