import React from "react";
import { Text, ColorValue, DimensionValue, AnimatableNumericValue, View, TextInput, NativeSyntheticEvent, NativeTouchEvent } from "react-native";

interface ITextInput {
    texto: string,
    tamanhoTexto?: number,
    corTexto?: ColorValue,
    corFundo?: ColorValue,
    alturaInput?: DimensionValue,
    larguraInput?: DimensionValue,
    larguraDiv?: DimensionValue,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    borderRadius?: string | AnimatableNumericValue,
    alinhamentoInput?: "auto" | "center" | "top" | "bottom" | undefined,
    value?: string | undefined,
    onChangeText?: ((text: string) => void) | undefined
}

export function TextoInput({ texto, tamanhoTexto, corTexto, corFundo, alturaInput, larguraInput, larguraDiv, borderRadius, alinhamentoInput, value, onChangeText }: ITextInput) {
    return (
        <View style={{
            width: larguraDiv || "90%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10
        }}>
            <Text style={{
                fontSize: tamanhoTexto || 18,
                color: corTexto || "#ffffff"
            }}>
                {texto}
            </Text>
            <TextInput
                style={{
                    backgroundColor: corFundo || "#ffffff",
                    height: alturaInput || "auto",
                    width: larguraInput || "100%",
                    borderRadius: borderRadius || 10,
                    fontSize: 16,
                    padding: 10
                }}
                multiline={true}
                textAlignVertical={alinhamentoInput || "center"}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}