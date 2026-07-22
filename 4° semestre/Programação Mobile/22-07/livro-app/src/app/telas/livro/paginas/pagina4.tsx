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
                            Também não achei melhor título para a minha narração - se não tiver outro daqui até ao fim do
                            livro, vai este mesmo. O meu poeta do trem ficará sabendo que não lhe guardo rancor. E com pequeno
                            esforço, sendo o título seu, poderá cuidar que a obra é sua. Há livros que apenas terão isso dos seus autores;
                            alguns nem tanto.
                        </Text>

                        <View style={styles.cabecalho}>
                            <Text style={styles.titulo}>Capítulo 2</Text>
                            <Text style={styles.subtitulo}>Do livro</Text>
                        </View>

                        <Text style={styles.textoLivro}>
                            Agora que expliquei o título, passo a escrever o livro. Antes disso, porém, digamos os motivos que me põem
                            a pena na mão.
                        </Text>

                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina3") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina5") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}