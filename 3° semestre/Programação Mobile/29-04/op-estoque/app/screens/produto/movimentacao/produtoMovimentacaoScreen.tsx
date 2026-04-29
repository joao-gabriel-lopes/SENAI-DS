import { ImageBackground, ScrollView, Text, TextInput, Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../../style";
import styles from "./style";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Button } from "react-native-paper";

function EntradaSaida() {
    const { movimentacao } = useLocalSearchParams();

    if (movimentacao == "entrada") {
        return (
            <Text style={styles.texto}>Entrada de Produtos</Text>
        )
    } else if (movimentacao == "saida") {
        return (
            <Text style={styles.texto}>Saída de Produtos</Text>
        )
    }
}

export default function MovimentacaoProdutos() {
    const router = useRouter();

    const dataAtual = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(Date.now()).replace(",", "");

    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        <View style={styles.textoContainer}>
                            {EntradaSaida()}
                            <Text style={styles.texto}>{dataAtual}</Text>
                        </View>

                        <View style={styles.motivoContainer}>
                            <Text style={styles.texto}>Motivo:</Text>
                            <TextInput
                                style={styles.textArea}
                                multiline={true}
                                numberOfLines={10}
                                textAlignVertical="top"
                            />
                        </View>

                        <Button style={globals.button} mode="contained" buttonColor="#0c5a78" onPress={() => {}}>
                            Procurar Produto
                        </Button>

                        <View style={styles.cardContainer}>

                            <View style={styles.card}>

                                <View>
                                    <Image source={require("../../../../assets/images/nivel.webp")} style={styles.cardImagem} />
                                </View>

                                <View style={styles.cardConteudo}>
                                    <Text style={styles.cardTexto}>Categoria: Ferramentas</Text>
                                    <Text style={styles.cardTexto}>Nível</Text>
                                    <Text style={styles.cardTexto}>Quantidade: 250</Text>
                                </View>

                            </View>

                            <View style={styles.card}>

                                <View>
                                    <Image source={require("../../../../assets/images/serra.png")} style={styles.cardImagem} />
                                </View>

                                <View style={styles.cardConteudo}>
                                    <Text style={styles.cardTexto}>Categoria: Ferramentas</Text>
                                    <Text style={styles.cardTexto}>Serra</Text>
                                    <Text style={styles.cardTexto}>Quantidade: 300</Text>
                                </View>

                            </View>
                        
                        </View>

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}