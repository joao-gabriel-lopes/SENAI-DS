import styles from "./page.module.css";
import cards from "../../card.module.css"

export default function ListaCategorias() {
  return (
    <>
      <div className={cards.container}>
        <div className={cards.card}>Liquidificadores</div>
        <div className={cards.card}>Airfriers</div>
        <div className={cards.card}>Pratos</div>
        <div className={cards.card}>Copos</div>
        <div className={cards.card}>Raladores de queijo</div>
        <div className={cards.card}>Furadores de coco</div>
        <div className={cards.card}>Saleiros</div>
        <div className={cards.card}>Espremedores de alho</div>
        <div className={cards.card}>Afiadores de faca</div>
        <div className={cards.card}>Escorredores de macarrão</div>
      </div>
    </>
  );
}
