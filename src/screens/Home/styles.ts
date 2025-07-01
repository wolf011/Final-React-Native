import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        padding: 16,
    },
    card: {
        backgroundColor: 'lightblue',
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 16,
    },
    poster: {
        width: 100,
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
   
    header: {
        marginTop: 15,
        fontSize: 28,
        fontWeight: "500",
        color: "#191970",
        textAlign: "center",
        marginVertical: 5,
        textTransform: "uppercase",
    }
});