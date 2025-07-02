import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00008B',
        paddingTop: 16,
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
        fontSize: 35,
        fontWeight: '500',
        color: '#fff',
        zIndex: 2,
        textAlign: "center"
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 40,
        paddingHorizontal: 16,
        zIndex: 10,
    },

    gradientOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100, // altura do degradê (ajustável)
        zIndex: 1,
    },
    texto: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textTransform: "uppercase",
  },
});