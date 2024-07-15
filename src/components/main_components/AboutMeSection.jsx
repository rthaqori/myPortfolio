import React, { useState } from "react";
import AboutMeAcademicsSection from "../AboutMeAcademicsSection";
import ProfileImg from "../../assets/hero-img2.png";

const AboutMeSection = () => {
  const skills = [{ up: "raman", down: "thakuri" },
    { up: "raman", down: "thakuri" },
    { up: "raman", down: "thakuri" },
  ];
  const experience = [{ up: "rama", down: "thakuri" }];
  const education = [{ up: "ram", down: "thakuri" }];

  const [activeCategory, setActiveCategory] = useState("Skills");

  const getDataForCategory = () => {
    switch (activeCategory) {
      case "Skills":
        return skills;
      case "Experience":
        return experience;
      case "Education":
        return education;
      default:
        return [];
    }
  };

  return (
    <section className="about-me-section" id="about-me-section">
      <div className="about-me-section__container_left">
        <img src={ProfileImg} alt="profile_image" />
      </div>
      <div className="about-me-section__container_right">
        <h2 className="about-me-section__title">About Me</h2>
        <p className="about-me-section__text">
          I am a full-stack web developer with a passion for creating beautiful
          and functional websites. I have a strong background in design and a
          deep understanding of user experience. I am always looking for new
          challenges and opportunities to learn and grow as a developer.
        </p>
        <p className="about-me-section__text">
          I am a self-motivated and hard-working individual with a strong work
          ethic. I am always looking for new challenges and opportunities to
          learn and grow as a developer.
        </p>

        <div className="about-me-section_academics">
          <div>
            <span
              className={activeCategory === "Skills" ? "active" : ""}
              href="#"
              onClick={() => setActiveCategory("Skills")}
            >
              Skills
            </span>
            <span
              className={activeCategory === "Experience" ? "active" : ""}
              href="#"
              onClick={() => setActiveCategory("Experience")}
            >
              Experience
            </span>
            <span
              className={activeCategory === "Education" ? "active" : ""}
              href="#"
              onClick={() => setActiveCategory("Education")}
            >
              Education
            </span>
          </div>
          <AboutMeAcademicsSection data={getDataForCategory()} />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
