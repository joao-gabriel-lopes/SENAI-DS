import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteudoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        gap: 30
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 10,
        gap: 30
    },
    cardInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12
    },
    containerDetalhes: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },
    cardDetalhes: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12
    },
    titulo: {
        fontSize: 20,
        alignSelf: "center"
    },
    subtitulo: {
        fontSize: 18
    },
    textoCard: {
        fontSize: 16
    }
})

export default styles;