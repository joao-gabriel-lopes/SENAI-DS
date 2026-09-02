import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteudoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        gap: 30
    },
    textoContainer: {
        width: "90%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    motivoContainer: {
        width: "90%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10
    },
    botaoContainer: {
        width: "90%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    texto: {
        fontSize: 18,
        color: "#ffffff"
    },
    textArea: {
        backgroundColor: "#ffffff",
        height: 200,
        width: "100%",
        borderRadius: 10,
        fontSize: 16,
        padding: 10
    },
    cardContainer: {
        width: "90%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 20
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