import { Button, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import styles from ".././style";
import React, { useState } from "react";
import { useOptionStore } from "../../../Hooks/useOptionStore";

export default function Index() {
    const [opcaoLocal, setOpcaoLocal] = useState<string>("")

    const setOpcoes = useOptionStore((state) => state.setOpcoes)

    function Confirmar(opcao: string){
        setOpcoes(opcao)
        router.push("/")
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <Text>{opcaoLocal}</Text>
                <Text>--------------------------------</Text>
                <Text onPress={() => setOpcaoLocal("Frango Frito")}>Frango frito</Text>
                <Text onPress={() => setOpcaoLocal("Tilápia empanada")}>Tilápia empanada</Text>
                <Text onPress={() => setOpcaoLocal("Pomada capilar")}>Pomada capilar</Text>

                <Button title="Cancelar" onPress={() => router.push("/")}/>

                <Button title="Confirmar opção" onPress={() => Confirmar(opcaoLocal)}/>

            </View>
        </SafeAreaProvider>
    );
}