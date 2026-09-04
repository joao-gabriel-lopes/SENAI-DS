'use client'
import IUnidadeMedida from "@/app/interfaces/iUnidadeMedida";
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AtualizarUnidadeMedida, DeletarUnidadeMedida, InserirUnidadeMedida, ListarUnidadesMedidaPorId } from "@/app/api";
import IUnidadeMedidaPost from "@/app/interfaces/iUnidadeMedidaPost";

export default function CadastroUnidadesMedida() {
  const router = useRouter();

  const parametros = useSearchParams()
  const id = parametros.get("id") ?? ""

  const [unidade, setUnidade] = useState<IUnidadeMedida>({ id: null, sigla: '', descricao: '', fracionavel: true })
  const [unidadePost, setUnidadePost] = useState<IUnidadeMedidaPost>({ sigla: '', descricao: '', fracionavel: true })

  if (id != "") {
    useEffect(() => {
      const conteudo = async () => {
        const data = await ListarUnidadesMedidaPorId(id);
        setUnidade(data);
      };
      conteudo();
    }, []);
  }

  return (
    <>
      {
        id != "" ?

          <section className={styles.container}>

            <h1>Cadastro de unidade de medida</h1>

            <input className={inputStyles.input} type="text" name="sigla" id="sigla" placeholder="Digite a sigla da unidade de medida" value={unidade?.sigla} onChange={(e) => { setUnidade({ ...unidade, sigla: e.target.value }) }} />

            <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição da unidade de medida" value={unidade?.descricao?.toString()} onChange={(e) => { setUnidade({ ...unidade, descricao: e.target.value }) }}></textarea>

            <article className={styles.containerSelect}>

              <label className={styles.label} htmlFor="fracionavel">A unidade de medida é: </label>
              <select className={styles.select} name="fracionavel" id="fracionavel" value={unidade?.fracionavel?.toString()} onChange={(e) => { setUnidade({ ...unidade, fracionavel: e.target.value === "true" ? true : e.target.value === "false" ? false : unidade.fracionavel }) }}>
                <option value="true">Fracionável</option>
                <option value="false">Não fracionável</option>
              </select>

            </article>

            <article className={buttonStyles.containerBotao}>

              <button onClick={() => AtualizarUnidadeMedida(unidade)} className={buttonStyles.botaoSalvar}>Salvar</button>
              <button onClick={() => unidade.id != null ? DeletarUnidadeMedida(unidade.id) : null} className={buttonStyles.botaoExcluir}>Excluir</button>
              <button onClick={() => router.push("/telas/unidadeMedida/lista")} className={buttonStyles.botaoVoltar}>Voltar</button>

            </article>

          </section>

          :

          <section className={styles.container}>

            <h1>Cadastro de unidade de medida</h1>

            <input className={inputStyles.input} type="text" name="sigla" id="sigla" placeholder="Digite a sigla da unidade de medida" value={unidadePost?.sigla} onChange={(e) => { setUnidadePost({ ...unidadePost, sigla: e.target.value }) }} />

            <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição da unidade de medida" value={unidadePost?.descricao?.toString()} onChange={(e) => { setUnidadePost({ ...unidadePost, descricao: e.target.value }) }}></textarea>

            <article className={styles.containerSelect}>

              <label className={styles.label} htmlFor="fracionavel">A unidade de medida é: </label>
              <select className={styles.select} name="fracionavel" id="fracionavel" value={unidadePost?.fracionavel?.toString()} onChange={(e) => { setUnidadePost({ ...unidadePost, fracionavel: e.target.value === "true" ? true : e.target.value === "false" ? false : unidadePost.fracionavel }) }}>
                <option value="true">Fracionável</option>
                <option value="false">Não fracionável</option>
              </select>

            </article>

            <article className={buttonStyles.containerBotao}>

              <button onClick={() => InserirUnidadeMedida(unidadePost)} className={buttonStyles.botaoSalvar}>Salvar</button>
              <button onClick={() => router.push("/telas/unidadeMedida/lista")} className={buttonStyles.botaoVoltar}>Voltar</button>

            </article>

          </section>
      }
    </>
  );
}
