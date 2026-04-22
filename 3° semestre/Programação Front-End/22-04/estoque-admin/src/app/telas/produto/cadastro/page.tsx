'use client'
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function CadastroProduto() {
    const router = useRouter();

    return (
        <>
            <section className={styles.container}>

                <section className={styles.containerCadastro}>

                    <h1>Cadastro de produto</h1>

                    <img className={styles.imagemProduto} src="https://images.tcdn.com.br/img/img_prod/1126610/caneca_de_ceramica_branca_arredondada_350_ml_2143_1_24945aeeda0058d832feae096a56ee43.png" alt="Imagem" />

                    <input className={inputStyles.fileInput} type="file" id="file" name="file"/>

                    <label htmlFor="file" className={inputStyles.labelFileInput}>Escolher imagem</label>

                    <input className={inputStyles.input} type="text" name="nome" id="nome" placeholder="Digite o nome do produto" />

                    <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição do produto"></textarea>

                    <article className={styles.containerSelect}>

                        <select className={styles.select} name="categoria" id="categoria">
                            <option value="">Selecione uma categoria</option>
                            <option value="">Liquidificadores</option>
                            <option value="">Airfriers</option>
                            <option value="">Pratos</option>
                            <option value="">Copos</option>
                            <option value="">Raladores de queijo</option>
                        </select>

                    </article>

                    <article className={styles.containerSelect}>

                        <select className={styles.select} name="unidadeMedida" id="unidadeMedida">
                            <option value="">Selecione uma unidade de medida</option>
                            <option value="">Quilograma</option>
                            <option value="">Litro</option>
                            <option value="">Metro</option>
                            <option value="">Segundo</option>
                            <option value="">Newton</option>
                        </select>

                    </article>

                    <input className={inputStyles.input} type="number" name="quantidade" id="quantidade" placeholder="Digite a quantidade do produto" />

                    <article className={styles.containerSelect}>

                        <select className={styles.select} name="unidadeMedida" id="unidadeMedida">
                            <option value="">Selecione o estado do produto</option>
                            <option value="true">Habilitado</option>
                            <option value="false">Desabilitado</option>
                        </select>

                    </article>

                    <article className={buttonStyles.containerBotao}>

                        <button className={buttonStyles.botaoSalvar}>Salvar</button>
                        <button className={buttonStyles.botaoExcluir}>Excluir</button>
                        <button onClick={() => router.push("/telas/produto/pesquisa")} className={buttonStyles.botaoVoltar}>Voltar</button>

                    </article>

                </section>

            </section>
        </>
    );
}
