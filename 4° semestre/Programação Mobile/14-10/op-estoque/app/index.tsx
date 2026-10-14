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

                        <BotaoNavegacao texto="Pesquisa de produtos" corBotao="#0c5a78" corTexto={"#ffffff"} corBorda={"#000000"} caminho="/screens/produto/produtoPesquisaScreen" />

                        <BotaoNavegacao texto="Entrada de produtos" corBotao="#0c7840" corTexto={"#ffffff"} corBorda={"#000000"} caminho="/screens/operacaoEstoque/operacaoEstoqueScreen" movimentacao="entrada" />

                        <BotaoNavegacao texto="Retirada de produtos" corBotao="#ab1212" corTexto={"#ffffff"} corBorda={"#000000"} caminho="/screens/operacaoEstoque/operacaoEstoqueScreen" movimentacao="saida" />

                        <BotaoNavegacao texto="Lista de operações" corBotao="#340575" corTexto={"#ffffff"} corBorda={"#000000"} caminho="/screens/operacoes/operacoesScreen"/>

                        <BotaoNavegacao texto="Sobre Nós" corBotao="#0c7876" corTexto={"#ffffff"} corBorda={"#000000"} caminho="/screens/sobre/sobreScreen" />

                    </View>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}