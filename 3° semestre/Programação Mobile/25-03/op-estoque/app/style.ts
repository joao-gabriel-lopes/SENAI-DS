import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
    },
    botaoContainer: {
        display: "flex",
        gap: 30, 
        padding: 20
    },
    container: {
        flex: 1,
    },
    button: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 10
    },
    input: {
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
        fontSize: 16,
        textAlign: "center"
    }
})

export default styles;