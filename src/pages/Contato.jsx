import styles from "./Contato.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="contatos" className={styles.container}>
      <div className={styles.logo}>
        <img src="logo.png" alt="logo" style={{ width: "50px" }} />
      </div>

      <i style={{ color: "green" }} className={styles.wpp}>
        <FaWhatsapp />{" "}
      </i>
      <p>(47) 9 8427-4224</p>
      <p>
        <i>
          <AiOutlineMail />
        </i>
        diego.cozer16@gmail.com
      </p>
    </section>
  );
}
