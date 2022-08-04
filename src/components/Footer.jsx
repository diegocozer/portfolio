import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <nav className={styles.footer}>
        <a href="#menu">Home</a>
        <a href="#tech">Tech Stack</a>
        <a href="#projeto">Projects</a>
      </nav>
      <div className={styles.desenvolvido}>
        <p>
          Desenvolvido por <span className={styles.degrade}>Diego Cozer</span>
        </p>
      </div>
    </footer>
  );
}
