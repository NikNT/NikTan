import { firestore } from "../../firebase";

export const addMessageToFirestore = (
  name,
  email,
  message,
  setName,
  setEmail,
  setMessage,
  successNotification,
  onClose
) => {
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
      successNotification();
      onClose();
    })
    .catch((error) => {
      console.error("Error submitting form data:", error);
    });
};
