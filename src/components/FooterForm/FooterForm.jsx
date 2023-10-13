import { useState } from "react";
import styles from "./FooterForm.module.css";
import { checkInput } from "../../utils/Validation/Validation";
import { toast } from "react-toastify";
import { addMessageToFirestore } from "../../utils/Firestore/Firestore";
import { successNotification } from "../../utils/Notifications/Notifications";
import send from "../../assets/send.png";

const FooterForm = () => {
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
  );
};

export default FooterForm;
