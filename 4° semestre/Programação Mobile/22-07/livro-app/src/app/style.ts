import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dfdfdf",
        gap: 20
    },
    containerLivro: {        
        height: "80%",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    titulo: {
        fontSize: 40,
        textAlign: "center"
    },
    subtitulo: {
        fontSize: 25,
        textAlign: "center"
    },
    textoLivro: {
        fontSize: 20,
        textAlign: "center"
    },
    cabecalho: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 40
    },
    rodape: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    button: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 10,
    },
    containerButton:{
        height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    seta: {
        fontSize: 20
    }
})

export default styles;