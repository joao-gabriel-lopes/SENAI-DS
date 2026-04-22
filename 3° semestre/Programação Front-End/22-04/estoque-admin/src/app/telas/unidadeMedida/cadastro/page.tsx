'use client'
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function CadastroUnidadesMedida() {
  const router = useRouter();

  return (
    <>
      <section className={styles.container}>

        <h1>Cadastro de unidade de medida</h1>

        <input className={inputStyles.input} type="text" name="sigla" id="sigla" placeholder="Digite a sigla da unidade de medida" />

        <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição da unidade de medida"></textarea>

        <article className={styles.containerSelect}>

          <label className={styles.label} htmlFor="fracionavel">A unidade de medida é: </label>
          <select className={styles.select} name="fracionavel" id="fracionavel">
            <option value="true">Fracionável</option>
            <option value="false">Não fracionável</option>
          </select>

        </article>

        <article className={buttonStyles.containerBotao}>

          <button className={buttonStyles.botaoSalvar}>Salvar</button>
          <button className={buttonStyles.botaoExcluir}>Excluir</button>
          <button onClick={() => router.push("/telas/unidadeMedida/lista")} className={buttonStyles.botaoVoltar}>Voltar</button>
        
        </article>
        
      </section>
    </>
  );
}
