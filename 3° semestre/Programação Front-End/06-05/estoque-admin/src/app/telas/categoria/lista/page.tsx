'use client'
import styles from "./page.module.css";
import cards from "../../card.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ICategoria from "@/app/interfaces/ICategoria";
import { ListarCategorias } from "@/app/api";

export default function ListaCategorias() {
  const router = useRouter();

  const [categorias, setCategorias] = useState<ICategoria[]>([])

  useEffect(() => {
    const conteudo = async () => {
      const data = await ListarCategorias();
      setCategorias(data);
    };
    conteudo();
  }, []);

  return (
    <>
      <h2 className={styles.titulo}>Lista de categorias</h2>

      <div className={cards.container}>

        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.cardCriar}>+</div>
        {
          categorias.map(categoria => (
            <div key={categoria.id?.toString()} onClick={() => router.push(`/telas/categoria/cadastro?id=${categoria.id}`)} className={cards.card}>{categoria.nome}</div>
          ))
        }

      </div>
    </>
  );
}
