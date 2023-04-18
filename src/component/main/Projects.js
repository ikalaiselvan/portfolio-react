import React, { useState } from "react";
import Pizza from "../images/pizzaApp.png"

export default function Projects() {

  const data = [
    {
      title: "Calculator",
      appLink: "https://guvitaskcalculator.netlify.app/",
      image: "../images/calculator.PNG",
      category: "Web application",
    },
    {
      title: "Pizza delivery app",
      appLink: "https://pizza-app-frontend.netlify.app/",
      image: Pizza,
      category: "Web application",
    },
    {
      title: "Country data",
      appLink: "https://meek-speculoos-868002.netlify.app/",
      image: "../images/country_data.PNG",
      category: "Web development",
    },
    {
      title: "Pagination",
      appLink: "https://guvitaskpagination.netlify.app/",
      image: "../images/pagination.PNG",
      category: "Web development",
    },
    {
      title: "Call back hell",
      appLink: "https://candid-heliotrope-a7c6df.netlify.app/",
      image: "../images/call-back-hell.PNG",
      category: "Web development",
    },
  ];
    const [filter, setFilter] = useState(data);

  const handleClick = (event) => {
    if(event === "All"){
      setFilter(data);
    }else{
      const filtValue = data.filter((e) => e.category === event);
      setFilter(filtValue);
    }
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button onClick={(e) => handleClick(e.target.textContent)}>
              All
            </button>
          </li>

          <li className="filter-item">
            <button onClick={(e) => handleClick(e.target.textContent)}>
              Web application
            </button>
          </li>

          <li className="filter-item">
            <button onClick={(e) => handleClick(e.target.textContent)}>
              Web development
            </button>
          </li>
        </ul>
        <ul className="project-list">
          {filter.map((data, index) => {
            return (
              <li
                key={index}
                className="project-item  active"
                data-category={data.category}
              >
                {/* {console.log(data)} */}
                <a href={data.appLink}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
{console.log(data.image)}
                    <img src={data.image} alt={data.title} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{data.title}</h3>
                  <p className="project-category">{data.category}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
