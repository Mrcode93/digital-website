import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaJs,
  FaSass,
  FaGit,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  const skillsList = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Sass", icon: <FaSass /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <div className="skills">
      <div className="main">
        <h1> Skills </h1>{" "}
        <ul className="skills-list">
          {" "}
          {skillsList.map((skill, index) => (
            <li key={index}>
              <span className="pixel-1"> </span>{" "}
              <span className="pixel-2"> </span>{" "}
              <span className="pixel-3"> </span>{" "}
              <span className="pixel-4"> </span>{" "}
              <span className="pixel-5"> </span>{" "}
              <span className="pixel-6"> </span>{" "}
              <span className="pixel-7"> </span>{" "}
              <span className="pixel-8"> </span>{" "}
              <span className="pixel-9"> </span>{" "}
              <span className="pixel-10"> </span> {skill.icon} {skill.name}{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Skills;
