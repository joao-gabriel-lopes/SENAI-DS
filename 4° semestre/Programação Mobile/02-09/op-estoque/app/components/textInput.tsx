import React from "react";
import { Text, ColorValue, DimensionValue, AnimatableNumericValue, View, TextInput } from "react-native";

interface ITextInput {
    texto: string,
    corTexto?: ColorValue,
    corFundo?: ColorValue,
    alturaInput?: DimensionValue,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    borderRadius?: string | AnimatableNumericValue
}

export function Texto({ texto, corTexto, corFundo, alturaInput, borderRadius }: ITextInput) {
    return (
        <View style={{
            width: "90%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10
        }}>
            <Text style={{
                fontSize: 18,
                color: corTexto || "#ffffff"
            }}>
                {texto}
            </Text>
            <TextInput
                style={{
                    backgroundColor: corFundo || "#ffffff",
                    height: alturaInput || 200,
                    width: "100%",
                    borderRadius: 10,
                    fontSize: 16,
                    padding: 10
                }}
                multiline={true}
                numberOfLines={10}
                textAlignVertical="top"
            />
        </View>
    );
}