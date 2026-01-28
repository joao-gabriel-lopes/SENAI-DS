import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native';

export default function HomeScreen() {

  const [numero, setNumero] = useState(0)

  const styles = StyleSheet.create({
    input: {
      textAlign: "center",
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
      padding: 5,
      margin: 10
    },
    container: {
      padding: 10,
      marginTop: 40,
      backgroundColor: "white",
      gap: 10
    }
  })

  return (
      <View style={styles.container}>

        <TextInput 
          style={styles.input} 
          placeholder='Número'
          keyboardType='numeric'
          onChangeText={(text) => {
            const somenteNumeros = text.replace(/[^0-9]/g, "")
            setNumero(Number(somenteNumeros))
          }}
          value={numero.toFixed(0)}>
        </TextInput>

        <Button
          title="Acrescentar" 
          onPress={() => setNumero(numero + 1)}>
        </Button>

        <Button
          title="Decrementar" 
          onPress={() => setNumero(numero - 1)}>
        </Button>

        <Button
          title="Zerar" 
          onPress={() => setNumero(0)}>
        </Button>

      </View>
  );
}

