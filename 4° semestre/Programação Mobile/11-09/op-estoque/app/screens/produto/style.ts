import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#ffffff",
        width: "80%",
        height: 80,
        borderRadius: 10,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 30
    },
    conteudoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        height: 100,
        width: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        gap: 20
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