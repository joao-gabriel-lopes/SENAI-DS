'use client'
import { useEffect, useState } from "react";
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import IProduto from "@/app/interfaces/iProduto";
import { DeletarProduto, ListarCategorias, ListarProdutosPorId, ListarUnidadesMedida } from "@/app/api";
import IUnidadeMedida from "@/app/interfaces/iUnidadeMedida";
import ICategoria from "@/app/interfaces/iCategoria";

export default function CadastroProduto() {
    const router = useRouter();

    const parametros = useSearchParams()
    const id = parametros.get("id") ?? ""

    const [produto, setProduto] = useState<IProduto>({ id: null, nome: '', descricao: '', categoriaProdutoId: "", unidadeMedidaId: "", quantidadeAtual: 0, habilitado: true, nomeArquivoFoto: null })
    const [unidades, setUnidades] = useState<IUnidadeMedida[]>([])
    const [categorias, setCategorias] = useState<ICategoria[]>([])

    useEffect(() => {
        const conteudo = async () => {
            const unidades = await ListarUnidadesMedida();
            setUnidades(unidades);
            const categorias = await ListarCategorias();
            setCategorias(categorias);
        };
        conteudo();
    }, []);

    if (id != "") {
        useEffect(() => {
            const conteudo = async () => {
                const data = await ListarProdutosPorId(id);
                setProduto(data);
            };
            conteudo();
        }, []);
    }

    return (
        <>
            <section className={styles.container}>

                <section className={styles.containerCadastro}>

                    <h1>Cadastro de produto</h1>

                    {produto.nomeArquivoFoto && <img className={styles.imagemProduto} src={`http://apiestoque.runasp.net/imagens/${produto.nomeArquivoFoto}`} alt="Imagem" />}

                    <input className={inputStyles.fileInput} type="file" id="file" name="file" onChange={(e) => setProduto({ ...produto, nomeArquivoFoto: e.target.files?.[0]?.name || '' })} />

                    <label htmlFor="file" className={inputStyles.labelFileInput}>Escolher imagem</label>

                    <input className={inputStyles.input} type="text" name="nome" id="nome" placeholder="Digite o nome do produto" value={produto.nome} onChange={(e) => setProduto({ ...produto, nome: e.target.value })} />

                    <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição do produto" value={produto.descricao?.toString()} onChange={(e) => setProduto({ ...produto, descricao: e.target.value })}></textarea>

                    <article className={styles.containerSelect}>

                        <select className={styles.select} name="categoria" id="categoria" value={produto.categoriaProdutoId} onChange={(e) => setProduto({ ...produto, categoriaProdutoId: e.target.value })}>
                            <option value="">Selecione uma categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id?.toString()}>
                                    {categoria.nome}
                                </option>
                            ))}
                        </select>

                    </article>

                    <article className={styles.containerSelect}>

                        <select className={styles.select} name="unidadeMedida" id="unidadeMedida" value={produto.unidadeMedidaId} onChange={(e) => setProduto({ ...produto, unidadeMedidaId: e.target.value })}>
                            <option value="">Selecione uma unidade de medida</option>
                            {unidades.map((unidade) => (
                                <option key={unidade.id} value={unidade.id?.toString()}>
                                    {unidade.sigla}
                                </option>
                            ))}
                        </select>

                    </article>

                    <input className={inputStyles.input} type="number" name="quantidade" id="quantidade" placeholder="Digite a quantidade do produto" value={produto.quantidadeAtual?.toString()} onChange={(e) => setProduto({ ...produto, quantidadeAtual: Number(e.target.value) })} />

                    <article className={styles.containerSelect}>

                        <select className={styles.select} name="habilitado" id="habilitado" value={produto.habilitado.toString()} onChange={(e) => setProduto({ ...produto, habilitado: e.target.value === "true" ? true : e.target.value === "false" ? false : produto.habilitado })}>
                            <option value="">Selecione o estado do produto</option>
                            <option value="true">Habilitado</option>
                            <option value="false">Desabilitado</option>
                        </select>

                    </article>

                    <article className={buttonStyles.containerBotao}>

                        <button className={buttonStyles.botaoSalvar}>Salvar</button>
                        <button onClick={() => produto.id != null ? DeletarProduto(produto.id) : null} className={buttonStyles.botaoExcluir}>Excluir</button>
                        <button onClick={() => router.push("/telas/produto/pesquisa")} className={buttonStyles.botaoVoltar}>Voltar</button>

                    </article>

                </section>

            </section>
        </>
    );
}
