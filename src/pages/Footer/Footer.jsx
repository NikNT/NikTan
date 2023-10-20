import styles from "./Footer.module.css";
import link from "../../assets/link.png";
import avatar from "../../assets/avatar-2.svg";
import Links from "../../components/Links/Links";
import FooterForm from "../../components/FooterForm/FooterForm";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <figure>
          <img src={avatar} alt="Avatar" />
        </figure>
        <div className={styles.message}>
          <p>
            I believe in the power of continuous improvement, and your feedback
            is invaluable in helping me grow as a developer.
          </p>
          <p>
            Whether you're interested in collaborating on a project, have a
            question about my work, or just want to connect, don't hesitate to
            reach out.
          </p>
          <p>
            Thanks for scrolling through my portfolio. I really appreciate it.
            If you liked something, do not forget to message me about it. If you
            did not, I would love to have any suggestion.
          </p>
          <p>Send a message to connect with me!</p>
        </div>
        <FooterForm />
      </div>
      <div className={styles.connect}>
        <p>Connect with Me</p>
        <img src={link} alt="Link" />
      </div>
      <Links />
      <div className={styles.end}>
        <span>Nikhil Tanwar</span>
      </div>
    </footer>
  );
};

export default Footer;
