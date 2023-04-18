import React from 'react'

export default function Resume() {
  return (
    <>
      {/* // <article data-page="resume"> */}

      {/* <nav className="navbar">

          <ul className="navbar-list">

            <li>
              <button className="navbar-link  active" data-nav-link>About</button>
            </li>

            <li>
              <button className="navbar-link" data-nav-link>Resume</button>
            </li>

            <li>
              <button className="navbar-link" data-nav-link>Projects</button>
            </li>

            <li>
              <button className="navbar-link" data-nav-link>Contact</button>
            </li>

          </ul>

        </nav> */}

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full stack development</h4>

            <span>2022</span>

            <p className="timeline-text">
              learning full stack development course at GUVI geek network pvt
              ltd.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Diploma in Instrumentation and Control Engineering
            </h4>

            <span>2012 — 2014</span>

            <p className="timeline-text">
              Completed diploma in Instrumentation and Control Engineering at
              Government Polytechnic College - Uthagamandalam.
              <br />
              And I certified with destinction.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Instrumentation</h4>

            <span>2008 — 2010</span>

            <p className="timeline-text">
              Completed course an Instrumentation at Industrial Training
              Institute - Ambattur.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">HSC</h4>

            <span>2005 — 2007</span>

            <p className="timeline-text">
              Completed Higher secondary in S.I.Government higher secondary
              school.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Engineer-Electrical</h4>

            <span>2018 — 2022</span>

            <p className="timeline-text">
              I worked as Electrical Engineer at solar power plant in Vikram
              Solar Ltd - Andrapradesh branch.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior technician</h4>

            <span>2016 — 2018</span>

            <p className="timeline-text">
              I worked as senior technician at AVI Solar pvt ltd.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Instrument technician</h4>

            <span>2015 — 2016</span>

            <p className="timeline-text">
              I worked as instrument technician in Base electronics and systems.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">RN Trainee Advance</h4>

            <span>2011 — 2012</span>

            <p className="timeline-text">
              I worked as RN Trainee Advance in Renault-Nissan automobile
              industry.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Instrument technician</h4>

            <span>2010 — 2011</span>

            <p className="timeline-text">
              I worked as RN Instrument technician at Godrej & boyce Mfg co ltd.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">

          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">HTML</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{"width": "80%"}}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">CSS</h5>
                <data value="60">60%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{"width": "60%"}}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">JS</h5>
                <data value="60">60%</data>
              </div>

              <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{"width": "60%"}}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">ReactJs</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{"width": "50%"}}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Node & ExpressJS</h5>
                <data value="60">60%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{"width": "60%"}}></div>
              </div>
              </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">MongoDB</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{"width": "70%"}}></div>
              </div>

            </li>

          </ul>


        </section>

      {/* </article> */}
    </>
  );
}
