import { Text, ColorValue, View, TextInput } from "react-native";

interface IInputTexto {
    corFundo?: ColorValue,
    texto?: string,
    corTexto?: ColorValue,
    larguraBordaInferior?: number,
    corBordaInferior?: ColorValue,
}

export function InputTexto({corFundo, texto, corTexto, larguraBordaInferior, corBordaInferior}: IInputTexto) {
    return (
        <View style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5
        }}>

            <Text style={{
                width: "100%",
                color: "black",
                textAlign: "left",
                fontSize: 16
            }}>
                {texto}
            </Text>

            <TextInput style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: corFundo || "white",
                borderBottomWidth: larguraBordaInferior || 1,
                borderBottomColor: corBordaInferior || "black",
                color: corTexto || "black"
            }}>                
            </TextInput>

        </View>
    );
}