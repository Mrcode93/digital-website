// import { useState } from "react";
// import sound from "../assets/mixkit-hard-pop-click-2364.wav";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   const [active, setActiveIndex] = useState(null);
//   const handleClick = (index) => {
//     setActiveIndex(index);
//     // Play sound effect
//     const audio = new Audio(sound);
//     audio.play();
//   };
//   return (
//     <div className="nav">
//       <ul>
//         <Link to="/">
//           <li
//             className={active === 0 ? "active" : "not-active"}
//             onClick={() => handleClick(0)}
//           >
//             Home{" "}
//           </li>{" "}
//         </Link>{" "}
//         <Link to="/services">
//           <li
//             className={active === 1 ? "active" : "not-active"}
//             onClick={() => handleClick(1)}
//           >
//             Services{" "}
//           </li>{" "}
//         </Link>{" "}
//         <Link to="/projects">
//           <li className="not-active"> Projects </li>{" "}
//         </Link>{" "}
//         <Link to="/blog">
//           <li
//             className={active === 2 ? "active" : "not-active"}
//             onClick={() => handleClick(2)}
//           >
//             Blog{" "}
//           </li>{" "}
//         </Link>{" "}
//         <Link to="/skills">
//           <li
//             className={active === 4 ? "active" : "not-active"}
//             onClick={() => handleClick(4)}
//           >
//             Skills{" "}
//           </li>{" "}
//         </Link>{" "}
//         <Link to="/contact">
//           <li
//             className={active === 3 ? "active" : "not-active"}
//             onClick={() => handleClick(3)}
//           >
//             Contact{" "}
//           </li>{" "}
//         </Link>{" "}
//       </ul>{" "}
//     </div>
//   );
// };

// export default NavBar;

// {
//   /* <li
//                 className={active === 1 ? "active" : "not-active"}
//                 onClick={() => handleClick(1)}
//               >
//                 Projects{" "}
//               </li>{" "}
//               <li
//                 className={active === 2 ? "active" : "not-active"}
//                 onClick={() => handleClick(2)}
//               >
//                 Services{" "}
//               </li>{" "}
//               <li
//                 className={active === 3 ? "active" : "not-active"}
//                 onClick={() => handleClick(3)}
//               >
//                 Blog{" "}
//               </li>{" "}
//               <li
//                 className={active === 4 ? "active" : "not-active"}
//                 onClick={() => handleClick(4)}
//               >
//                 Skills{" "}
//               </li>{" "}
//               <li
//                 className={active === 5 ? "active" : "not-active"}
//                 onClick={() => handleClick(5)}
//               >
//                 Contact{" "}
//               </li>{" "} */
// }

import { useState, useEffect } from "react";
import sound from "../assets/light-switch-156813.mp3";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [active, setActiveIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Extract the section name from the current route
    const section = location.pathname.split("/")[1];

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
  }, [location.pathname]);

  const handleClick = (index) => {
    setActiveIndex(index);
    // Play sound effect
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li
            className={active === 0 ? "active" : "not-active"}
            onClick={() => handleClick(0)}
          >
            Home
          </li>
        </Link>
        <Link to="/services">
          <li
            className={active === 1 ? "active" : "not-active"}
            onClick={() => handleClick(1)}
          >
            Services
          </li>
        </Link>
        <Link to="/projects">
          <li
            className={active === 2 ? "active" : "not-active"}
            onClick={() => handleClick(2)}
          >
            Projects
          </li>
        </Link>
        <Link to="/blog">
          <li
            className={active === 3 ? "active" : "not-active"}
            onClick={() => handleClick(3)}
          >
            Blog
          </li>
        </Link>
        <Link to="/skills">
          <li
            className={active === 4 ? "active" : "not-active"}
            onClick={() => handleClick(4)}
          >
            Skills
          </li>
        </Link>
        <Link to="/contacts">
          <li
            className={active === 5 ? "active" : "not-active"}
            onClick={() => handleClick(5)}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
