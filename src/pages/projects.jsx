// projects.jsx
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/project")
      .then((res) => {
        setProjectsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="projects">
      <Header />
      <NavBar />
      <div className="main">
        <h1> Projects </h1>{" "}
        <div className="projects-list">
          {" "}
          {projectsList.map((project) => (
            <div key={project._id} className="project-item">
              <h4>{project.title}</h4>
              <img src={project.image} alt="image" />
              <p>{project.description}</p>
              <p className="link">{project.link}</p>
              <p className="demo">{project.demo}</p>
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Projects;
