import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/loader";

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://digital-website.onrender.com/project")
      .then((res) => {
        setProjectsList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="projects">
      <div className="main">
        <h1> Projects </h1>{" "}
        <div className="projects-list">
          {" "}
          {projectsList.map((project) => (
            <div key={project._id} className="project-item">
              <h4> {project.title} </h4>{" "}
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://digital-website.onrender.com/${project.image}`}
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null; // prevents looping
                    e.target.src = "/path-to-default-image.png"; // replace with path to default image
                  }}
                />{" "}
              </a>{" "}
              <p> {project.description} </p>{" "}
              <a className="link" href={project.link}>
                Code Link{" "}
              </a>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Projects;
