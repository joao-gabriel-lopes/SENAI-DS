import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import styles from "./style";

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <Text style={styles.titulo}>Seja bem vindo!</Text>

                <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/produto/lista/listaProdutos") }}>
                    Lista de produtos
                </Button>

            </View>
        </SafeAreaProvider>
    );
}