const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[a-zA-Z0-9.,!?()\s]+$/;

export const checkInput = (name, email, message) => {
  if (name === "" || email === "" || message === "") {
    return "All fields are required.";
  }

  if (!nameRegex.test(name)) {
    return "Enter First Name or Complete Name";
  }

  if (!emailRegex.test(email)) {
    return "Enter valid email!";
  }

  if (!messageRegex.test(message) || message.length < 2) {
    return "Enter a valid message";
  }

  return null;
};
