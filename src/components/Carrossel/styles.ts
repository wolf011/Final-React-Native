import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    borderRadius:15,
    width: "100%",
    height: 730,
  },
  overlay: {
    position: "absolute",
    bottom: height * 0.25,
    left: 20,
    right: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  saibaMaisButton: {
    backgroundColor: "#191970",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  saibaMaisText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  rolamento: {
    width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 5,
  backgroundColor: 'rgba(255,255,255,0.6)',
  },
 paginacaoContainer: {
  marginTop: 20,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 10, // deixa bem na parte inferior da imagem
  left: 0,
   right: 0,
  },
});
