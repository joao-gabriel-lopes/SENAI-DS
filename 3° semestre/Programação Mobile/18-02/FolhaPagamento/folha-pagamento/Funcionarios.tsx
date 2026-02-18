import { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from './Style';

interface IFuncionario {
  nome: String,
  urlFoto: String,
  tipo: String,
  pagamento: Number
}

export default function Funcionarios() {
  const [listaFuncionarios, setLista] = useState<IFuncionario[]>([])

  const [numeroFuncionario, serNumeroFuncionario] = useState(0);

  async function ConsultarApi() {
    const resposta = await fetch("http://apisenai.runasp.net/funcionarios/")

    if (resposta.ok) {
      const dados = await resposta.json();
      setLista(dados);
    } else {
      throw new Error("Erro ao consultar a API")
    }
  }

  useEffect(() => { ConsultarApi() }, []);

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
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Funcionários</Text>
          <View style={styles.containerCard}>
            {FuncionarioCard(listaFuncionarios[numeroFuncionario])}
          </View>
        </View>
      </ScrollView>
    </>
  )
}