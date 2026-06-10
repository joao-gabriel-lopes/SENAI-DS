'use client'
import { useEffect, useState } from "react";
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import IProduto from "@/app/interfaces/iProduto";
import { AtualizarProduto, AtualizarProdutoImagem, DeletarProduto, InserirProduto, ListarCategorias, ListarProdutosPorId, ListarUnidadesMedida } from "@/app/api";
import IUnidadeMedida from "@/app/interfaces/iUnidadeMedida";
import ICategoria from "@/app/interfaces/iCategoria";
import IPostProduto from "@/app/interfaces/iPostProduto";

export default function CadastroProduto() {
    const router = useRouter();

    const parametros = useSearchParams()
    const id = parametros.get("id") ?? ""

    const [produto, setProduto] = useState<IProduto>({ id: null, nome: '', descricao: '', categoriaProdutoId: "", unidadeMedidaId: "", quantidadeAtual: 0, habilitado: true, nomeArquivoFoto: null })
    const [produtoPost, setProdutoPost] = useState<IPostProduto>({ nome: '', descricao: '', categoriaProdutoId: "", unidadeMedidaId: "", quantidadeAtual: 0 })
    const [unidades, setUnidades] = useState<IUnidadeMedida[]>([])
    const [categorias, setCategorias] = useState<ICategoria[]>([])
    const [produtoImagem, setProdutoImagem] = useState<File>()

    const AtualizarImagemEvento = (e: any) => {
        const arquivo = e.target.files[0]

        if (arquivo) {
            setProdutoImagem(arquivo)
        }
    }

    const AtualizarTudo = async (produtoImagem: File, produto: IProduto) => {
        if (produto.id != null) {
            await AtualizarProdutoImagem(produto.id, produtoImagem)
            console.log("a")
        }
        await AtualizarProduto(produto)
    }

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
            {
                id != "" ?
                    <section className={styles.container}>

                        <section className={styles.containerCadastro}>

                            <h1>Cadastro de produto</h1>

                            {produto.nomeArquivoFoto && <img className={styles.imagemProduto} src={`http://apiestoque.runasp.net/imagens/${produto.nomeArquivoFoto}`} alt="Imagem" />}

                            <input className={inputStyles.fileInput} type="file" id="file" name="file" onChange={(e) => AtualizarImagemEvento(e)} />

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

                                <button onClick={() => produtoImagem == null ? AtualizarProduto(produto) : AtualizarTudo(produtoImagem, produto)} className={buttonStyles.botaoSalvar}>Salvar</button>
                                <button onClick={() => produto.id != null ? DeletarProduto(produto.id) : null} className={buttonStyles.botaoExcluir}>Excluir</button>
                                <button onClick={() => router.push("/telas/produto/pesquisa")} className={buttonStyles.botaoVoltar}>Voltar</button>

                            </article>

                        </section>

                    </section >

                    :

                    <section className={styles.container}>

                        <section className={styles.containerCadastro}>

                            <h1>Cadastro de produto</h1>

                            <input className={inputStyles.input} type="text" name="nome" id="nome" placeholder="Digite o nome do produto" value={produtoPost.nome} onChange={(e) => setProdutoPost({ ...produtoPost, nome: e.target.value })} />

                            <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição do produto" value={produtoPost.descricao?.toString()} onChange={(e) => setProdutoPost({ ...produtoPost, descricao: e.target.value })}></textarea>

                            <article className={styles.containerSelect}>

                                <select className={styles.select} name="categoria" id="categoria" value={produtoPost.categoriaProdutoId} onChange={(e) => setProdutoPost({ ...produtoPost, categoriaProdutoId: e.target.value })}>
                                    <option value="">Selecione uma categoria</option>
                                    {categorias.map((categoria) => (
                                        <option key={categoria.id} value={categoria.id?.toString()}>
                                            {categoria.nome}
                                        </option>
                                    ))}
                                </select>

                            </article>

                            <article className={styles.containerSelect}>

                                <select className={styles.select} name="unidadeMedida" id="unidadeMedida" value={produtoPost.unidadeMedidaId} onChange={(e) => setProdutoPost({ ...produtoPost, unidadeMedidaId: e.target.value })}>
                                    <option value="">Selecione uma unidade de medida</option>
                                    {unidades.map((unidade) => (
                                        <option key={unidade.id} value={unidade.id?.toString()}>
                                            {unidade.sigla}
                                        </option>
                                    ))}
                                </select>

                            </article>

                            <input className={inputStyles.input} type="number" name="quantidade" id="quantidade" placeholder="Digite a quantidade do produto" value={produtoPost.quantidadeAtual?.toString()} onChange={(e) => setProdutoPost({ ...produtoPost, quantidadeAtual: Number(e.target.value) })} />

                            <article className={buttonStyles.containerBotao}>

                                <button onClick={() => InserirProduto(produtoPost)} className={buttonStyles.botaoSalvar}>Salvar</button>
                                <button onClick={() => router.push("/telas/produto/pesquisa")} className={buttonStyles.botaoVoltar}>Voltar</button>

                            </article>

                        </section>

                    </section >
            }
        </>
    );
}
