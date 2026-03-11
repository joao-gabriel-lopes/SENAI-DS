import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: "center"
    },
    cardInput: {
        borderBlockColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        margin: 10,
        width: "40%",
        textAlign: "center",
    },
    cardTitulo: {
        fontSize: 40,
        color: "black",
        padding: 20,
        fontFamily: 'Times New Roman'
    },
    cardBotao: {
        borderBlockColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        margin: 10,
        width: "30%",
        textAlign: "center"
    },
    cardTexto: {
        textAlign: 'center',
        fontSize: 16,
    },

}
);

export default styles;