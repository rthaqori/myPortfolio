import ProjectCard from "../ProjectCard";
import MultiStepForm from "../../assets/project1-img.jpg";
import ProductPage from "../../assets/project2-img.jpg";
import AmazonUI from "../../assets/AmazonUi.jpg";
import EcommerceSite from "../../assets/eCommerce.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mulit-step Form",
      description:
        "Designed and developed a multi-step form UI for selecting subscription plans. Focused on creating a user-friendly, intuitive layout that guided users through each step of the subscription process. Ensured the design was responsive and accessible across all devices. Conducted user testing to gather feedback and made iterative improvements, resulting in a smoother user experience and higher subscription completion rates",
      image: MultiStepForm,
      githubLink: "https://github.com/rthaqori/multi-step-form-main",
      liveLink: "https://rthaqori.github.io/multi-step-form-main/",
    },
    {
      title: "Product Page",
      description:
        "Independently redesigned the UI for an e-commerce product page, enhancing visual appeal and user experience. Focused on a clean layout, intuitive navigation, and responsive design for optimal use across devices. Conducted usability testing to refine the design, leading to increased user engagement and satisfaction.",
      image: ProductPage,
      githubLink: "https://github.com/rthaqori/ecommerce-product-page-main",
      liveLink: "https://rthaqori.github.io/ecommerce-product-page-main/",
    },
    {
      title: "Amazon UI",
      description:
        "Independently redesigned Amazon’s product page UI, focusing on a clean, intuitive layout and improved functionality. Implemented responsive design for seamless multi-device use and conducted usability testing to enhance user engagement and satisfaction.",
      image: AmazonUI,
      githubLink: "https://github.com/rthaqori/Amazon",
      liveLink: "https://rthaqori.github.io/Amazon/",
    },
    {
      title: "myEcommerce-site",
      description:
        "Designed and developed a responsive e-commerce website with a focus on user-friendly navigation, dynamic product listings, and secure checkout process. Improved site performance and enhanced user engagement through optimized UI/UX design.",
      image: EcommerceSite,
      githubLink: "https://github.com/rthaqori/my-ecommerce-site",
      liveLink: "https://rthaqori.github.io/my-ecommerce-site/",
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
