import styles from "./NavBar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function navBar() {
  return (
    <header className={styles.container}>
      <a href="/" className={styles.logo}>
        <img src="logo.png" alt="" style={{ width: "50px" }} />
      </a>
      <nav className={styles.navbar}>
        <a href="#menu">Home</a>
        <a href="#tech">Tech Stack</a>
        <a href="#projeto">Projects</a>
        <a
          href="https://github.com/diegocozer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/diego-cozer-farias/ "
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </nav>
    </header>
  );
}
