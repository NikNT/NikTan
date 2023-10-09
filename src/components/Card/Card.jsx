import styles from "./Card.module.css";
import github from "../../assets/github.png";
import deploy from "../../assets/deploy.png";
import projects from "./projects.json";

const Card = () => {
  return projects.map((project) => (
    <>
      <div
        className={styles.card_container}
        style={{ borderTop: `3px solid ${project.border}` }}
      >
        <div className={styles.project_image}>
          <img src={project.image} alt="Sample Image" />
        </div>
        <div className={styles.project_content}>
          <h3 className={styles.project_title}>
            <strong>{project.title}</strong>
          </h3>
          <p className={styles.project_description}>{project.description}</p>
          <div className={styles.technologies}>
            <div className={styles.technologies_list}>
              {project.technologiesUsed.map((tech) => (
                <img src={tech.icon} alt={tech.name} key={project.id} />
              ))}
            </div>
          </div>
          <div className={styles.project_buttons}>
            <a href={project.link} target="blank">
              <button className={styles.project_button}>
                <img src={github} alt="Github" /> View Code
              </button>
            </a>
            {project.deployment && (
              <a href={project.deployment} target="blank">
                <button
                  className={`${styles.project_button} ${styles.project_deploy}`}
                >
                  <img src={deploy} alt="Deploy" /> View Site
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  ));
};

export default Card;
