import styles from "./Button.module.css";
import hello from "../../assets/hello.png";
const Button = () => {
  return (
    <button className={styles.topButton}>
      Say Hi <img src={hello} alt="Hello" className={styles.hello} />
    </button>
  );
};

export default Button;
