import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import styles from "../../.././style";

export default function Sumario() {
    const router = useRouter();

    return (
        <SafeAreaProvider>

            <View style={styles.container}>

                <View style={styles.containerLivro}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Sumário</Text>
                    </View>
                    
                    <View style={styles.rodape}>
                        <Text style={styles.textoLivro}>Capa ----------------------------------------- 1</Text>
                        <Text style={styles.textoLivro}>Dedicatoria ------------------------------- 2</Text>
                        <Text style={styles.textoLivro}>Sumário ------------------------------------ 3</Text>
                        <Text style={styles.textoLivro}>Página 1 ----------------------------------- 4</Text>
                        <Text style={styles.textoLivro}>Página 2 ----------------------------------- 5</Text>
                        <Text style={styles.textoLivro}>Página 3 ----------------------------------- 6</Text>
                        <Text style={styles.textoLivro}>Página 4 ----------------------------------- 7</Text>
                        <Text style={styles.textoLivro}>Página 5 ----------------------------------- 8</Text>
                        <Text style={styles.textoLivro}>Contracapa ------------------------------- 9</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/dedicatoria/dedicatoria") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina1") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}