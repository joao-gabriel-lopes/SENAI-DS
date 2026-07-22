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
                        <Text style={styles.titulo}>Dom Casmurro</Text>
                    </View>
                    <View style={styles.rodape}>
                        <Text style={styles.textoLivro}>O protagonista Bento Santiago, apelidado de Dom Casmurro, já velho e solitário, tenta "atar as duas pontas da vida", revivendo suas memórias. Ele narra sua paixão por Capitu, sua vizinha de infância, o casamento e o nascimento do filho Ezequiel.</Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina5") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}