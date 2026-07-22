import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./style";

export default function Index() {

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <Text style={styles.titulo}>Produtos</Text>

                <ScrollView contentContainerStyle={styles.cardContainer}>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Arroz Integral</Text>
                        <Text style={styles.textoCard}>Alimentos</Text>
                        <Text style={styles.textoCard}>5 kg</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Feijão Preto</Text>
                        <Text style={styles.textoCard}>Alimentos</Text>
                        <Text style={styles.textoCard}>2 kg</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Azeite de Oliva Extra Virgem</Text>
                        <Text style={styles.textoCard}>Alimentos</Text>
                        <Text style={styles.textoCard}>1 unidade</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Leite Desnatado</Text>
                        <Text style={styles.textoCard}>Bebidas</Text>
                        <Text style={styles.textoCard}>12 litros</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Café Torrado e Moído</Text>
                        <Text style={styles.textoCard}>Bebidas</Text>
                        <Text style={styles.textoCard}>3 pacotes</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Sabonete em Barra</Text>
                        <Text style={styles.textoCard}>Higiene Pessoal</Text>
                        <Text style={styles.textoCard}>8 unidades</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Creme Dental Branqueador</Text>
                        <Text style={styles.textoCard}>Higiene Pessoal</Text>
                        <Text style={styles.textoCard}>4 tubos</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Shampoo Anticaspa</Text>
                        <Text style={styles.textoCard}>Higiene Pessoal</Text>
                        <Text style={styles.textoCard}>2 frascos</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Detergente Neutro</Text>
                        <Text style={styles.textoCard}>Limpeza</Text>
                        <Text style={styles.textoCard}>6 garrafas</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Amaciante Concentrado</Text>
                        <Text style={styles.textoCard}>Limpeza</Text>
                        <Text style={styles.textoCard}>1 galão</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Caderno Universitário 10 Matérias</Text>
                        <Text style={styles.textoCard}>Papelaria</Text>
                        <Text style={styles.textoCard}>3 unidades</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Caneta Esferográfica Azul</Text>
                        <Text style={styles.textoCard}>Papelaria</Text>
                        <Text style={styles.textoCard}>10 unidades</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Lâmpada LED 9W</Text>
                        <Text style={styles.textoCard}>Eletrodomésticos</Text>
                        <Text style={styles.textoCard}>5 unidades</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Pilha Alcalina AA</Text>
                        <Text style={styles.textoCard}>Eletrônicos</Text>
                        <Text style={styles.textoCard}>1 cartela</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Ração para Cães Adultos</Text>
                        <Text style={styles.textoCard}>Pet Shop</Text>
                        <Text style={styles.textoCard}>15 kg</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Chocolate Meio Amargo</Text>
                        <Text style={styles.textoCard}>Doces</Text>
                        <Text style={styles.textoCard}>5 barras</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Suco de Uva Integral</Text>
                        <Text style={styles.textoCard}>Bebidas</Text>
                        <Text style={styles.textoCard}>4 garrafas</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Toalha de Banho Algodão</Text>
                        <Text style={styles.textoCard}>Cama, Mesa e Banho</Text>
                        <Text style={styles.textoCard}>2 unidades</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Garrafa Térmica Inox</Text>
                        <Text style={styles.textoCard}>Cozinha</Text>
                        <Text style={styles.textoCard}>1 unidade</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.textoCard}>Protetor Solar FPS 50</Text>
                        <Text style={styles.textoCard}>Cuidados Pessoais</Text>
                        <Text style={styles.textoCard}>2 frascos</Text>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaProvider>
    );
}