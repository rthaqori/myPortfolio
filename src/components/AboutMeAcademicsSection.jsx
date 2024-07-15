
const AboutMeAcademicsSection = (props) => {
  const data = props.data;
  const dataMap = data.map((info, index) => (
    <li key={index}>
      <span className="up">{info.up}</span>
      <span className="down">{info.down}</span>
    </li>
  ));

  return <ul className="about-me-academics-section">{dataMap}</ul>;
};

export default AboutMeAcademicsSection;
