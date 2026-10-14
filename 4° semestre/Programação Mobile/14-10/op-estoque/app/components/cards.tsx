import React from "react";
import { Text, View, Image, Pressable } from "react-native";

interface ICard {
    chave: string,
    caminhoImagem: string,
    categoriaNome: string,
    produtoNome: string,
    unidadeMedida: string,
    quantidadeAtual: number
}

export function CardProduto({ chave, caminhoImagem, categoriaNome, produtoNome, unidadeMedida, quantidadeAtual }: ICard) {
    return (
        <View key={chave} style={{
            display: "flex",
            height: "auto",
            width: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff",
            paddingHorizontal: 40,
            paddingVertical: 15,
            borderRadius: 10,
            gap: 20
        }}>

            <View>
                {<Image source={{ uri: `https://apiestoque.runasp.net/imagens/${caminhoImagem}` }} style={{
                    width: 90,
                    height: 90,
                    borderRadius: 10
                }} />}
            </View>

            <View style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: 14
                }}>
                    Categoria: {categoriaNome}
                </Text>
                <Text style={{
                    fontSize: 14
                }}>
                    {produtoNome}
                </Text>
                <Text style={{
                    fontSize: 14
                }}>
                    Quantidade: {quantidadeAtual} {unidadeMedida}
                </Text>
            </View>

        </View>
    );
}

interface ICardOperacao {
    operacaoId: number,
    produtoNome: string,
    unidadeMedida: string,
    quantidade: number,
    onPress: () => void,
}

export function CardOperacao({ operacaoId, produtoNome, unidadeMedida, quantidade, onPress }: ICardOperacao) {
    return (
        <Pressable
            key={operacaoId}
            onPress={onPress}
            style={{
                display: "flex",
                height: "auto",
                width: "auto",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#ffffff",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
                gap: 10
            }}>
            <Text style={{
                fontSize: 18
            }}>
                Operação {operacaoId + 1}
            </Text>
            <Text style={{
                fontSize: 14
            }}>
                Produto: {produtoNome}
            </Text>
            <Text style={{
                fontSize: 14
            }}>
                Quantidade: {quantidade} {unidadeMedida}
            </Text>
        </Pressable>
    );
}