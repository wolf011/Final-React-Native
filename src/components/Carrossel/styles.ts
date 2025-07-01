import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    width: 390,
    height: 800,
  },
  overlay: {
    position: "absolute",
    bottom: height * 0.25,
    left: 20,
    right: 20,
    backgroundColor: "rgba(87, 87, 87, 0.6)",
    paddingVertical: 20,
    paddingHorizontal: 16,
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
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 50,
    width: 10,
    height: 10,
  },
 paginacaoContainer: {
  position: "absolute",
  top: 30, 
  width: "100%",
  flexDirection: "row",
  justifyContent: "center",
  gap: 8,
},
});
