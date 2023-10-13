import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github-nobg.png";
import linkedin from "../../assets/linkedin.png";
import styles from "./Links.module.css";

const Links = () => {
  return (
    <div className={styles.social_icons}>
      <a href="https://www.youtube.com/@frontendmechanix/videos" target="blank">
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
  );
};

export default Links;
