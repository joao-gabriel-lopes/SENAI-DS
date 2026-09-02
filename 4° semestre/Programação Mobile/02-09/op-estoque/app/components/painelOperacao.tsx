import React from "react";
import { Text, ColorValue, DimensionValue, AnimatableNumericValue } from "react-native";

interface IPainel {
    texto: string,
    largura?: DimensionValue,
    corTexto?: ColorValue,
    corFundo?: ColorValue,
    tamanhoTexto?: number,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    borderRadius?: string | AnimatableNumericValue
}

export function Painel({ texto, largura, corTexto, corFundo, tamanhoTexto, paddingVertical, paddingHorizontal, borderRadius }: IPainel) {
    return (
        <Text style={{
            textAlign: "center",
            width: largura || "100%",
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