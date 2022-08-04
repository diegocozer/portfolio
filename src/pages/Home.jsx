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
          <p>e eu sou  desenvolvedor web</p>
        </h1>
      </div>
      <div className={styles.container_foto}>
        <div className={styles.moldura}>
          <img src="../foto.jpeg" alt="" className={styles.foto} />
        </div>
      </div>
    </article>
  );
}
