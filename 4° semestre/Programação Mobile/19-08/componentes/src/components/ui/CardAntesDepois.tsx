import { Text, ColorValue, View, Image, AnimatableNumericValue, DimensionValue } from "react-native";

interface ICardAntesDepois {
    titulo: string,
    imgAntes: string,
    imgDepois: string,
    borderRadius?: string | AnimatableNumericValue,
    corFundo?: ColorValue,
    larguraCard?: DimensionValue,
    alturaCard?: DimensionValue,
    corTexto?: ColorValue,
    larguraImagem?: DimensionValue,
    alturaImagem?: DimensionValue
}

export function CardAntesDepois({ titulo, imgAntes, imgDepois, borderRadius, corFundo, larguraCard, alturaCard, corTexto, larguraImagem, alturaImagem }: ICardAntesDepois) {
    return (
        <View style={{
            width: larguraCard || "auto",
            height: alturaCard || "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            backgroundColor: corFundo || "#d7d7d7",
            borderRadius: borderRadius || 10,
            paddingVertical: 20,
            paddingHorizontal: 30,
            gap: 20
        }}>

            <Text style={{
                width: "100%",
                fontSize: 25,
                color: corTexto || "black",
                textAlign: "center"
            }}>
                {titulo}
            </Text>

            <View style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 20
            }}>

                <View style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20
                }}>

                    <Image
                        source={{ uri: imgAntes }}
                        style={{
                            width: larguraImagem || 200,
                            height: alturaImagem || 200,
                            borderRadius: 15
                        }}
                    />

                    <Text style={{
                        width: "100%",
                        fontSize: 16,
                        color: corTexto || "black",
                        textAlign: "center"
                    }}>
                        {"Antes"}
                    </Text>

                </View>

                <View style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20
                }}>

                    <Image
                        source={{ uri: imgDepois }}
                        style={{
                            width: larguraImagem || 200,
                            height: alturaImagem || 200,
                            borderRadius: 15
                        }}
                    />

                    <Text style={{
                        width: "100%",
                        fontSize: 16,
                        color: corTexto || "black",
                        textAlign: "center"
                    }}>
                        {"Depois"}
                    </Text>

                </View>

            </View>

        </View>
    );
}