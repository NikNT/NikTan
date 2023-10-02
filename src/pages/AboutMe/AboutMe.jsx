import styles from "./AboutMe.module.css";
import avatar from "../../assets/avatar.svg";
const AboutMe = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>about me</span>
        </div>
        <div className={styles.content}>
          <figure className={styles.avatar}>
            <img src={avatar} alt="Avatar" />
          </figure>
          <div className={styles.info}>
            <div>
              <strong>Me</strong>
              <p>Hi</p>
              <p>Im Nikhil</p>
              <p>I love ReactJS, XBox Series S, and Pizza 🍕</p>
            </div>
            <br />
            <div>
              <p>
                <strong> My Tech Stack </strong>
              </p>
              <p>
                HTML5 CSS3 JavaScript TypeScript <br />
                ReactJS NextJS <br /> Bootstrap TailwindCSS SASS
              </p>
            </div>
            <br />
            <div>
              <p>
                <strong>My Experience</strong>
                <p>
                  Worked in a budding Ed-Tech Company in Punjab, India <br />
                  Collaborated with UI/UX Designers, Back End Developers to
                  develop and maintain mission critical business systems <br />
                  Gained first-hand professional experience related to Web
                  Design and Development.
                </p>
              </p>
            </div>
            <br />
            <div>
              <p>
                <strong>Fav Quote</strong>
                <p>
                  <em>
                    One last drink and the bottle breaks, returning us to the
                    dust from whence we came
                  </em>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
