import styles from "./page.module.css";

export default function PesquisaProdutos() {
  return (
    <>
      <section className={styles.containerPesquisa}>
        <select name="categoria" id="categoria">
          <option value="">Liquidificadores</option>
          <option value="">Airfriers</option>
          <option value="">Furadores de coco</option>
          <option value="">Pratos</option>
          <option value="">Copos</option>
        </select>

        
      </section>
    </>
  );
}
