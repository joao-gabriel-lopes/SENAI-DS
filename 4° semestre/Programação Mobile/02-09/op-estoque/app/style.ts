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
    }
})

export default styles;