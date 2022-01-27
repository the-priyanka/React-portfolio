import React from "react";
import "./menu.scss";

const Menu = (props) => {
  return (
    <div
      className={`menu ${props.menuOpen === true ? "active" : false}`}
    >
      <ul>
        <li>
          <a href="#intro" onClick={() => props.setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => props.setMenuOpen(false)}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a href="#works" onClick={() => props.setMenuOpen(false)}>
            Works
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            onClick={() => props.setMenuOpen(false)}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => props.setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
