import { useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import styles from "./LandingPage.module.css";
import { motion } from "framer-motion";

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
      </motion.div>
    </>
  );
};

export default LandingPage;
