"use client"
import styles from "./style";
import { useEffect, useState } from "react";
import { ListarCarteiras } from "../carteiraApi";
import ICarteira from "../carteiraInterface";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";

export default function Lista() {
  const [lista, setLista] = useState<ICarteira[]>([]);

  const PesquisarCarteira = async (termo: String) => {
    if (termo === "") {
      carregarCarteiras();
      return;
    }
    const todasCarteiras = lista;
    setLista(todasCarteiras.filter((carteira: ICarteira) => carteira.nome.toLowerCase().includes(termo.toLowerCase())));
  }

  useEffect(() => {
    carregarCarteiras();
  }, []);

  const carregarCarteiras = async () => {
    try {
      const dados = await ListarCarteiras();
      setLista(dados);
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.cardTitulo}>Carteiras</Text>
      <TextInput style={styles.cardInput} onChangeText={(text) => PesquisarCarteira(text)} placeholder="Buscar carteira..." />
      {lista.map(carteira => (
        <View key={carteira.id.toString()} style={styles.card}>
          <View key={carteira.id.toString()} style={styles.cardBotao}>
            <Pressable
              onPress={() => window.location.href = `/cadastro/page?id=${carteira.id.toString()}`}
            >
              <Text style={styles.cardTexto}>{carteira.nome}</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
