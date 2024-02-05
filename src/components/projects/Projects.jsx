import React from "react";
import Project from "./Project";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2 className="section__title">
        <span className="highlight">Pro</span>jects
      </h2>
      {/* <span className="project__subtitle">
        <span><i>Update soon ...</i></span>
      </span> */}
      <div className="projects__container container grid">
        <div className="projects__content grid">
          <Project />
        </div>
      </div>
    </section>
  )
}

export default Projects;