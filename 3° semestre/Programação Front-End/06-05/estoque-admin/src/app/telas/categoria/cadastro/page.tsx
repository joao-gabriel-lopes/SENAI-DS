'use client'
import { useEffect, useState } from "react";
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import ICategoria from "@/app/interfaces/ICategoria";
import { DeletarCategoria, ListarCategoriaPorId } from "@/app/api";

export default function CadastroCategoria() {
  const router = useRouter();

  const parametros = useSearchParams()
  const id = parametros.get("id") ?? ""

  const [categoria, setCategoria] = useState<ICategoria>({ id: null, nome: '', descricao: '' })

  if (id != "") {
    useEffect(() => {
      const conteudo = async () => {
        const data = await ListarCategoriaPorId(id);
        setCategoria(data);
      };
      conteudo();
    }, []);
  }

  return (
    <>
      <section className={styles.container}>

        <h1>Cadastro de categoria</h1>

        <input className={inputStyles.input} type="text" name="nome" id="nome" placeholder="Digite o nome da categoria" value={categoria.nome} onChange={(e) => setCategoria({...categoria, nome: e.target.value})} />

        <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição da categoria" value={categoria.descricao ?? ''} onChange={(e) => setCategoria({...categoria, descricao: e.target.value})}></textarea>

        <article className={buttonStyles.containerBotao}>
          <button className={buttonStyles.botaoSalvar}>Salvar</button>
          <button onClick={() => categoria.id != null ? DeletarCategoria(categoria.id) : null} className={buttonStyles.botaoExcluir}>Excluir</button>
          <button onClick={() => router.push("/telas/categoria/lista")} className={buttonStyles.botaoVoltar}>Voltar</button>
        </article>

      </section>
    </>
  );
}
