import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Tela inicial', headerTitleAlign: 'center'}} />
        <Stack.Screen name="screens/sobre/sobreScreen" options={{ title: 'Sobre nós', headerTitleAlign: 'center'}} />
        <Stack.Screen name="screens/produto/produtoPesquisaScreen" options={{title: 'Pesquisa de produtos', headerTitleAlign: 'center'}} />
        <Stack.Screen name="screens/operacaoEstoque/operacaoEstoqueScreen" options={{ title: 'Operação de estoque', headerTitleAlign: 'center'}} />
        <Stack.Screen name="screens/operacoes/operacoesScreen" options={{ title: 'Lista de operações', headerTitleAlign: 'center'}} />
      </Stack>
  );
}
