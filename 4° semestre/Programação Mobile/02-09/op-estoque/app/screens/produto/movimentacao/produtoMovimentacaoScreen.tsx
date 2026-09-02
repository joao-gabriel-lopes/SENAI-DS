import { ImageBackground, ScrollView, Text, TextInput, Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../../style";
import styles from "./style";
import { useLocalSearchParams } from "expo-router";
import { Button } from "react-native-paper";
import IOperacaoDetalhes from "@/app/interfaces/iOperacaoDetalhes";
import { useState } from "react";
import React from "react";
import { CardProduto } from "@/app/components/cards";
import { Texto } from "@/app/components/text";
import { TextoInput } from "@/app/components/textInput";
import { Painel } from "@/app/components/painelOperacao";

function EntradaSaida() {
    const { movimentacao } = useLocalSearchParams();

    if (movimentacao == "entrada") {
        return (
            <Painel texto="Entrada de Produtos" corFundo={"#0a6300"} largura={"90%"} corTexto={"#ffffff"}/>
        )
    } else if (movimentacao == "saida") {
        return (
            <Painel texto="Saida de Produtos" corFundo={"#830000"} largura={"90%"} corTexto={"#ffffff"}/>
        )
    }
}

export default function MovimentacaoProdutos() {
    const dataAtual = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(Date.now()).replace(",", "");

    const [operacaoDetalhes] = useState<IOperacaoDetalhes[]>([
        { id: "1", nome: "Tesoura", quantidade: 100, unidadeMedida: "UN" },
        { id: "2", nome: "Furadeira", quantidade: 50, unidadeMedida: "UN" },
        { id: "3", nome: "Parafusadeira", quantidade: 75, unidadeMedida: "UN" },
        { id: "4", nome: "Alicate", quantidade: 200, unidadeMedida: "UN" },
        { id: "5", nome: "Chave de Fenda", quantidade: 150, unidadeMedida: "UN" },
        { id: "6", nome: "Chave Inglesa", quantidade: 120, unidadeMedida: "UN" },
        { id: "7", nome: "Martelo", quantidade: 80, unidadeMedida: "UN" },
        { id: "8", nome: "Serra Elétrica", quantidade: 30, unidadeMedida: "UN" },
        { id: "9", nome: "Lixadeira", quantidade: 60, unidadeMedida: "UN" },
        { id: "10", nome: "Esmerilhadeira", quantidade: 40, unidadeMedida: "UN" },
    ]);

    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        {EntradaSaida()}

                        <View style={styles.textoContainer}>
                            <Texto texto={dataAtual}/>
                        </View>

                        <TextoInput texto="Motivo:" />

                        <Button style={globals.button} mode="contained" buttonColor="#0c5a78" onPress={() => { }}>
                            Procurar Produto
                        </Button>

                        <Painel texto="Detalhes da operação" corFundo={"#737373"} largura={"90%"} corTexto={"#ffffff"}/>

                        <View style={styles.cardContainer}>

                            {operacaoDetalhes.map((detalhe) => (
                                <View key={detalhe.id} style={styles.card}>

                                    <View>
                                        <Image source={require("../../../../assets/images/serra.png")} style={styles.cardImagem} />
                                    </View>

                                    <View style={styles.cardConteudo}>
                                        <Text style={styles.cardTexto}>{detalhe.nome}</Text>
                                        <Text style={styles.cardTexto}>Quantidade: {detalhe.quantidade} {detalhe.unidadeMedida}</Text>
                                    </View>
                                </View>                                
                            ))}

                        </View>

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}