import { FaWhatsapp } from "react-icons/fa";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <article id="menu" className={styles.container}>
      <div className={styles.conteudo}>
        <h1>
          <p> Olá 👋,</p>
          <p>
            Meu nome é <p className={styles.degrade}>Diego Cozer Farias</p>
          </p>
          <p>e eu sou desenvolvedor web</p>
        </h1>
        <div className={styles.container_foto}>
          <div className={styles.moldura}>
            <img src="../foto.jpeg" alt="" className={styles.foto} />
          </div>
        </div>
        <a
          href="https://wa.me/5547984274224?text=Olá, cheguei até aqui pelo seu site!"
          target="_blank"
          className={styles.wpp}
        >
          <img src="whatsapp.png" alt="" />
        </a>
      </div>
    </article>
  );
}
