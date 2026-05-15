import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
    },
    card:{
        width: 350,
        height: 500,
        display: "flex",
        paddingVertical: 25,
        paddingHorizontal: 20
    },
    cardTexto:{
        textAlign: "justify",
    },
    cardImagem:{
        width: 272,
        height: 270,
        alignSelf: "center",
        marginTop: 8
    },
    cardConteudo:{
        height: 90,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
        marginTop: 11
    },
    danoContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 6,
        gap: 40,
        marginTop: 1
    },
    cardEstrelas: {
        display: "flex",
        justifyContent: "flex-end",
        fontSize: 20,
        marginTop: 9
    }
})

export default styles;