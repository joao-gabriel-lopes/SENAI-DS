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
                        <Text style={styles.titulo}>Capítulo 1</Text>
                        <Text style={styles.subtitulo}>Do título</Text>
                    </View>
                    <View style={styles.rodape}>
                        <Text style={styles.textoLivro}>
                            Uma noite destas, vindo da cidade para o Engenho Novo, encontrei 
                            no trem da Central um rapaz aqui do bairro, que eu conheço 
                            de vista e de chapéu. Cumprimentou-me, sentou-se ao pé de
                            mim, falou da Lua e dos ministros, e acabou recitando-me versos.
                            A viagem era curta, e os versos pode ser que não fossem inteiamente 
                            maus. Sucedeu, porém, que, como eu estava cansado,
                            fechei os olhos três ou quatro vezes; tanto bastou para que ele
                            interrompesse a leitura e metesse os versos no bolso.
                        </Text>
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/sumario/sumario") }}>
                        <Text style={styles.seta}>
                            ◀
                        </Text>
                    </Button>
                    <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { router.push("/telas/livro/paginas/pagina2") }}>
                        <Text style={styles.seta}>
                            ▶
                        </Text>
                    </Button>
                </View>

            </View>

        </SafeAreaProvider>
    );
}