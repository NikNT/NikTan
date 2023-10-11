// import React from "react";
import styles from "./Test.module.css";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github-nobg.png";
import linkedin from "../../assets/linkedin.png";
import link from "../../assets/link.png";

const Test = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.connect}>
        <p>Connect with Me</p>
        <img src={link} alt="Link" />
      </div>
      <div className={styles.social_icons}>
        <a
          href="https://www.youtube.com/@frontendmechanix/videos"
          target="blank"
        >
          <img src={youtube} alt="YouTube" className={styles.social_icon} />
        </a>
        <a href="https://twitter.com/FE_Mechanix" target="blank">
          <img src={twitter} alt="Twitter" className={styles.social_icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-tanwar-76b247128/"
          target="blank"
        >
          <img src={linkedin} alt="LinkedIn" className={styles.social_icon} />
        </a>
        <a href="https://github.com/NikNT" target="blank">
          <img src={github} alt="GitHub" className={styles.social_icon} />
        </a>
      </div>
    </footer>
  );
};

export default Test;
