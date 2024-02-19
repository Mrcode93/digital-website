import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to send the email using an API
    // Replace YOUR_EMAIL_API_ENDPOINT with the actual API endpoint
    fetch("http://localhost:8080/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email sent successfully", data);
        // You can add additional logic here, such as displaying a success message
      })
      .catch((error) => {
        console.error("Error sending email", error);
        // You can add additional logic here, such as displaying an error message
      });
  };

  return (
    <div className="contacts">
      <Header />
      <NavBar />
      <div className="main">
        <h1> Contact Me </h1>{" "}
        <ul className="contacts-list">
          <li>
            <FaEnvelope /> Email:{" "}
            <a href="ameralazawi69@gmail.com">ameralazawi</a>
          </li>{" "}
          <li>
            <FaLinkedin /> LinkedIn: https:
            <a
              href="https://www.linkedin.com/in/amer-farhan-226155194/"
              target="_blank"
            >
              Mr.CodeIq
            </a>
          </li>{" "}
          <li>
            <FaGithub /> GitHub: github.com / Mrcode93{" "}
          </li>{" "}
          <li>
            <SiTwitter /> Twitter: twitter.com / Amer
          </li>{" "}
        </ul>{" "}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name: </label>{" "}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email"> Email: </label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message"> Message: </label>{" "}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>{" "}
          <button type="submit"> Send Email </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Contacts;
