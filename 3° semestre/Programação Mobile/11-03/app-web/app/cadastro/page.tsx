"use client";
import { useEffect, useState } from "react";
import ICarteira from "../carteiraInterface";
import { AtualizarCarteira, BuscarCarteiraPorId, DeletarCarteira, InserirCarteira } from "../carteiraApi";
import { useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./style";

export default function Cadastro() {
  const { id } = useLocalSearchParams();

  const [carteira, setCarteira] = useState<ICarteira>();

  const [rm, setRm] = useState(0);
  const [nome, setNome] = useState("");
  const [unidade, setUnidade] = useState<string>("");
  const [curso, setCurso] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [urlFoto, setUrlFoto] = useState("");

  const carregarCarteira = async () => {
    try {
      if (id) {
        const dados = await BuscarCarteiraPorId(id.toString());
        setCarteira(dados);
        setRm(Number(dados?.rm) ?? 0)
        setNome(String(dados?.nome))
        setUnidade(String(dados?.unidade))
        setCurso(String(dados?.curso))
        setNascimento(dados?.nascimento.toString() ?? "")
        setUrlFoto(String(dados?.urlFoto))
      }
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    carregarCarteira();
  }, []);

  const cartaoAtualizar = () => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>{id}</Text>
        <TextInput style={styles.cardInput} keyboardType="numeric" value={rm.toString()} onChangeText={(text) => { setRm(Number(text)) }} />
        <TextInput style={styles.cardInput} value={nome} onChangeText={(text) => { setNome(text) }} />
        <TextInput style={styles.cardInput} value={unidade} onChangeText={(text) => { setUnidade(text) }} />
        <TextInput style={styles.cardInput} value={curso} onChangeText={(text) => { setCurso(text) }} />
        <TextInput style={styles.cardInput} value={nascimento} onChangeText={(text) => { setNascimento(text) }} />
        <TextInput style={styles.cardInput} value={urlFoto} onChangeText={(text) => { setUrlFoto(text) }} />
        <View style={styles.cardBotao}>
          <Pressable onPress={() => {
            AtualizarCarteira(String(id), {
              id: String(id), rm, nome, unidade, curso, nascimento: new Date(nascimento), urlFoto
            } as ICarteira);

          }}>
            <Text style={styles.cardTexto}>Atualizar</Text>
          </Pressable>
        </View>
        <View style={styles.cardBotao}>
          <Pressable onPress={() => {
            DeletarCarteira(String(id))
          }}>
            <Text style={styles.cardTexto}>Deletar</Text>
            </Pressable>
        </View>
      </View>
    );
  }

  const cartaoInserir = () => {
    return (
      <View style={styles.card}>
        <TextInput style={styles.cardInput} keyboardType="numeric" value={rm.toString()} onChangeText={(text) => { setRm(Number(text)) }} placeholder="Insira o rm" />
        <TextInput style={styles.cardInput} value={nome} onChangeText={(text) => { setNome(text) }} placeholder="Insira o nome" />
        <TextInput style={styles.cardInput} value={unidade} onChangeText={(text) => { setUnidade(text) }} placeholder="Insira a unidade" />
        <TextInput style={styles.cardInput} value={curso} onChangeText={(text) => { setCurso(text) }} placeholder="Insira o curso" />
        <TextInput style={styles.cardInput} value={nascimento} onChangeText={(text) => { setNascimento(text) }} placeholder="Insira a data de nascimento" />
        <TextInput style={styles.cardInput} value={urlFoto} onChangeText={(text) => { setUrlFoto(text) }} placeholder="Insira a URL da foto" />
        <View style={styles.cardBotao}>
          <Pressable onPress={async () => {
            await InserirCarteira({
              id: "", rm: Number(rm), nome, unidade, curso, nascimento: new Date(nascimento), urlFoto
            } as ICarteira);
          }}>
            <Text style={styles.cardTexto}>Inserir</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  if (id) {
    return (
      <>
        {cartaoAtualizar()}
      </>
    );
  } else {
    return (
      <>
        {cartaoInserir()}
      </>
    )
  }
}

