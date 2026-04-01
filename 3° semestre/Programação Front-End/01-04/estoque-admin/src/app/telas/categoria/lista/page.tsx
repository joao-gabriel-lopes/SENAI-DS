'use client'
import styles from "./page.module.css";
import cards from "../../card.module.css"
import { useRouter } from "next/navigation";

export default function ListaCategorias() {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.titulo}>Lista de categorias</h2>
      <div className={cards.container}>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.cardCriar}>+</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Liquidificadores</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Airfriers</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Pratos</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Copos</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Raladores de queijo</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Furadores de coco</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Saleiros</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Espremedores de alho</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Afiadores de faca</div>
        <div onClick={() => router.push("/telas/categoria/cadastro")} className={cards.card}>Escorredores de macarrão</div>
      </div>
    </>
  );
}
