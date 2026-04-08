'use client'
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function CadastroCategoria() {
  const router = useRouter();

  return (
    <>
      <section className={styles.container}>
        <h1>Cadastro de categoria</h1>
        <input className={inputStyles.input} type="text" name="nome" id="nome" placeholder="Digite o nome da categoria" />
        <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição da categoria"></textarea>

        <article className={buttonStyles.containerBotao}>
          <button className={buttonStyles.botaoSalvar}>Salvar</button>
          <button className={buttonStyles.botaoExcluir}>Excluir</button>
          <button onClick={() => router.push("/telas/categoria/lista")} className={buttonStyles.botaoVoltar}>Voltar</button>
        </article>
      </section>
    </>
  );
}
