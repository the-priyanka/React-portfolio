import React from "react";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>
      </ul>

      <div className="container">
        <div className="item">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
