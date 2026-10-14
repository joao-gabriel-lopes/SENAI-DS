import { ExternalPathString, RelativePathString, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, Text, ColorValue, DimensionValue, AnimatableNumericValue, GestureResponderEvent } from "react-native";
import { Button } from "react-native-paper";

interface IBotaoNavegacao {
    corBotao: ColorValue,
    texto: string,
    corTexto?: ColorValue,
    tamanhoTexto?: number,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    borderRadius?: string | AnimatableNumericValue | undefined,
    larguraBorda?: number,
    corBorda?: ColorValue,
    caminho: string,
    movimentacao?: string
    modo?: "text" | "contained" | "outlined" | "elevated" | "contained-tonal" | undefined
}

export function BotaoNavegacao({ corBotao, texto, corTexto, tamanhoTexto, paddingVertical, paddingHorizontal, borderRadius, larguraBorda, corBorda, caminho, movimentacao, modo }: IBotaoNavegacao) {
    const router = useRouter()

    return (
        <Button
            style={{
                paddingVertical: paddingVertical || 5,
                paddingHorizontal: paddingHorizontal || 10,
                borderRadius: borderRadius || 10,
                borderWidth: larguraBorda || 1,
                borderColor: corBorda || "black",
            }}
            mode={modo || "contained"}
            buttonColor={corBotao as string}
            onPress={() => router.push(movimentacao == "saida" || "entrada" ? { pathname: caminho as RelativePathString | ExternalPathString, params: { movimentacao: movimentacao } } : caminho as RelativePathString | ExternalPathString)}
        >
            <Text style={{
                textAlign: "center",
                color: corTexto || "black",
                fontSize: tamanhoTexto || 15
            }}>
                {texto}
            </Text>
        </Button>
    );
}

interface IBotaoTexto {
    corBotao: ColorValue,
    texto: string,
    corTexto?: ColorValue,
    tamanhoTexto?: number,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    borderRadius?: string | AnimatableNumericValue | undefined,
    larguraBorda?: number,
    corBorda?: ColorValue,
    modo?: "text" | "contained" | "outlined" | "elevated" | "contained-tonal" | undefined,
    onPress?: ((e: GestureResponderEvent) => void) | undefined
}

export function BotaoTexto({ corBotao, texto, corTexto, tamanhoTexto, paddingVertical, paddingHorizontal, borderRadius, larguraBorda, corBorda, modo, onPress }: IBotaoTexto) {
    return (
        <Button
            style={{
                paddingVertical: paddingVertical || 5,
                paddingHorizontal: paddingHorizontal || 10,
                borderRadius: borderRadius || 10,
                borderWidth: larguraBorda || 1,
                borderColor: corBorda || "black",
            }}
            mode={modo || "contained"}
            buttonColor={corBotao as string}
            onPress={onPress}
        >
            <Text style={{
                textAlign: "center",
                color: corTexto || "black",
                fontSize: tamanhoTexto || 15
            }}>
                {texto}
            </Text>
        </Button>
    );
}