import styles from "./NavBar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";

export default function navBar() {
  return (
    <header className={styles.container}>
      <a href="/" className={styles.logo}>
        <img
          className={styles.logo_i}
          src="logo.png"
          alt=""
          style={{ width: "50px" }}
        />
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
        <a
          href="https://drive.google.com/file/d/1wkk_gmpa2LVA4OUvMRv5UVpJs5sEmNMh/view"
          target="_blank"
        >
          <FiDownloadCloud />
        </a>
      </nav>
    </header>
  );
}
