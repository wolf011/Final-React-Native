import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        flex: 1
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    card: {
        marginBottom: 20
    },
    poster: {
        width: 120,
        height: 180,
        borderRadius: 8
    },
    botaoRemover: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 6,
        marginTop: 8,
        alignItems: 'center'
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold'
    }
});