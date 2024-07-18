import ProjectCard from "../ProjectCard";
import ProjectOneImage from "../../assets/project1-img.jpg";
import ProjectTwoImage from "../../assets/project2-img.jpg";
import ProjectFourImage from "../../assets/AmazonUi.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mulit-step Form",
      description:
        "Designed and developed a multi-step form UI for selecting subscription plans. Focused on creating a user-friendly, intuitive layout that guided users through each step of the subscription process. Ensured the design was responsive and accessible across all devices. Conducted user testing to gather feedback and made iterative improvements, resulting in a smoother user experience and higher subscription completion rates",
      image: ProjectOneImage,
      githubLink: "https://github.com/rthaqori/multi-step-form-main",
      liveLink: "https://rthaqori.github.io/multi-step-form-main/",
    },
    {
      title: "Product Page",
      description:
        "Independently redesigned the UI for an e-commerce product page, enhancing visual appeal and user experience. Focused on a clean layout, intuitive navigation, and responsive design for optimal use across devices. Conducted usability testing to refine the design, leading to increased user engagement and satisfaction.",
      image: ProjectTwoImage,
      githubLink: "https://github.com/rthaqori/ecommerce-product-page-main",
      liveLink: "https://rthaqori.github.io/ecommerce-product-page-main/",
    },
    // {
    //   title: "Project 3",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
    //   image: ProjectOneImage,
    //   githubLink: "https://www.google.com",
    //   liveLink: "https://www.google.com",
    // },
    {
      title: "Amazon UI",
      description:
        "Independently redesigned Amazon’s product page UI, focusing on a clean, intuitive layout and improved functionality. Implemented responsive design for seamless multi-device use and conducted usability testing to enhance user engagement and satisfaction.",
      image: ProjectFourImage,
      githubLink: "https://github.com/rthaqori/Amazon",
      liveLink: "https://rthaqori.github.io/Amazon/",
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
