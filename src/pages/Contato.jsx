import styles from "./Contato.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="contatos" className={styles.container}>
      <div className={styles.logo}>
        <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      </div>
      <p >
        <i style={{ color: "green" }}>
          {" "}
          <FaWhatsapp />{" "}
        </i>
        (47) 9 8427-4224
      </p>
      <p>
        <i>
          <AiOutlineMail />
        </i>
        diego.cozer16@gmail.com
      </p>

      <div className={styles.redes}>
        <a
          href="https://github.com/diegocozer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/diego-cozer-farias/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
