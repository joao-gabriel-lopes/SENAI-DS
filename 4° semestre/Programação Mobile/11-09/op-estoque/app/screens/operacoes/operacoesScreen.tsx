import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../style";
import styles from "./style";
import React, { useEffect, useState } from "react";
import IOperacaoRequest from "@/app/interfaces/iOperacaoRequest";
import { ListarOperacoesEstoque } from "@/app/api";

export default function OperacoesEstoque() {
    const [operacoes, setOperacoes] = useState<IOperacaoRequest[]>([])

    useEffect(() => {
        const conteudo = async () => {
            const operacoes = await ListarOperacoesEstoque();
            setOperacoes(operacoes);
        };
        conteudo();
    }, []);

    function MostrarData(data: string) {
        const dataFormatada = new Date(data);

        return new Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(dataFormatada).replace(/\s*,\s*/g, " ");
    }

    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        {
                            operacoes.map((operacao) => (
                                <View key={operacao.id} style={styles.card}>

                                    <View style={styles.cardInfo}>
                                        <Text style={styles.titulo}>Operação de estoque</Text>

                                        <Text style={styles.textoCard}>Id: {operacao.id}</Text>
                                        <Text style={styles.textoCard}>Horário: {MostrarData(operacao.hora)}</Text>
                                        <Text style={styles.textoCard}>Tipo: {operacao.entradaSaida.toLocaleLowerCase() == "s" ? "Saída" : operacao.entradaSaida.toLocaleLowerCase() == "e" ? "Entrada" : operacao.entradaSaida}</Text>
                                        <Text style={styles.textoCard}>Motivo: {operacao.motivo}</Text>
                                    </View>

                                    <View style={styles.containerDetalhes}>
                                        {
                                            operacao.detalhes.map((detalhe, index) => (
                                                <View key={detalhe.id} style={styles.cardDetalhes}>
                                                    <Text style={styles.titulo}>Detalhe {index + 1}</Text>
                                                    <Text style={styles.textoCard}>Id: {detalhe.id}</Text>
                                                    <Text style={styles.textoCard}>Nome do produto: {detalhe.produtoNome}</Text>
                                                    <Text style={styles.textoCard}>Categoria do produto: {detalhe.categoriaNome}</Text>
                                                    <Text style={styles.textoCard}>Quantidade da operação: {detalhe.quantidade} {detalhe.unidadeMedidaSigla}</Text>
                                                </View>
                                            ))
                                        }
                                    </View>


                                </View>
                            ))
                        }

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}