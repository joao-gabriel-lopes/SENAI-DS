import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Pesquisa de Alunos' }}
      />
      <Stack.Screen
        name="details"
        options={{ title: 'Detalhes do Aluno' }}
      />
    </Stack>
  );
}