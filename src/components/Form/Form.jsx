import { useState } from "react";
import styles from "./Form.module.css";
import { toast } from "react-toastify";
import { successNotification } from "../../utils/Notifications/Notifications";
import { checkInput } from "../../utils/Validation/Validation";
import PropTypes from "prop-types";
import { addMessageToFirestore } from "../../utils/Firestore/Firestore";

const Form = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    onClose();
    document.body.style.overflow = "auto";
  };

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
      successNotification,
      onClose
    );
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Let's Connect</h1>
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
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength="500"
        />
      </div>
      {message.length > 0 && (
        <div className={styles.character_count}>
          {500 - message.length} characters remaining
        </div>
      )}
      <div className={styles.form_buttons}>
        <button type="submit">Send</button>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Form;
