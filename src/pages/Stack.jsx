import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <main id='tech' className={styles.container}>
      <h1>Minhas Tech Stack</h1>
      <p>Tecnologias que eu utilizo</p>
      <div className={styles.tech}>
        <img src="HTML.svg" alt="" />
        <img src="CSS.svg" alt="" />
        <img src="JS.svg" alt="" />
        <img src="GIT.svg" alt="" />
        <img src="BOOTSTRAP.svg" alt="" />
        <img src="REACT.svg" alt="" />
        <img className={styles.python}  src="python.svg" alt="" />
        <img className={styles.flutter} src="flutter.svg" alt="" />
      </div>
    </main>
  );
}
