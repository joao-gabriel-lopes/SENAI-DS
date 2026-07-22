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
    },
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingVertical: 30,
        gap: 20
    },
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        width: 150,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#e2e2e2",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    titulo: {
        fontSize: 30
    },
    textoCard: {
        textAlign: "center"
    }
})

export default styles;