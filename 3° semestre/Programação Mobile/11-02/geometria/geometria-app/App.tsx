import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface IRetangulo {
  comprimento: number,
  largura: number,
  area: number,
  perimetro: number
}

interface ITriangulo {
  comprimento: number,
  largura: number,
  area: number,
}

export default function App() {
  async function CarregarDados(comprimento: number, largura: number) {
    if (valorSelecionado == "retangulo") {
      const resposta = await fetch(`http://joao-api.runasp.net/retangulo?comprimento=${comprimento}&largura=${largura}`);
      const dados = await resposta.json();
      setRetangulo(dados);
    } else if (valorSelecionado == "triangulo") {
      const resposta = await fetch(`http://joao-api.runasp.net/triangulo?comprimento=${comprimento}&largura=${largura}`);
      const dados = await resposta.json();
      setTriangulo(dados);
    }
  }

  const [comprimento, setComprimento] = useState(0);
  const [largura, setLargura] = useState(0);
  const [valorSelecionado, setValorSelecionado] = useState("retangulo");

  const [retangulo, setRetangulo] = useState<IRetangulo>()
  const [triangulo, setTriangulo] = useState<ITriangulo>()

  function Exibicao() {
    if (valorSelecionado == "retangulo") {
      return (
        <View style={styles.exibicao}>
          <Text style={styles.textoExibicao}>Área: {retangulo?.area}</Text>
          <Text style={styles.textoExibicao}>Perímetro: {retangulo?.perimetro}</Text>
        </View>
      );
    } else if (valorSelecionado == "triangulo") {
      return (
        <View style={styles.exibicao}>
          <Text style={styles.textoExibicao}>Área: {triangulo?.area}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.titulo}>Calculos geométricos</Text>
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          id='comprimento'
          keyboardType='numeric'
          placeholder='Digite o comprimento'
          onChangeText={(text) => {
            setComprimento(Number(text));
          }}
        />
        <TextInput
          style={styles.input}
          id='largura'
          keyboardType='numeric'
          placeholder='Digite a largura'
          onChangeText={(text) => {
            setLargura(Number(text));
          }}
        />

        <View style={styles.grupoRadio}>
          <RadioButton.Group onValueChange={value => setValorSelecionado(value)} value={valorSelecionado}>
            <View style={styles.opcao}>
              <Text>Retângulo</Text>
              <RadioButton value="retangulo" />
            </View>
            <View style={styles.opcao}>
              <Text>Triângulo</Text>
              <RadioButton value="triangulo" />
            </View>
          </RadioButton.Group>
        </View>

        <Pressable
          style={styles.botaoCalcular}
          onPress={() => CarregarDados(comprimento, largura)}
        >
          <Text style={styles.textoBotao}>Calcular</Text>
        </Pressable>
      </View>

      {Exibicao()}

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  input: {
    textAlign: "center",
    borderBlockColor: "gray",
    width: "140%",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titulo: {
    color: "black",
    fontSize: 36,
    fontWeight: 600
  },
  formulario: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 30
  },
  exibicao: {
    display: "flex",
    width: 300,
    height: 100,
    padding: 10,
    justifyContent: "center",
    gap: 10,
    borderBlockColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
  },
  botaoCalcular: {
    backgroundColor: "#178de1c7",
    borderBlockColor: "gray",
    width: "80%",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  textoBotao: {
    textAlign: "center"
  },
  textoExibicao: {
    fontSize: 15
  },
  opcao: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  grupoRadio: {
    borderBlockColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  }
});
