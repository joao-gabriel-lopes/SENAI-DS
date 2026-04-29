import { ImageBackground, ScrollView, Text, Image, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../../style";
import styles from "./style";
import { useRouter } from "expo-router";

export default function PesquisaProdutos() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        <TextInput style={styles.input} placeholder="Digite o nome ou categoria do produto 🔍︎" />

                        <View style={styles.cardContainer}>

                            <View style={styles.card}>

                                <View>
                                    <Image source={require("../../../../assets/images/martelo.webp")} style={styles.cardImagem} />
                                </View>

                                <View style={styles.cardConteudo}>
                                    <Text style={styles.cardTexto}>Categoria: Ferramentas</Text>
                                    <Text style={styles.cardTexto}>Martelo</Text>
                                    <Text style={styles.cardTexto}>Quantidade: 500</Text>
                                </View>

                            </View>

                            <View style={styles.card}>

                                <View>
                                    <Image source={require("../../../../assets/images/trena.png")} style={styles.cardImagem} />
                                </View>

                                <View style={styles.cardConteudo}>
                                    <Text style={styles.cardTexto}>Categoria: Ferramentas</Text>
                                    <Text style={styles.cardTexto}>Trena</Text>
                                    <Text style={styles.cardTexto}>Quantidade: 100</Text>
                                </View>

                            </View>

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