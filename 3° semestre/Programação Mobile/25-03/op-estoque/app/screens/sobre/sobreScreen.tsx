import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../style";
import styles from "./style";

export default function Index() {
    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        <Text style={styles.conteudo}>
                            Aplicativo desenvolvido com o objetivo de gerenciar as operações de estoque necessárias para o bom funcionamento do armazém.
                            Há uma lista detalhada de todos os produtos cadastrados no estoque.
                            Há uma tela para realizar operações de inserção de produtos no armazém.
                            Há uma tela para realizar operações de retirada de produtos no armazém.
                        </Text>

                        <Text style={styles.conteudo}>                            
                            Este aplicativo não fornece operações de nível administrativo, para acessá-las entre no site administrativo.
                        </Text>

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}