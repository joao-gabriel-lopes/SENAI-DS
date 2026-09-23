import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import styles from "./style";
import React, { useState } from "react";
import { useOptionStore } from "../../Hooks/useOptionStore"

export default function Index() {
  const opcoes = useOptionStore((state) => state.opcoes)
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.botaoContainer}>

          <Text>Index</Text>

          <Button onPress={() => router.push("/paginas/pesquisa")} title="Pesquisar"></Button>

          <Text>Você pesquisou: </Text>
          {
            opcoes.map((opcao, index) => (
              <Text key={index}>{opcao}</Text>
            ))
          }

        </ScrollView>

      </View>
    </SafeAreaProvider>
  );
}