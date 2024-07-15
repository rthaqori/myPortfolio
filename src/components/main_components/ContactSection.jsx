import GmailPng from "../../assets/email.png";
import LinkdenSvg from "../../assets/linkedin-light.svg";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact-section">
      <p>Get in touch</p>
      <span>Contact Me</span>
      <div>
        <a
          href="mailto:ramanthaqori@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GmailPng} height="50px" alt="Gmail" />
          ramanthaqori@gmail.com
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/raman-shreenet-thakuri-4752402b0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkdenSvg} alt="" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
