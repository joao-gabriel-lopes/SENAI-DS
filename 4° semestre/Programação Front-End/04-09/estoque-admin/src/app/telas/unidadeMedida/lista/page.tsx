'use client'
import styles from "./page.module.css";
import cards from "../../card.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import IUnidadeMedida from "@/app/interfaces/iUnidadeMedida";
import { ListarUnidadesMedida } from "@/app/api";

export default function ListaUnidadesMedida() {
  const router = useRouter();

  const [unidades, setUnidades] = useState<IUnidadeMedida[]>([])

  useEffect(() => {
    const conteudo = async () => {
      const data = await ListarUnidadesMedida();
      setUnidades(data);
    };
    conteudo();
  }, []);

  return (
    <>
      <h2 className={styles.titulo}>Lista de unidades de medida</h2>

      <div className={cards.container}>

        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.cardCriar}>+</div>

        {
          unidades.map(unidade => (
            <div key={unidade.id?.toString()} onClick={() => router.push(`/telas/unidadeMedida/cadastro?id=${unidade.id}`)} className={cards.card}>{`${unidade.descricao} (${unidade.sigla})`}</div>
          ))
        }
      </div>
    </>
  );
}
