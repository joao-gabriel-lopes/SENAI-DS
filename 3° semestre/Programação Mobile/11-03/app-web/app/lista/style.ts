import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    card: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 300,
        textAlign: 'center',
    },
    cardBotao: {
        fontSize: 18,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    cardTitulo: {
        fontSize: 40,
        padding: 20,
        fontFamily: "'Times New Roman', Times, serif",
    },
    cardTexto: {
        textAlign: 'center',
    },
    cardInput: {
        borderBlockColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        margin: 10,
        width: "25%",
        textAlign: "center",
    },
});

export default styles;