import { useState, useEffect } from "react";
import styles from "./Test.module.css";

const sections = [
  {
    backgroundText: "Me",
    cardContent: (
      <>
        <p>Hi</p>
        <p>Im Nikhil</p>
        <p>I love ReactJS, XBox Series S, and Pizza 🍕</p>
      </>
    ),
  },
  {
    backgroundText: "Tech Stack",
    cardContent: (
      <>
        <p>HTML5 CSS3 JavaScript TypeScript</p>
        <p>ReactJS NextJS</p>
        <p>Bootstrap TailwindCSS SASS</p>
      </>
    ),
  },
  {
    backgroundText: "Experience",
    cardContent: (
      <>
        <p>Worked in a budding Ed-Tech Company in Punjab, India</p>
        <p>
          Collaborated with UI/UX Designers, Back End Developers to develop and
          maintain mission critical business systems
        </p>
        <p>
          Gained first-hand professional experience related to Web Design and
          Development.
        </p>
      </>
    ),
  },
  {
    backgroundText: "Fav Quote",
    cardContent: (
      <>
        <p>
          One last drink and the bottle breaks, returning us to the dust from
          whence we came
        </p>
      </>
    ),
  },
];

const Test = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.section_container}>
        <div className={`${styles.background_text} ${styles.fade}`}>
          {sections[currentSectionIndex].backgroundText}
        </div>
        <div className={`${styles.card} ${styles.fade}`}>
          {sections[currentSectionIndex].cardContent}
        </div>
      </div>
    </div>
  );
};

export default Test;
