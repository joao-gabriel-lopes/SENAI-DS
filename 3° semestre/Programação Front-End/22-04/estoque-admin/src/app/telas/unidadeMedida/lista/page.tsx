'use client'
import styles from "./page.module.css";
import cards from "../../card.module.css"
import { useRouter } from "next/navigation";

export default function ListaUnidadesMedida() {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.titulo}>Lista de unidades de medida</h2>

      <div className={cards.container}>

        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.cardCriar}>+</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Newton (N)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Quilograma (KG)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Litro (L)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Ampère (A)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Volt (V)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Watts (W)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Segundo (S)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Coulomb (C)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Megaparsec (Mpc)</div>
        <div onClick={() => router.push("/telas/unidadeMedida/cadastro")} className={cards.card}>Kelvin (K)</div>
        
      </div>
    </>
  );
}
