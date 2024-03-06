import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [active, setActiveIndex] = useState(null);
  const [logedIn, setLogedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Extract the section name from the current route
    const section = location.pathname.split("/")[1];

    // check if user already signed in
    if (sessionStorage.getItem("signedIn") === "true") {
      console.log("already signed in");
      setLogedIn(true);
    } else {
      setLogedIn(false);
    }

    // Map the section name to the corresponding index in your navigation
    const sectionToIndex = {
      "": 0, // Home
      services: 1,
      projects: 2,
      blog: 3,
      skills: 4,
      contact: 5,
    };

    // Set the active index based on the current section
    setActiveIndex(sectionToIndex[section]);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li
            className={active === 0 ? "active" : "not-active"}
            onClick={() => handleClick(0)}
          >
            Home{" "}
          </li>{" "}
        </Link>{" "}
        <Link to="/services">
          <li
            className={active === 1 ? "active" : "not-active"}
            onClick={() => handleClick(1)}
          >
            Services{" "}
          </li>{" "}
        </Link>{" "}
        <Link to="/projects">
          <li
            className={active === 2 ? "active" : "not-active"}
            onClick={() => handleClick(2)}
          >
            Projects{" "}
          </li>{" "}
        </Link>{" "}
        <Link to="/blog">
          <li
            className={active === 3 ? "active" : "not-active"}
            onClick={() => handleClick(3)}
          >
            Blog{" "}
          </li>{" "}
        </Link>{" "}
        <Link to="/skills">
          <li
            className={active === 4 ? "active" : "not-active"}
            onClick={() => handleClick(4)}
          >
            Skills{" "}
          </li>{" "}
        </Link>{" "}
        <Link to="/contacts">
          <li
            className={active === 5 ? "active" : "not-active"}
            onClick={() => handleClick(5)}
          >
            Contact{" "}
          </li>{" "}
        </Link>{" "}
        {logedIn ? (
          <li>
            <button
              onClick={() => {
                sessionStorage.setItem("signedIn", false);
                setLogedIn(false);
                sessionStorage.removeItem("user");
              }}
              className="logout-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "1rem",
                textAlign: "center",
                border: "none",
                background: "none",
                fontFamily: '"Silkscreen", sans-serif,"',
                backgroundColor: "#183a37",
                color: "white",
                padding: "0.1em 0.2em",
                // Apply the same styling as the navigation links when hovered
                ":hover": {
                  fontSize: "0.9em",
                  padding: "0.1em 0.2em",
                  color: "your_cards_color",
                  backgroundColor: "your_warning_color",
                },
              }}
            >
              Logout{" "}
            </button>{" "}
          </li>
        ) : (
          <Link to="/form">
            <li
              className={active === 6 ? "active" : "not-active"}
              onClick={() => handleClick(6)}
            >
              Sign{" "}
            </li>{" "}
          </Link>
        )}{" "}
      </ul>{" "}
    </div>
  );
};

export default NavBar;
