import { useState } from "react";
import axios from "axios";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    link: "",
    demo: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setProjectData({
      ...projectData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", projectData.title);
    formData.append("description", projectData.description);
    formData.append("link", projectData.link);
    formData.append("demo", projectData.demo);
    formData.append("image", projectData.image);

    try {
      await axios.post("http://localhost:8080/project", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Project created successfully!");
      // You can redirect or perform other actions upon successful submission
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Title: </label>{" "}
      <input
        type="text"
        name="title"
        value={projectData.title}
        onChange={handleInputChange}
      />{" "}
      <label> Description: </label>{" "}
      <textarea
        name="description"
        value={projectData.description}
        onChange={handleInputChange}
      ></textarea>{" "}
      <label> Link: </label>{" "}
      <input
        type="text"
        name="link"
        value={projectData.link}
        onChange={handleInputChange}
      />{" "}
      <label> Demo: </label>{" "}
      <input
        type="text"
        name="demo"
        value={projectData.demo}
        onChange={handleInputChange}
      />{" "}
      <label> Image: </label>{" "}
      <input type="file" name="image" onChange={handleImageChange} />{" "}
      <button type="submit"> Submit </button>{" "}
    </form>
  );
};

export default ProjectForm;
