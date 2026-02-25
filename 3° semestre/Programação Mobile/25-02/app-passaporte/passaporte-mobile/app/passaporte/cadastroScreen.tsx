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

    const cartao = () => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardTexto}>{passaporte?.nome}</Text>
                <Text style={styles.cardTexto}>{passaporte?.sobrenome}</Text>
                <Text style={styles.cardTexto}>{passaporte?.numero}</Text>
                <Text style={styles.cardTexto}>{passaporte?.cpf}</Text>
                <Text style={styles.cardTexto}>{passaporte?.tipo}</Text>
                <Text style={styles.cardTexto}>{passaporte?.urlFoto}</Text>
                <Text style={styles.cardTexto}>{passaporte?.paisEmissor}</Text>
                <Text style={styles.cardTexto}>{passaporte?.nacionalidade}</Text>
                <Text style={styles.cardTexto}>{passaporte?.naturalidade}</Text>
                <Text style={styles.cardTexto}>{passaporte?.dataNascimento.toString()}</Text>
                <Text style={styles.cardTexto}>{passaporte?.sexo}</Text>
                <Text style={styles.cardTexto}>{passaporte?.nomePai}</Text>
                <Text style={styles.cardTexto}>{passaporte?.nomeMae}</Text>
                <Text style={styles.cardTexto}>{passaporte?.dataExpedimento.toString()}</Text>
                <Text style={styles.cardTexto}>{passaporte?.dataVencimento.toString()}</Text>
                <Text style={styles.cardTexto}>{passaporte?.autoridade}</Text>
            </View>
        );
    }

    if (id){
        return (
        <>
            {cartao()}
        </>
    );
    } else{
        return(
            <View>
                <Text>Id não fornecido</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderBlockColor: "black",
        borderWidth: 2,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: "center"
    },
    cardTexto: {
        textAlign: "center",
        padding: 5
    }
});