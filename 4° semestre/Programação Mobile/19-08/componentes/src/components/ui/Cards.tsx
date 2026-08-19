import { Text, ColorValue, View, Image, AnimatableNumericValue, DimensionValue } from "react-native";

interface ICardFoto {
    foto?: string,
    estiloImagem?: "redonda" | "quadrada"
    textoPrincipal?: string,
    textoSecundario?: string,
    textoTerciario?: string,
    borderRadius?: string | AnimatableNumericValue,
    corFundo?: ColorValue,
    larguraCard?: DimensionValue,
    alturaCard?: DimensionValue,
    corTexto?: ColorValue,
    larguraImagem?: DimensionValue,
    alturaImagem?: DimensionValue
}

export function CardFoto({ foto, estiloImagem, textoPrincipal, textoSecundario, textoTerciario, borderRadius,
    corFundo, larguraCard, alturaCard, corTexto, larguraImagem, alturaImagem }: ICardFoto) {
    function CarregarFoto(foto: string | undefined) {
        if (foto != null) {
            return (
                <Image
                    source={{ uri: foto }}
                    style={{
                        width: larguraImagem || 200,
                        height: alturaImagem || 200,
                        borderRadius: estiloImagem == "quadrada" ? 0 : estiloImagem == "redonda" ? 200 : 15
                    }}
                />
            );
        } else {
            return null
        }
    }

    return (
        <View style={{
            width: larguraCard || "auto",
            height: alturaCard || "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
            backgroundColor: corFundo || "#d7d7d7",
            borderRadius: borderRadius || 10,
            paddingVertical: 20,
            paddingHorizontal: 30,
            gap: 20
        }}>

            {CarregarFoto(foto)}

            <View style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20
            }}>

                <Text style={{
                    width: "100%",
                    fontSize: 15,
                    color: corTexto || "black"
                }}>
                    {textoPrincipal}
                </Text>

                <Text style={{
                    width: "100%",
                    fontSize: 15,
                    color: corTexto || "black"
                }}>
                    {textoSecundario}
                </Text>

                <Text style={{
                    width: "100%",
                    fontSize: 15,
                    color: corTexto || "black"
                }}>
                    {textoTerciario}
                </Text>

            </View>

        </View>
    );
}