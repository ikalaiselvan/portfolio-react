import React from 'react'
import TestimonialModel from '../Testimonial/TestimonialModel';
// import Pizza from "../images/pizzaApp.png"

export default function About() {
  return (
    <>
      {/* <nav class="navbar">

          <ul class="navbar-list">

            <li>
              <button class="navbar-link  active" data-nav-link>About</button>
            </li>

            <li>
              <button class="navbar-link" data-nav-link>Resume</button>
            </li>

            <li>
              <button class="navbar-link" data-nav-link>Projects</button>
            </li>

            <li>
              <button class="navbar-link" data-nav-link>Contact</button>
            </li>

          </ul>

        </nav> */}

      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I'm Full stack developer, now learning Full stack development course
          in Guvi geek network pvt ltd at Chennai. I have knowledged in HTML,
          CSS, JS, ReactJs, Node-ExpressJS, MongoDB, My-SQL.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way.
        </p>
      </section>

      {/* <!--
          - service
        --> */}

      <section class="service">
        <h3 class="h3 service-title">Skills & Tools</h3>
        <div></div>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="html icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">HTML</h4>

              <p class="service-item-text">
                High-quality development of sites at the basic level.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">CSS</h4>

              <p class="service-item-text">
                Basic level of codings and development.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="Java Script icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Java Script</h4>

              <p class="service-item-text">I do basic level of JS codings.</p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg
                "
                alt="ReactJs icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">ReactJs</h4>

              <p class="service-item-text">
                The most modern and high-quality web design made at a basic
                level.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                alt="NodeJs icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Node-ExpressJS</h4>

              <p class="service-item-text">
                I knowledged basic level of NodeJS and ExpressJs codings.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg
                "
                alt="MongoDB icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">MongoDB</h4>

              <p class="service-item-text">
                I knowledged MongoDB codings and connectivity.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonial component called: */}

      <TestimonialModel />

      <section class="clients">
        <h3 class="h3 ">Projects</h3>

        <ul class="pros-list has-scrollbar">
          <li class="pros-item">
            <a href="https://guvitaskcalculator.netlify.app/">
              <img src="../images/calculator.PNG" alt="project logo" />
            </a>
          </li>
          <li class="pros-item">
            <a href="https://pizza-app-frontend.netlify.app/">
              <img src="../images/pizzaApp.png" alt="project logo" />
            </a>
          </li>

          <li class="pros-item">
            <a href="https://meek-speculoos-868002.netlify.app/">
              <img src="../images/country_data.PNG" alt="project logo" />
            </a>
          </li>

          <li class="pros-item">
            <a href="https://guvitaskpagination.netlify.app/">
              <img src="../images/pagination.PNG" alt="project logo" />
            </a>
          </li>

          <li class="pros-item">
            <a href="https://candid-heliotrope-a7c6df.netlify.app/">
              <img src="../images/call-back-hell.PNG" alt="project logo" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
