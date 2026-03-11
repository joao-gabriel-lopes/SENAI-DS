import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        gap: 20,
        height: "100%",
    },
    link: {
        backgroundColor: "#e1e1e1",
        borderBlockColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 16,
        fontSize: 18,
    },
    titulo: {
        fontSize: 24,
        paddingBottom: 30,
    },
});

export default styles;