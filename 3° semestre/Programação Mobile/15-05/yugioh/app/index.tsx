import { ImageBackground, Text, Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { Button } from 'react-native-paper';
import styles from "./style"
import { useState } from "react";

export default function Index() {
    const router = useRouter();

    const { id } = useLocalSearchParams();

    if(id === undefined) {
        router.push("/1");
    }

    const [cartas] = useState([
        {
            id: 1,
            nome: "Dragão Branco de Olhos Azuis",
            estrelas: 8,
            caminhoFoto: require("../assets/images/dragao_branco.jpg"),
            descricao: "Um dos monstros mais poderosos, famoso por seu ataque devastador.",
            ataque: 3000,
            defesa: 2500,
        },
        {
            id: 2,
            nome: "Dragão Negro de Olhos Vermelhos",
            estrelas: 7,
            caminhoFoto: require("../assets/images/dragao_negro.jpg"),
            descricao: "Monstro lendário com força impressionante e ataque veloz.",
            ataque: 2400,
            defesa: 2000,
        },
        {
            id: 3,
            nome: "Mago Negro",
            estrelas: 7,
            caminhoFoto: require("../assets/images/mago_negro.jpg"),
            descricao: "Mago poderoso com feitiços que anulam as defesas do oponente.",
            ataque: 2500,
            defesa: 2100,
        },
        {
            id: 4,
            nome: "Mago do Tempo",
            estrelas: 8,
            caminhoFoto: require("../assets/images/mago_tempo.jpg"),
            descricao: "Mago com a habilidade de manipular o tempo durante a batalha.",
            ataque: 2800,
            defesa: 2600,
        },
        {
            id: 5,
            nome: "Kuriboh",
            estrelas: 1,
            caminhoFoto: require("../assets/images/kuriboh.png"),
            descricao: "Monstro pequeno, mas útil para proteger o jogador de um ataque fatal.",
            ataque: 300,
            defesa: 200,
        },
        {
            id: 6,
            nome: "Monstro Renascido",
            estrelas: 0,
            caminhoFoto: require("../assets/images/monstro_renasce.jpg"),
            descricao: "Carta mágica que revive um monstro do cemitério.",
            ataque: 0,
            defesa: 0,
        },
        {
            id: 7,
            nome: "Pote da Ganância",
            estrelas: 0,
            caminhoFoto: require("../assets/images/pote_ganancia.webp"),
            descricao: "Carta mágica que permite comprar duas cartas adicionais.",
            ataque: 0,
            defesa: 0,
        },
        {
            id: 8,
            nome: "Polimerização",
            estrelas: 0,
            caminhoFoto: require("../assets/images/polimerizacao.webp"),
            descricao: "Carta mágica usada para fundir monstros e invocar bestas poderosas.",
            ataque: 0,
            defesa: 0,
        },
        {
            id: 9,
            nome: "Obelisco do Dragão",
            estrelas: 10,
            caminhoFoto: require("../assets/images/obelisco.jpg"),
            descricao: "Deus egípcio com força imensa e resistência quase inquebrável.",
            ataque: 4000,
            defesa: 4000,
        },
        {
            id: 10,
            nome: "Exodia, o Proibido",
            estrelas: 1,
            caminhoFoto: require("../assets/images/exodia_cabeca.jpg"),
            descricao: "Parte da poderosa combinação Exodia; juntar todas as peças garante a vitória.",
            ataque: 1000,
            defesa: 1000,
        },
        {
            id: 11,
            nome: "Exodia, Braço Direito",
            estrelas: 1,
            caminhoFoto: require("../assets/images/exodia_braco_direito.jpg"),
            descricao: "Uma das cinco peças necessárias para invocar Exodia.",
            ataque: 1000,
            defesa: 1000,
        },
        {
            id: 12,
            nome: "Exodia, Braço Esquerdo",
            estrelas: 1,
            caminhoFoto: require("../assets/images/exodia_braco_esquerdo.jpg"),
            descricao: "Uma das peças de Exodia; combina com as outras para ganhar o duelo.",
            ataque: 1000,
            defesa: 1000,
        },
        {
            id: 13,
            nome: "Exodia, Perna Direita",
            estrelas: 1,
            caminhoFoto: require("../assets/images/exodia_perna_direita.jpg"),
            descricao: "Peça essencial de Exodia; ainda precisa das outras quatro partes.",
            ataque: 1000,
            defesa: 1000,
        },
        {
            id: 14,
            nome: "Exodia, Perna Esquerda",
            estrelas: 1,
            caminhoFoto: require("../assets/images/exodia_perna_esquerda.jpg"),
            descricao: "Última peça de Exodia, usada para completar a coleção lendária.",
            ataque: 1000,
            defesa: 1000,
        },
    ])

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <ImageBackground style={styles.background} source={require("../assets/images/background.jpg")} resizeMode="cover">

                    {cartas.find(carta => carta.id === id) && (
                        <ImageBackground style={styles.card} source={require("../assets/images/carta.jpg")}>
                            <Text style={styles.cardTexto}>Nome: {carta.nome}</Text>

                            <Text style={styles.cardEstrelas}>
                                {Array(carta.estrelas).fill("✪").join("")}
                            </Text>

                            <View>
                                <Image source={carta.caminhoFoto} style={styles.cardImagem} />
                            </View>

                            <View style={styles.cardConteudo}>
                                <Text style={styles.cardTexto}>{carta.descricao}</Text>
                            </View>

                            <View style={styles.danoContainer}>
                                <Text style={styles.cardTexto}>{carta.ataque}</Text>
                                <Text style={styles.cardTexto}>{carta.defesa}</Text>
                            </View>
                        </ImageBackground>
                    )}

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );
}