import styles from "./page.module.css";
import cards from "../../card.module.css"

export default function ListaCategorias() {
  return (
    <>
      <div className={cards.container}>
        <div className={cards.card}>Newton (N)</div>
        <div className={cards.card}>Quilograma (KG)</div>
        <div className={cards.card}>Litro (L)</div>
        <div className={cards.card}>Ampère (A)</div>
        <div className={cards.card}>Volt (V)</div>
        <div className={cards.card}>Watts (W)</div>
        <div className={cards.card}>Segundo (S)</div>
        <div className={cards.card}>Coulomb (C)</div>
        <div className={cards.card}>Megaparsec (Mpc)</div>
        <div className={cards.card}>Kelvin (K)</div>
      </div>
    </>
  );
}
