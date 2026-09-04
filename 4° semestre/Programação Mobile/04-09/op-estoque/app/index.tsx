import { ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import styles from "./style";
import React from "react";
import { BotaoNavegacao } from "./components/button";

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <ImageBackground style={styles.background} source={require("../assets/images/background.jpg")} resizeMode="cover">

                    <View style={styles.botaoContainer}>

                        <BotaoNavegacao texto="Pesquisa de produtos" corBotao="#0c5a78" caminho="/screens/produto/pesquisa/produtoPesquisaScreen" />

                        <BotaoNavegacao texto="Entrada de produtos" corBotao="#0c7840" caminho="/screens/produto/movimentacao/produtoMovimentacaoScreen" movimentacao="entrada"/>

                        <BotaoNavegacao texto="Retirada de produtos" corBotao="#ab1212" caminho="/screens/produto/movimentacao/produtoMovimentacaoScreen" movimentacao="saida"/>

                        <BotaoNavegacao texto="Sobre Nós" corBotao="#0c7876" caminho="/screens/sobre/sobreScreen" />

                    </View>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}