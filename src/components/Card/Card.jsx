import styles from "./Card.module.css";
import github from "../../assets/github.png";
import projects from "./projects.json";

const Card = () => {
  return projects.map((project) => (
    <>
      <div className={styles.card_container}>
        <div className={styles.project_image}>
          <img src={project.image} alt="Sample Image" />
        </div>
        <div className={styles.project_content}>
          <h3 className={styles.project_title}>{project.title}</h3>
          <p className={styles.project_description}>{project.description}</p>
          <div className={styles.technologies}>
            <div className={styles.technologies_list}>
              {project.technologiesUsed.map((tech) => (
                <img src={tech.icon} alt={tech.name} key={project.id} />
              ))}
            </div>
          </div>
          <div>
            <a href={project.link}>
              <button className={styles.project_button}>
                <img src={github} alt="Github" /> View Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  ));
};

export default Card;
