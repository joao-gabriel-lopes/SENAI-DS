import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { ListarPassaportes } from '../passaporte/passaporteApi';
import IPassaporte from './passaporteInterface';
import { useRouter } from "expo-router";

export default function TelaPassaportes() {
    const router = useRouter();

    const [passaportes, setPassaportes] = useState<IPassaporte[]>([]);

    useEffect(() => {
        carregarPassaportes();
    }, []);

    const carregarPassaportes = async () => {
        try {
            const dados = await ListarPassaportes();
            setPassaportes(dados);
        } catch (erro) {
            console.log(erro);
        }
    };

    return (
        <View>
            {passaportes.map(passaporte => (
                <Pressable
                    key={passaporte.id.toString()}
                    onPress={() => router.push({pathname: "passaporte/cadastroScreen", params: {id: passaporte.id.toString()}})}
                >
                    {passaporte.nome}
                </Pressable>
            ))}
        </View>
    );
}