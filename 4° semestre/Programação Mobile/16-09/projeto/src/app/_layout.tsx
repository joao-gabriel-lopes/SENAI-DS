import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Tela inicial', headerTitleAlign: 'center'}} />
        <Stack.Screen name="paginas/pesquisa" options={{ title: 'Tela de pesquisa', headerTitleAlign: 'center'}} />
      </Stack>
  );
}
