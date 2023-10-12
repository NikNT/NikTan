import styles from "./Footer.module.css";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github-nobg.png";
import linkedin from "../../assets/linkedin.png";
import link from "../../assets/link.png";
import avatar from "../../assets/avatar-2.svg";
import send from "../../assets/send.png";
import { useState } from "react";
import { checkInput } from "../../utils/Validation/Validation";
import { toast } from "react-toastify";
import { addMessageToFirestore } from "../../utils/Firestore/Firestore";
import { successNotification } from "../../utils/Notifications/Notifications";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = checkInput(name, email, message);
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    addMessageToFirestore(
      name,
      email,
      message,
      setName,
      setEmail,
      setMessage,
      successNotification
    );
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <figure>
          <img src={avatar} alt="Avatar" />
        </figure>
        <div className={styles.message}>
          <p>
            Thanks for scrolling through my portfolio. I really appreciate it.
            If you liked something, do not forget to message me about it. If you
            did not, I would love to have any suggestion.
            <br />
            <br />
            <p>Send a message to connect with me!</p>
          </p>
        </div>
        <form className={styles.footer_form} onSubmit={handleSubmit}>
          <p>Get in Touch?</p>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button>
            Send <img src={send} alt="Send" className={styles.send} />{" "}
          </button>
        </form>
      </div>
      <div className={styles.connect}>
        <p>Connect with Me</p>
        <img src={link} alt="Link" />
      </div>
      <div className={styles.social_icons}>
        <a
          href="https://www.youtube.com/@frontendmechanix/videos"
          target="blank"
        >
          <img src={youtube} alt="YouTube" className={styles.social_icon} />
        </a>
        <a href="https://twitter.com/FE_Mechanix" target="blank">
          <img src={twitter} alt="Twitter" className={styles.social_icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-tanwar-76b247128/"
          target="blank"
        >
          <img src={linkedin} alt="LinkedIn" className={styles.social_icon} />
        </a>
        <a href="https://github.com/NikNT" target="blank">
          <img src={github} alt="GitHub" className={styles.social_icon} />
        </a>
      </div>
      <div className={styles.end}>
        <span>Nikhil Tanwar</span>
      </div>
    </footer>
  );
};

export default Footer;
