'use client'
import { useEffect, useState } from "react";
import buttonStyles from "../../button.module.css";
import inputStyles from "../../input.module.css";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import ICategoria from "@/app/interfaces/iCategoria";
import { AtualizarCategoria, DeletarCategoria, InserirCategoria, ListarCategoriaPorId } from "@/app/api";
import ICategoriaPost from "@/app/interfaces/iCategoriaPost";

export default function CadastroCategoria() {
  const router = useRouter();

  const parametros = useSearchParams()
  const id = parametros.get("id") ?? ""

  const [categoria, setCategoria] = useState<ICategoria>({ id: null, nome: '', descricao: '' })
  const [categoriaPost, setCategoriaPost] = useState<ICategoriaPost>({nome: "", descricao: ""})

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
      {
        id != "" ?

          <section className={styles.container}>

            <h1>Cadastro de categoria</h1>

            <input className={inputStyles.input} type="text" name="nome" id="nome" placeholder="Digite o nome da categoria" value={categoria.nome} onChange={(e) => setCategoria({ ...categoria, nome: e.target.value })} />

            <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição da categoria" value={categoria.descricao ?? ''} onChange={(e) => setCategoria({ ...categoria, descricao: e.target.value })}></textarea>

            <article className={buttonStyles.containerBotao}>
              <button onClick={() => AtualizarCategoria(categoria)} className={buttonStyles.botaoSalvar}>Salvar</button>
              <button onClick={() => categoria.id != null ? DeletarCategoria(categoria.id) : null} className={buttonStyles.botaoExcluir}>Excluir</button>
              <button onClick={() => router.push("/telas/categoria/lista")} className={buttonStyles.botaoVoltar}>Voltar</button>
            </article>

          </section>

          :

          <section className={styles.container}>

            <h1>Cadastro de categoria</h1>

            <input className={inputStyles.input} type="text" name="nome" id="nome" placeholder="Digite o nome da categoria" value={categoriaPost.nome} onChange={(e) => setCategoriaPost({ ...categoriaPost, nome: e.target.value })} />

            <textarea className={inputStyles.textarea} name="descricao" id="descricao" placeholder="Digite a descrição da categoria" value={categoriaPost.descricao ?? ''} onChange={(e) => setCategoriaPost({ ...categoriaPost, descricao: e.target.value })}></textarea>

            <article className={buttonStyles.containerBotao}>
              <button onClick={() => InserirCategoria(categoriaPost)} className={buttonStyles.botaoSalvar}>Salvar</button>
              <button onClick={() => router.push("/telas/categoria/lista")} className={buttonStyles.botaoVoltar}>Voltar</button>
            </article>

          </section>
      }
    </>
  );
}
