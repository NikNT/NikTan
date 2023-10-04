import { useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import styles from "./LandingPage.module.css";
import { motion } from "framer-motion";
import github from "../../assets/github.png";
import linkedin from "../../assets/linked.png";
import resume from "../../assets/resume.png";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };
  const closeForm = () => {
    setShowForm(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.0,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={styles.button} onClick={openForm}>
          <Button />
        </div>
        {showForm && (
          <div className={styles.form}>
            <Form onClose={closeForm} />
          </div>
        )}
        <h1 className={styles.name}>Nikhil Tanwar</h1>
        <span className={styles.title}>Front End Dev</span>
        <div className={styles.links}>
          <span>
            <a href="https://www.linkedin.com/in/nikhil-tanwar-76b247128/">
              <img src={linkedin} alt="" className={styles.link} />
            </a>
          </span>
          <span>
            <a href="https://github.com/NikNT">
              <img src={github} alt="GitHub" className={styles.link} />
            </a>
          </span>
          <span>
            <a href="https://drive.google.com/file/d/1jQQNu0ypywifmuxGpnef0c7biaQYsNS7/view">
              <img src={resume} alt="Resume" className={styles.link} />
            </a>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;
