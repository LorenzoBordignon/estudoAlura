import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha-foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>
        <p className={styles.paragrafo}>
          Bem vindo(a) ao meu espaço, me chamo Lorenzo Bordignon e sou
          desenvolvedor de software. Espero que curta meu projeto feito com o
          conhecimento adquirido na Alura.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Lorenzo Bordignon no espelho"
        />
      </div>
    </div>
  );
}
