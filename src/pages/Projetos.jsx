import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <section id="projeto"  className={styles.container}>
      <h1 >Projetos</h1>
      <p>Meu projetos desenvolvidos</p>
      <div className={styles.container_conteudo}>
        <div className={styles.conteudo}>
          <div className={styles.imagem}>
            <p>EM BREVE</p>
          </div>{" "}
          <div className={styles.fundo_texto}>
              <h5>Descrição</h5>
            <div className={styles.fundo_descricao}>
            <p className={styles.descricao}>Linguagens usadas</p>
            </div>
          </div>
        </div>
        <div className={styles.conteudo}>
          <div className={styles.imagem}>
            <p>EM BREVE</p>
          </div>{" "}
          <div className={styles.fundo_texto}>
              <h5>Descrição</h5>
            <div className={styles.fundo_descricao}>
            <p className={styles.descricao}>Linguagens usadas</p>
            </div>
          </div>
        </div>
        <div className={styles.conteudo}>
          <div className={styles.imagem}>
            <p>EM BREVE</p>
          </div>{" "}
          <div className={styles.fundo_texto}>
              <h5>Descrição</h5>
            <div className={styles.fundo_descricao}>
            <p className={styles.descricao}>Linguagens usadas</p>
            </div>
          </div>
        </div>
        <div className={styles.conteudo}>
          <div className={styles.imagem}>
            <p>EM BREVE</p>
          </div>{" "}
          <div className={styles.fundo_texto}>
              <h5>Descrição</h5>
            <div className={styles.fundo_descricao}>
            <p className={styles.descricao}>Linguagens usadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
