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
      title: "JavaScript Web",
    },
    {
      id: "React",
      title: "React Web",
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
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
