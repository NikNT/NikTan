import styles from "./Card.module.css";
import sample from "../../assets/sample.svg";
import github from "../../assets/github.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.svg";

const Card = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.project_image}>
        <img src={sample} alt="Sample Image" />
      </div>
      <div className={styles.project_content}>
        <h3 className={styles.project_title}>Project Title</h3>
        <p className={styles.project_description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          officia magnam similique modi a illo neque non dolor nulla aspernatur,
          dignissimos, odit, quod eum asperiores fugit temporibus! Laudantium,
          rem. Quo, expedita quae iusto optio autem minus repellendus provident
          tempora corporis, ipsum nobis consequatur maiores perferendis
          officiis. Temporibus magnam soluta quia.
        </p>
        <div className={styles.technologies}>
          <div className={styles.technologies_list}>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
          </div>
        </div>
        <button className={styles.project_button}>
          <img src={github} alt="Github" /> View Code
        </button>
      </div>
    </div>
  );
};

export default Card;
