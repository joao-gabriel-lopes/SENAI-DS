import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import styles from "./style";

export default function Capa() {
    const router = useRouter();

    return (
        <SafeAreaProvider>

            <View style={styles.container}>

                <View style={styles.containerLivro}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Dom Casmurro</Text>
                        <Text style={styles.subtitulo}>Literatura Clássica</Text>
                    </View>

                    <View style={styles.rodape}>
                        <Text style={styles.textoLivro}>Machado de Assis</Text>
                        <Text style={styles.textoLivro}>1899</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/contracapa/contracapa") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/dedicatoria/dedicatoria") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}