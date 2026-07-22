import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import styles from "../../.././style";

export default function Dedicatoria() {
    const router = useRouter();

    return (
        <SafeAreaProvider>

            <View style={styles.container}>

                <View style={styles.containerLivro}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.titulo}>Dedicatória</Text>
                    </View>
                    <View style={styles.rodape}>
                        <Text style={styles.subtitulo}>Ao Dr. Henrique Maximiano Coelho Netto e a Rodolfo Bernardes, offereço este romance como testemunho de antiga e affetuosa amizade.</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/sumario/sumario") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}