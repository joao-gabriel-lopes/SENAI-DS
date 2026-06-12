'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import IAluno from "./interfaces/IAluno";
import { ListarAlunos, ListarAlunosFiltrados } from "./api";
import IFiltro from "./interfaces/IFiltro";

export default function Index() {
  const [alunos, setAlunos] = useState<IAluno[]>([])
  const [filtro, setFiltro] = useState<IFiltro>({nome: "", sexo: ""})

  async function AtualizarListaAlunos(filtro: IFiltro){
      setAlunos(await ListarAlunosFiltrados(filtro))
  }

  useEffect(() => {
    const conteudo = async () => {
      const alunos = await ListarAlunos();
      setAlunos(alunos);
    };
    conteudo();
  }, []);

  return (
    <>
      <main className={styles.conteudoPrincipal}>

        <section className={styles.containerPesquisa}>

          <select name="genero" id="genero" className={styles.conteudoSelect} onChange={(e) => setFiltro({...filtro, sexo: e.target.value})}>
            <option value="">Todos</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>

          <input type="text" name="nome" id="nome" className={styles.conteudoInput} placeholder="Digite o nome do estudante" onChange={(e) => setFiltro({...filtro, nome: e.target.value})}/>

          <button className={styles.conteudoBotao} onClick={() => AtualizarListaAlunos(filtro)}>🔎</button>

        </section>

        <section className={styles.containerTabela}>

          <table className={styles.conteudoTabela}>

            <thead>

              <tr className={styles.conteudoTabelaTituloLinha}>
                <td className={styles.conteudoTabelaTituloColuna}>Nome</td>
                <td className={styles.conteudoTabelaTituloColuna}>Idade</td>
                <td className={styles.conteudoTabelaTituloColuna}>Gênero</td>
              </tr>

            </thead>

            <tbody>

              {
                alunos.map(aluno => (
                  <tr key={aluno.id.toString()}className={styles.conteudoTabelaLinha}>
                    <td className={styles.conteudoTabelaColuna}>{aluno.nome}</td>
                    <td className={styles.conteudoTabelaColuna}>{aluno.idade}</td>
                    <td className={styles.conteudoTabelaColuna}>{aluno.sexo}</td>
                  </tr>
                ))
              }

            </tbody>

          </table>

        </section>

      </main>
    </>
  );
}
