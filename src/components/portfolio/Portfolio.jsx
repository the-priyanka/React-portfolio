import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { javaScript, react } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("JavaScript");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "JavaScript",
      title: "JavaScript",
    },
    {
      id: "React",
      title: "React",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "JavaScript":
        setData(javaScript);
        break;
      case "React":
        setData(react);
        break;

      default:
        setData(javaScript);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d, index) => (
          <div className="item" key={index}>
            <img src={d.img} alt="" />
            <a
              href={d.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
