import Button from "../Button";
import ProfileImg from "../../assets/hero-img.png";
import Linkden from "../../assets/linkedin-light.svg";
import Github from "../../assets/github-light.svg";

const IntroSection = () => {
  return (
    <section className="intro_section" id="intro_section">
      <div className="profile_image">
        <img src={ProfileImg} alt="profile_image" />
      </div>
      <div className="profile_intro">
        <p>Hello, I'm</p>
        <h1>Raman Thakuri</h1>
        <h2>Fronted Developer</h2>
        <div className="btn_div">
          <Button handleClick={() => console.log("hii")}>Download CV</Button>
          <Button handleClick={() => console.log("hello")}>hello</Button>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/raman-shreenet-thakuri-4752402b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkden} height="40px" alt="" />
          </a>
          <a
            href="https://github.com/rthaqori"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} height="40px" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
