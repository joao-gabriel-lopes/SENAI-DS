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
                        <Text style={styles.textoLivro}>
                            Vivo só, com um criado. A casa em que moro é própria; fi-la construir de propósito, levado de um desejo tão
                            particular que me vexa imprimi-lo, mas vá lá. Um dia. há bastantes anos, lembrou-me reproduzir no Engenho
                            Novo a casa em que me criei na antiga Rua de Mata-cavalos, dando-lhe o mesmo aspecto e economia
                            daquela outra, que desapareceu. Construtor e pintor entenderam bem as indicações que lhes fiz: é o mesmo
                            prédio assobradado, três janelas de frente, varanda ao fundo, as mesmas alcovas e salas. Na principal destas,
                            a pintura do tecto e das paredes é mais ou menos igual, umas grinaldas de flores miúdas e grandes pássaros
                            que as tomam nos blocos, de espaço a espaço.
                        </Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina4") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/contracapa/contracapa") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}