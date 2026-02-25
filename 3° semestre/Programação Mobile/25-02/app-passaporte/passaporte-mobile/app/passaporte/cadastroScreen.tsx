import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IPassaporte from "./passaporteInterface";
import { BuscarPassaportePorId } from "./passaporteApi";

export default function CadastroPassaportes() {
    const { id } = useLocalSearchParams();

    const [passaporte, setPassaporte] = useState<IPassaporte>();

    const carregaPassaporte = async () => {
        try {
            const dados = await BuscarPassaportePorId(id.toString());
            setPassaporte(dados);
        } catch (erro) {
            console.log(erro);
        }
    };

    useEffect(() => {
        carregaPassaporte();
    }, []);

    return (
        <View>
            <Text>{passaporte?.nome}</Text>
            <Text>{passaporte?.sobrenome}</Text>
            <Text>{passaporte?.numero}</Text>
            <Text>{passaporte?.cpf}</Text>
            <Text>{passaporte?.tipo}</Text>
            <Text>{passaporte?.urlFoto}</Text>
            <Text>{passaporte?.paisEmissor}</Text>
            <Text>{passaporte?.nacionalidade}</Text>
            <Text>{passaporte?.naturalidade}</Text>
            <Text>{passaporte?.dataNascimento.toString()}</Text>
            <Text>{passaporte?.sexo}</Text>
            <Text>{passaporte?.nomePai}</Text>
            <Text>{passaporte?.nomeMae}</Text>
            <Text>{passaporte?.dataExpedimento.toString()}</Text>
            <Text>{passaporte?.dataVencimento.toString()}</Text>
            <Text>{passaporte?.autoridade}</Text>
        </View>
    );
}