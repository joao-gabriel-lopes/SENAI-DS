'use client'
import styles from "./page.module.css";
import cardStyles from "../../card.module.css"
import { useRouter } from "next/navigation";

export default function PesquisaProdutos() {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.titulo}>Pesquisa de produtos</h2>

      <section className={styles.containerPesquisa}>

        <input className={styles.inputPesquisa} type="text" name="nome" id="nome" placeholder="Digite o nome do produto" />

        <input className={styles.inputPesquisa} type="number" name="quantidade" id="quantidade" placeholder="Digite a quantidade mínima" />

        <select className={styles.selectPesquisa} name="categoria" id="categoria">
          <option value="">Selecione uma categoria</option>
          <option value="">Liquidificadores</option>
          <option value="">Airfriers</option>
          <option value="">Furadores de coco</option>
          <option value="">Pratos</option>
          <option value="">Copos</option>
        </select>

        <select className={styles.selectPesquisa} name="unidadeMedida" id="unidadeMedida">
          <option value="">Selecione uma unidade de medida</option>
          <option value="">Quilograma</option>
          <option value="">Metro</option>
          <option value="">Litro</option>
          <option value="">Segundo</option>
          <option value="">Newton</option>
        </select>

        <select className={styles.selectPesquisa} name="habilitado" id="habilitado">
          <option value="true">Habilitado</option>
          <option value="false">Desabilitado</option>
        </select>

        <button className={styles.botaoEnviar}>Pesquisar</button>

      </section>

      <section className={cardStyles.containerCardProduto}>

        <div className={cardStyles.cardProdutoTitulo}>
          <p className={cardStyles.cardCategoria}>Categoria:</p>
          <p className={cardStyles.cardNome}>Nome:</p>
          <p className={cardStyles.cardQuantidade}>Quantidade:</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Liquidificador</p>
          <p className={cardStyles.cardNome}>Liquidificador Montreal</p>
          <p className={cardStyles.cardQuantidade}>8</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Ventilador</p>
          <p className={cardStyles.cardNome}>Ventilador Polishop</p>
          <p className={cardStyles.cardQuantidade}>19</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Máquina de lavar</p>
          <p className={cardStyles.cardNome}>Máquina de lavar Eletrolux</p>
          <p className={cardStyles.cardQuantidade}>78</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Geladeira</p>
          <p className={cardStyles.cardNome}>Geladeira Brastemp</p>
          <p className={cardStyles.cardQuantidade}>89</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Airfryer</p>
          <p className={cardStyles.cardNome}>Airfryer Mondial</p>
          <p className={cardStyles.cardQuantidade}>46</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Batedeira</p>
          <p className={cardStyles.cardNome}>Batedeira Mondial</p>
          <p className={cardStyles.cardQuantidade}>40</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Forno-microondas</p>
          <p className={cardStyles.cardNome}>Forno-microondas Brastemp</p>
          <p className={cardStyles.cardQuantidade}>36</p>
        </div>

        <div className={cardStyles.cardProduto}>
          <p className={cardStyles.cardCategoria}>Máquina de lavar e secar roupa</p>
          <p className={cardStyles.cardNome}>Máquina de lavar e secar roupa Samsung</p>
          <p className={cardStyles.cardQuantidade}>35</p>
        </div>

        <div onClick={() => router.push("/telas/produto/cadastro")} className={cardStyles.cardProdutoAdicionar}>
          <p>+</p>
        </div>

      </section>

    </>
  );
}
