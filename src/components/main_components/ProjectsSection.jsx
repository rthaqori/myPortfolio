import ProjectCard from "../ProjectCard";
import ProjectOneImage from "../../assets/project1-img.jpg";
import ProjectTwoImage from "../../assets/project2-img.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
      image: ProjectOneImage,
      githubLink: "https://www.google.com",
      liveLink: "https://www.google.com",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
      image: ProjectTwoImage,
      githubLink: "https://www.google.com",
      liveLink: "https://www.google.com",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
      image: ProjectOneImage,
      githubLink: "https://www.google.com",
      liveLink: "https://www.google.com",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
      image: ProjectTwoImage,
      githubLink: "https://www.google.com",
      liveLink: "https://www.google.com",
    },
  ];

  const projectsListItem = projects.map((item) => {
    return (
      <ProjectCard
        key={item.title}
        title={item.title}
        image={item.image}
        description={item.description}
        githubLink={item.githubLink}
        liveLink={item.liveLink}
      />
    );
  });

  return (
    <section className="projects-section" id="projects-section">
      {projectsListItem}
    </section>
  );
};

export default ProjectsSection;
