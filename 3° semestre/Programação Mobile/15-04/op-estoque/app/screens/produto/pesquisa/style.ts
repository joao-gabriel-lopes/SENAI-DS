import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#ffffff",
        width: "70%",
        borderRadius: 10,
        fontSize: 16,
        textAlign: "center",
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    conteudoContainer: {
        display: "flex",
        alignItems: "center",
        paddingVertical: 30,
    },
    cardContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        paddingVertical: 30
    },
    card: {
        display: "flex",
        width: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
    },
    cardImagem: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    cardConteudo: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    cardTexto: {
        fontSize: 14
    }
})

export default styles;