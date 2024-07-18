import Button from "./Button";

const ProjectCard = (props) => {
  return (
    <>
      <div className="project-card">
        <img src={props.image} alt={props.title} />
        <div className="project-card__image-overlay">
          <div className="project-card__image-overlay__content">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <div className="project-card__image-overlay__btn">
            <a href={props.githubLink}>
              <Button>Github</Button>
            </a>
            <a href={props.liveLink}>
              <Button>Live Demo</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
