import { ImageBackground, ScrollView, Text, Image, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globals from "../../../style";
import styles from "./style";
import { useEffect, useState } from "react";
import IUnidadeMedida from "@/app/interfaces/iUnidadeMedida";
import ICategoria from "@/app/interfaces/iCategoria";
import { ListarCategorias, ListarProdutoPorId, ListarProdutos, ListarProdutosFiltrados, ListarUnidadesMedida } from "@/app/api";
import IFiltro from "@/app/interfaces/iFiltro";
import IProdutoPesquisa from "@/app/interfaces/iProdutoPesquisa";

export default function PesquisaProdutos() {
    const [produtos, setProdutos] = useState<IProdutoPesquisa[]>([])
    const [unidades, setUnidades] = useState<IUnidadeMedida[]>([])
    const [categorias, setCategorias] = useState<ICategoria[]>([])
    const [filtro, setFiltro] = useState<IFiltro>({
        nome: null,
        categoriaNome: null
    })

    useEffect(() => {
        const conteudo = async () => {
            const unidades = await ListarUnidadesMedida();
            setUnidades(unidades);
            const categorias = await ListarCategorias();
            setCategorias(categorias);
            const produtos = await ListarProdutos();
            setProdutos(produtos);
        };
        conteudo();
    }, []);

    async function mudarFiltro(e: string) {
        setFiltro({nome: e, categoriaNome: e});
        setProdutos(await ListarProdutosFiltrados({nome: e, categoriaNome: e}));
    }

    return (
        <SafeAreaProvider>
            <View style={globals.container}>

                <ImageBackground style={globals.background} source={require("../../../../assets/images/background.jpg")} resizeMode="cover">

                    <ScrollView contentContainerStyle={styles.conteudoContainer}>

                        <TextInput style={styles.input} placeholder="Digite o nome ou categoria do produto 🔍︎" onChangeText={async (e) => { mudarFiltro(e) }} />

                        <View style={styles.cardContainer}>

                            {
                                produtos.map(produto => (
                                    <View key={produto.id} style={styles.card}>

                                        <View>
                                            {<Image source={{ uri: `https://apiestoque.runasp.net/imagens/${produto.nomeArquivoImagem}` }} style={styles.cardImagem} />}
                                        </View>

                                        <View style={styles.cardConteudo}>
                                            <Text style={styles.cardTexto}>Categoria: {produto.categoriaNome}</Text>
                                            <Text style={styles.cardTexto}>{produto.produtoNome}</Text>
                                            <Text style={styles.cardTexto}>Quantidade: {produto.quantidadeAtual} {produto.unidadeMedida}</Text>
                                        </View>

                                    </View>
                                ))
                            }

                        </View>

                    </ScrollView>

                </ImageBackground>

            </View>
        </SafeAreaProvider>
    );

}