import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Navebar() {
    const navigate = useNavigate();
  // Set the active state to the first link by default
  // const [activeLink, setActiveLink] = useState("Home");

  // // Update the active state when a link is clicked
  // const handleClick = (event) => {
  //   console.log(event)
  //   // setActiveLink(event.target.text);
  // };


  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink
            to="/"
            className="navbar-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className="navbar-link"
          >
            Resume
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className="navbar-link"
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="navbar-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
