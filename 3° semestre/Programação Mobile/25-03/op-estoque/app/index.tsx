import { ImageBackground, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import { Button } from 'react-native-paper';
import styles from "./style";

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <ImageBackground style={styles.background} source={require("../assets/images/background.jpg")} resizeMode="cover">

                    <View style={styles.botaoContainer}>

                        <TextInput style={styles.input} placeholder="Digite o que deseja pesquisar" />

                        <Button style={styles.button} mode="contained" buttonColor="#0c5a78" onPress={() => { }}>
                            Lista de produtos
                        </Button>

                        <Button style={styles.button} mode="contained" buttonColor="#0c7840" onPress={() => { }}>
                            Entrada de produtos
                        </Button>

                        <Button style={styles.button} mode="contained" buttonColor="#ab1212" onPress={() => { }}>
                            Retirada de produtos
                        </Button>

                        <Button style={styles.button} mode="contained" buttonColor="#0c7876" onPress={() => { router.push("/screens/sobre/sobreScreen") }}>
                            Sobre nós
                        </Button>

                    </View>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}