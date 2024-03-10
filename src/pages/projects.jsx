// // projects.jsx
// import { useState, useEffect } from "react";
// import axios from "axios";
// const Projects = () => {
//   const [projectsList, setProjectsList] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/project")
//       .then((res) => {
//         setProjectsList(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

//   return (
//     <div className="projects">
//       <div className="main">
//         <h1> Projects </h1>{" "}
//         <div className="projects-list">
//           {" "}
//           {projectsList.map((project) => (
//             <div key={project._id} className="project-item">
//               <h4> {project.title} </h4> <img src={project.image} alt="image" />
//               <p> {project.description} </p>{" "}
//               <p className="link"> {project.link} </p>{" "}
//               <p className="demo"> {project.demo} </p>
//               <span className="pixel-1"> </span>{" "}
//               <span className="pixel-2"> </span>{" "}
//               <span className="pixel-3"> </span>{" "}
//               <span className="pixel-4"> </span>{" "}
//               <span className="pixel-5"> </span>{" "}
//               <span className="pixel-6"> </span>{" "}
//               <span className="pixel-7"> </span>{" "}
//               <span className="pixel-8"> </span>{" "}
//               <span className="pixel-9"> </span>{" "}
//               <span className="pixel-10"> </span>{" "}
//             </div>
//           ))}{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>
//   );
// };

// export default Projects;

import { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/project")
      .then((res) => {
        setProjectsList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Pass an empty dependency array to run the effect only once

  return (
    <div className="projects">
      <div className="main">
        <h1> Projects </h1>{" "}
        <div className="projects-list">
          {" "}
          {projectsList.map((project) => (
            <div key={project._id} className="project-item">
              <h4> {project.title} </h4>{" "}
              {/* Assuming the 'image' field contains the filename */}{" "}
              <a href={project.demo} target="_blank">
                <img
                  src={`http://localhost:8080/uploads/${project.image}`}
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
