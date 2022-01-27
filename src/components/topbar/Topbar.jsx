// import { formatMs } from "@material-ui/core";
import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = (props) => {
  return (
    <div
      className={`topbar ${
        props.menuOpen === true ? "active" : false
      }`}
    >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+99 999 99 99</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>the.priyanka1511@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => props.setMenuOpen(!props.menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
