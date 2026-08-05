import { TouchableOpacity, Text, ColorValue, DimensionValue, AnimatableNumericValue } from "react-native";

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
}

export function BotaoTexto({ corBotao, texto, corTexto, tamanhoTexto, paddingVertical, paddingHorizontal, borderRadius, larguraBorda, corBorda }: IBotaoTexto) {
    return (
        <TouchableOpacity style={{
            backgroundColor: corBotao,
            paddingVertical: paddingVertical || 10,
            paddingHorizontal: paddingHorizontal || 20,
            borderRadius: borderRadius || 10,
            borderWidth: larguraBorda || 1,
            borderColor: corBorda || "black",
        }}>
            <Text style={{
                textAlign: "center",
                color: corTexto || "black",
                fontSize: tamanhoTexto || 15
            }}>{texto}
            </Text>
        </TouchableOpacity>
    );
}