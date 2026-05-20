'use client'
import styles from "./page.module.css";
import cardStyles from "../../card.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ListarCategorias, ListarProdutos, ListarProdutosFiltrados, ListarUnidadesMedida } from "@/app/api";
import IProduto from "@/app/interfaces/iProduto";
import IFiltro from "@/app/interfaces/iFiltro";
import IUnidadeMedida from "@/app/interfaces/iUnidadeMedida";
import ICategoria from "@/app/interfaces/iCategoria";

export default function PesquisaProdutos() {
  const router = useRouter();

  const [produtos, setProdutos] = useState<IProduto[]>([])
  const [unidades, setUnidades] = useState<IUnidadeMedida[]>([])
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  const [filtro, setFiltro] = useState<IFiltro>({
    nome: null,
    quantidadeMinima: null,
    categoriaProdutoId: null,
    unidadeMedidaId: null,
    habilitado: null
  })

  useEffect(() => {
    const conteudo = async () => {
      const produtos = await ListarProdutos();
      setProdutos(produtos);
      const unidades = await ListarUnidadesMedida();
      setUnidades(unidades);
      const categorias = await ListarCategorias();
      setCategorias(categorias);
    };
    conteudo();
  }, []);

  return (
    <>
      <h2 className={styles.titulo}>Pesquisa de produtos</h2>

      <section className={styles.containerPesquisa}>

        <input className={styles.inputPesquisa} type="text" name="nome" id="nome" placeholder="Digite o nome do produto" onChange={(e) => setFiltro({...filtro, nome: e.target.value})}/>

        <input className={styles.inputPesquisa} type="number" name="quantidade" id="quantidade" placeholder="Digite a quantidade mínima" onChange={(e) => setFiltro({...filtro, quantidadeMinima: Number(e.target.value)})}/>

        <select className={styles.selectPesquisa} name="categoria" id="categoria" onChange={(e) => setFiltro({...filtro, categoriaProdutoId: e.target.value})}>
          <option value="">Selecione uma categoria</option>
          {
            categorias.map(categoria => (
              <option key={categoria.id?.toString()} value={categoria.id?.toString()}>{categoria.nome}</option>
            ))
          }
        </select>

        <select className={styles.selectPesquisa} name="unidadeMedida" id="unidadeMedida" onChange={(e) => setFiltro({...filtro, unidadeMedidaId: e.target.value})}>
          <option value="">Selecione uma unidade de medida</option>
          {
            unidades.map(unidade => (
              <option key={unidade.id?.toString()} value={unidade.id?.toString()}>{unidade.descricao}</option>
            ))
          }
        </select>

        <select className={styles.selectPesquisa} name="habilitado" id="habilitado" onChange={(e) => setFiltro({...filtro, habilitado: e.target.value === "true" ? true : e.target.value === "false" ? false : null})}>
          <option value="">Seleione um estado</option>
          <option value="true">Habilitado</option>
          <option value="false">Desabilitado</option>
        </select>

        <button onClick={async () => setProdutos(await ListarProdutosFiltrados(filtro))} className={styles.botaoEnviar}>Pesquisar</button>

      </section>

      <section className={cardStyles.containerCardProduto}>

        <div className={cardStyles.cardProdutoTitulo}>
          <p className={cardStyles.cardCategoria}>Categoria:</p>
          <p className={cardStyles.cardNome}>Nome:</p>
          <p className={cardStyles.cardQuantidade}>Quantidade:</p>
        </div>

        {
          produtos.map(produto => (
            <div key={produto.id?.toString()} onClick={() => router.push(`/telas/produto/cadastro?id=${produto.id}`)} className={cardStyles.cardProduto}>
              <p className={cardStyles.cardCategoria}>{produto.nome}</p>
              <p className={cardStyles.cardNome}>{produto.descricao}</p>
              <p className={cardStyles.cardQuantidade}>{produto.quantidadeAtual.toFixed()}</p>
            </div>
          ))
        }

        <div onClick={() => router.push("/telas/produto/cadastro")} className={cardStyles.cardProdutoAdicionar}>
          <p>+</p>
        </div>

      </section>

    </>
  );
}
