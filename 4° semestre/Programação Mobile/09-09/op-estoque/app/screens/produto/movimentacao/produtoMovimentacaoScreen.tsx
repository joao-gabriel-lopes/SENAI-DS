import { ImageBackground, ScrollView, Text, TextInput, Image, View, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../../style";
import styles from "./style";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import React from "react";
import { CardOperacao, CardProduto } from "@/app/components/cards";
import { Texto } from "@/app/components/text";
import { TextoInput } from "@/app/components/textInput";
import { Painel } from "@/app/components/painelOperacao";
import IProdutoPesquisa from "@/app/interfaces/iProdutoPesquisa";
import { ListarProdutos, ListarProdutosFiltrados, SalvarOperacoesEstoque } from "@/app/api";
import { BotaoTexto } from "@/app/components/button";
import IOperacaoDetalhe from "@/app/interfaces/iOperacaoDetalhe";
import IOperacaoDetalhePost from "@/app/interfaces/iOperacaoDetalhePost";

export default function MovimentacaoProdutos() {
    const { movimentacao } = useLocalSearchParams();

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
    const [quantidade, setQuantidade] = useState<number>(0)
    const [motivo, setMotivo] = useState<string>("")
    const [numeroOperacao, setNumeroOperacao] = useState<number>(0)
    const [listaOperacoes, setListaOperacoes] = useState<IOperacaoDetalhe[]>([])

    useEffect(() => {
        const conteudo = async () => {
            const produtos = await ListarProdutos();
            setProdutos(produtos);
        };
        conteudo();
    }, []);

    function EntradaSaida() {
        if (movimentacao == "entrada") {
            return (
                <Painel texto="Entrada de Produtos" corFundo={"#0a6300"} largura={"90%"} corTexto={"#ffffff"} />
            )
        } else if (movimentacao == "saida") {
            return (
                <Painel texto="Saída de Produtos" corFundo={"#830000"} largura={"90%"} corTexto={"#ffffff"} />
            )
        }
    }

    async function mudarFiltro(e: string) {
        setProdutos(await ListarProdutosFiltrados({ nome: e, categoriaNome: e }));
        setProduto(undefined);
    }

    function AdicionarOperacao(id: number, produtoId: string, quantidade: number) {
        const operacao: IOperacaoDetalhe = { id, produtoId, quantidade };
        setListaOperacoes(prev => [...prev, operacao]);
        setNumeroOperacao(prev => prev + 1);
    }

    function RemoverOperacao(operacaoId: number) {
        setListaOperacoes(prev => prev.filter(operacao => operacao.id !== operacaoId));
    }

    async function EnviarDados() {
        const detalhes: IOperacaoDetalhePost[] = listaOperacoes.map((operacao) => ({
            produtoId: operacao.produtoId,
            quantidade: operacao.quantidade,
        }));

        const entradaSaida = movimentacao == "entrada" ? "E" : movimentacao == "saida" ? "S" : "";

        await SalvarOperacoesEstoque(motivo.trim(), entradaSaida, detalhes);
    }

    function CarregarCampos() {
        if (produto == undefined) {
            return (
                <View style={styles.cardContainer}>

                    {produtos.map((produto) => (
                        <Pressable key={produto.id} onPress={() => setProduto(produto)}>
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

                    <View style={styles.formContainer}>
                        <TextInput style={styles.inputNumero} placeholder="Digite a quantidade da operação" keyboardType="numeric" value={quantidade.toString()} onChangeText={(e) => setQuantidade(Number(e))} />
                        <BotaoTexto corBotao={"#0c6678"} texto={"Adicionar"} corTexto={"#ffffff"} paddingVertical={10} onPress={() => { AdicionarOperacao(numeroOperacao, produto.id, quantidade) }} />
                    </View>

                    <View style={styles.cardContainer}>
                        {
                            listaOperacoes.map((operacao) => (
                                <CardOperacao
                                    key={operacao.id}
                                    operacaoId={operacao.id}
                                    produtoNome={produto.produtoNome}
                                    unidadeMedida={produto.unidadeMedida}
                                    quantidade={operacao.quantidade}
                                    onPress={() => { RemoverOperacao(operacao.id) }}
                                />
                            ))
                        }
                    </View>

                    <BotaoTexto corBotao={"#0e6459"} texto={"Enviar Operações"} corTexto={"#ffffff"} paddingVertical={10} onPress={() => { EnviarDados() }} />

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

                        <TextoInput texto="Motivo:" alturaInput={200} alinhamentoInput="top" value={motivo} onChangeText={setMotivo} />

                        <TextInput style={styles.input} placeholder="Digite o nome ou categoria do produto 🔍︎" onChangeText={async (e) => { mudarFiltro(e) }} />

                        {CarregarCampos()}

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}