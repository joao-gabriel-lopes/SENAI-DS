import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import styles from "./style";
import React, { useState } from "react";
import { store } from "./stores/store"

export default function Index() {
  const nomeProduto = store((state) => state.nomeProduto)
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>

        <ScrollView contentContainerStyle={styles.botaoContainer}>

          <Text>Index</Text>

          <Button onPress={() => router.push("/paginas/pesquisa")} title="Pesquisar"></Button>

          <Text>Você pesquisou: {nomeProduto}</Text>

        </ScrollView>

      </View>
    </SafeAreaProvider>
  );
}