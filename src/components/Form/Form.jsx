import { useState } from "react";
import styles from "./Form.module.css";
import { firestore } from "../../firebase";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Form = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageRegex = /^[a-zA-Z0-9.,!?()\s]+$/;

  const handleClose = () => {
    onClose();
    document.body.style.overflow = "auto";
  };

  const notification = () => {
    toast.success("Your message has been sent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const emptyFieldsError = () => {
    toast.error("Please fill in all the fields!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      emptyFieldsError();
      return;
    }

    if (!nameRegex.test(name)) {
      toast.error("Enter First Name or Complete Name");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Enter valid email!");
      return;
    }

    if (!messageRegex.test(message) || message.length < 2) {
      toast.error("Enter a valid message");
      return;
    }

    firestore
      .collection("messages")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        notification();
        onClose();
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
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
          // pattern="^[A-Za-z ]+$"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
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
          pattern="^[a-zA-Z0-9.,!?()\s]+$"
          // required
        />
      </div>
      <div style={{ fontFamily: "Outfit" }}>
        {500 - message.length} characters remaining
      </div>
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
