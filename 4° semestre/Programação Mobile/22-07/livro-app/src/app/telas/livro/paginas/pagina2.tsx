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
                    <View style={styles.rodape}>
                        <Text style={styles.textoLivro}>— Continue, disse eu acordando.</Text>
                        <Text style={styles.textoLivro}>— Já acabei, murmurou ele.</Text>
                        <Text style={styles.textoLivro}>— São muito bonitos.</Text>
                        <Text style={styles.textoLivro}>
                            Vi-lhe fazer um gesto para tirá-los outra vez do bolso, mas não passou do gesto; estava amuado. No dia
                            seguinte entrou a dizer de mim nomes feios, e acabou alcunhando-me Dom Casmurro. Os vizinhos, que não
                            gostam dos meus hábitos reclusos e calados, deram curso à alcunha, que afinal pegou. Nem por isso me
                            zanguei. Contei a anedota aos amigos da cidade, e eles, por graça, chamam-me assim, alguns em bilhetes:
                        </Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina1") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina3") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}