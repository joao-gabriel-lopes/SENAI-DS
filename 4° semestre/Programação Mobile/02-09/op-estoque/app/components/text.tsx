import React from "react";
import { Text, ColorValue, DimensionValue, AnimatableNumericValue } from "react-native";

interface ITexto {
    texto: string,
    corTexto?: ColorValue,
    corFundo?: ColorValue,
    tamanhoTexto?: number,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    borderRadius?: string | AnimatableNumericValue
}

export function Texto({ texto, corTexto, corFundo, tamanhoTexto, paddingVertical, paddingHorizontal, borderRadius }: ITexto) {
    return (
        <Text style={{
            textAlign: "center",
            color: corTexto || "black",
            fontSize: tamanhoTexto || 18,
            paddingVertical: paddingVertical || 10,
            paddingHorizontal: paddingHorizontal || 20,                
            backgroundColor: corFundo || "#efefef",
            borderRadius: borderRadius || 10
        }}>
            {texto}
        </Text>
    );
}