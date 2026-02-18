import { useEffect, useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import styles from './Style';

interface IFuncionario {
  nome: String,
  urlFoto: String,
  tipo: String,
  pagamento: Number
}

export default function Funcionarios() {
  const [listaFuncionarios, setLista] = useState<IFuncionario[]>([])

  const [numeroFuncionario, setNumeroFuncionario] = useState(0);

  async function ConsultarApi() {
    const resposta = await fetch("http://apisenai.runasp.net/funcionarios/")
    const dados = await resposta.json();
    setLista(dados);
  }

  useEffect(() => { ConsultarApi() }, []);

  function Anterior() {
    if (numeroFuncionario > 0) {
      setNumeroFuncionario(numeroFuncionario - 1);
    } else {
      let ultimoFuncionario = listaFuncionarios.length - 1;
      setNumeroFuncionario(ultimoFuncionario);
    }
  }

  function Proximo() {
    let ultimoFuncionario = listaFuncionarios.length - 1;
    if (numeroFuncionario < ultimoFuncionario) {
      setNumeroFuncionario(numeroFuncionario + 1);
    } else {
      setNumeroFuncionario(0);
    }
  }

  function FuncionarioCard(funcionario: IFuncionario) {
    return (
      <View style={styles.card}>
        <View style={styles.conteudoCard}>
          <Image
            source={{ uri: funcionario.urlFoto.toString() }}
            style={styles.imgCard}
          />
          <Text style={styles.tituloCard}>{funcionario?.nome}</Text>
          <Text style={styles.textoCard}>Pagamento: {funcionario?.pagamento?.toString()}</Text>
          <Text style={styles.textoCard}>Tipo: {funcionario?.tipo}</Text>
        </View>
      </View>
    )
  }

  return (
    <>
      <GestureRecognizer onSwipeLeft={Anterior} onSwipeRight={Proximo}>
        <View style={styles.scroll}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Funcionários</Text>
            {listaFuncionarios.length > 0 && FuncionarioCard(listaFuncionarios[numeroFuncionario])}
          </View>
          <View style={styles.containerBotao}>
            <Pressable onPress={() => Proximo()} style={styles.botaoVerFuncionarios}>
              <Text style={styles.textoBotao}>Anterior</Text>
            </Pressable>
            <Pressable onPress={() => Anterior()} style={styles.botaoVerFuncionarios}>
              <Text style={styles.textoBotao}>Próximo</Text>
            </Pressable>
          </View>
        </View>
      </GestureRecognizer>
    </>
  )
}