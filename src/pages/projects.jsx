import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/loader";

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Fetch projects from the backend
    axios
      .get("https://digital-website-1.onrender.com/project")
      .then((res) => {
        setProjectsList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []); // Pass an empty dependency array to run the effect only once

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="projects">
      <div className="main">
        <h1> Projects </h1>{" "}
        <div className="projects-list">
          {" "}
          {/* Render the list of projects */}
          {projectsList.map((project) => (
            <div key={project._id} className="project-item">
              <h4> {project.title} </h4>{" "}
              {/* Assuming the 'image' field contains the filename */}{" "}
              <a href={project.demo} target="_blank">
                <img
                  src={`https://digital-website.onrender.com/uploads/${project.image}`}
                  alt="Project Image"
                />
              </a>
              <p> {project.description} </p>{" "}
              <a className="link" href={project.link}>
                Code Link
              </a>{" "}
              {/* The pixel spans - adjust as needed */}{" "}
              {[...Array(10)].map((_, index) => (
                <span key={index} className={`pixel-${index + 1}`}>
                  {" "}
                </span>
              ))}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Projects;
