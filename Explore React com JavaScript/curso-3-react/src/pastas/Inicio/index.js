import Banner from "componentes/Banner";
import styles from "./Inicio.module.csss";

export default function Inicio() {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}></ul>
    </main>
  );
}
