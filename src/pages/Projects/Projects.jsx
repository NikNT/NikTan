import Card from "../../components/Card/Card";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="heading">
          <span>My projects</span>
        </div>
        <div className={styles.project_cards}>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Projects;
