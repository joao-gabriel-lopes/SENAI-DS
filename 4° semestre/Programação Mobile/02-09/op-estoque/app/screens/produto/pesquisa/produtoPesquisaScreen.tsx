import { ImageBackground, ScrollView, Text, Image, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../../style";
import styles from "./style";
import { useEffect, useState } from "react";
import { ListarProdutos, ListarProdutosFiltrados } from "@/app/api";
import IProdutoPesquisa from "@/app/interfaces/iProdutoPesquisa";
import React from "react";
import { CardProduto } from "@/app/components/cards";

export default function PesquisaProdutos() {
    const [produtos, setProdutos] = useState<IProdutoPesquisa[]>([])

    useEffect(() => {
        const conteudo = async () => {
            const produtos = await ListarProdutos();
            setProdutos(produtos);
        };
        conteudo();
    }, []);

    async function mudarFiltro(e: string) {
        setProdutos(await ListarProdutosFiltrados({nome: e, categoriaNome: e}));
    }

    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        <TextInput style={styles.input} placeholder="Digite o nome ou categoria do produto 🔍︎" onChangeText={async (e) => { mudarFiltro(e) }} />

                        <View style={styles.cardContainer}>

                            {
                                produtos.map(produto => (
                                    <CardProduto
                                        chave={produto.id}
                                        caminhoImagem={produto.nomeArquivoImagem}
                                        categoriaNome={produto.categoriaNome}
                                        produtoNome={produto.produtoNome}
                                        quantidadeAtual={produto.quantidadeAtual}
                                        unidadeMedida={produto.unidadeMedida}
                                    />
                                ))

                                
                            }

                        </View>

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );

}