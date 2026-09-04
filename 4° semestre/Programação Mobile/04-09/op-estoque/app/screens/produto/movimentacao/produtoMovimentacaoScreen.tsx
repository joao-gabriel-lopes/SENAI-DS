import { ImageBackground, ScrollView, Text, TextInput, Image, View, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../../style";
import styles from "./style";
import { useLocalSearchParams } from "expo-router";
import { Button } from "react-native-paper";
import IOperacaoDetalhes from "@/app/interfaces/iOperacaoDetalhes";
import { useEffect, useState } from "react";
import React from "react";
import { CardProduto } from "@/app/components/cards";
import { Texto } from "@/app/components/text";
import { TextoInput } from "@/app/components/textInput";
import { Painel } from "@/app/components/painelOperacao";
import IProdutoPesquisa from "@/app/interfaces/iProdutoPesquisa";
import { ListarProdutos, ListarProdutosFiltrados } from "@/app/api";

function EntradaSaida() {
    const { movimentacao } = useLocalSearchParams();

    if (movimentacao == "entrada") {
        return (
            <Painel texto="Entrada de Produtos" corFundo={"#0a6300"} largura={"90%"} corTexto={"#ffffff"} />
        )
    } else if (movimentacao == "saida") {
        return (
            <Painel texto="Saida de Produtos" corFundo={"#830000"} largura={"90%"} corTexto={"#ffffff"} />
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

    const [produtos, setProdutos] = useState<IProdutoPesquisa[]>([])
    const [produto, setProduto] = useState<IProdutoPesquisa | undefined>(undefined);

    useEffect(() => {
        const conteudo = async () => {
            const produtos = await ListarProdutos();
            setProdutos(produtos);
        };
        conteudo();
    }, []);

    async function mudarFiltro(e: string) {
        setProdutos(await ListarProdutosFiltrados({ nome: e, categoriaNome: e }));
        setProduto(undefined);
    }

    function CarregarCampos() {
        if (produto == undefined) {
            return (
                <View style={styles.cardContainer}>

                    {produtos.map((produto) => (
                        <Pressable onPress={() => setProduto(produto)}>
                            <CardProduto
                                chave={produto.id}
                                caminhoImagem={produto.nomeArquivoImagem}
                                categoriaNome={produto.categoriaNome}
                                produtoNome={produto.produtoNome}
                                quantidadeAtual={produto.quantidadeAtual}
                                unidadeMedida={produto.unidadeMedida}
                            />
                        </Pressable>
                    ))}

                </View>
            );
        } else {
            return (
                <View style={styles.operacaoContainer}>

                    <Painel texto="Produto escolhido:" corFundo={"#0c5a78"} largura={"90%"} corTexto={"#ffffff"} />

                    <CardProduto
                        chave={produto.id}
                        caminhoImagem={produto.nomeArquivoImagem}
                        categoriaNome={produto.categoriaNome}
                        produtoNome={produto.produtoNome}
                        quantidadeAtual={produto.quantidadeAtual}
                        unidadeMedida={produto.unidadeMedida}
                    />

                    <Painel texto="Detalhes da operação" corFundo={"#737373"} largura={"90%"} corTexto={"#ffffff"} />

                </View>
            );
        }
    }

    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        {EntradaSaida()}

                        <View style={styles.textoContainer}>
                            <Texto texto={dataAtual} />
                        </View>

                        <TextoInput texto="Motivo:" />

                        <TextInput style={styles.input} placeholder="Digite o nome ou categoria do produto 🔍︎" onChangeText={async (e) => { mudarFiltro(e) }} />

                        {CarregarCampos()}

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}