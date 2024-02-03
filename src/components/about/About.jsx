import React from "react";
import Skillset from "./Skillset";
import "./about.css";
import Info from "./Info";
import Timeline from "./Timeline";

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">
        <span className="highlight">Intro</span>duction
      </span>
      <div className="about__container container grid">
        <div className="about__content grid">
          <Info />

          <span className="section__subtitle">
            <span className="highlight">Edu</span>cation
          </span>
          <Timeline />


          <span className="section__subtitle">
            <span className="highlight">Skill</span>set
          </span>
          <Skillset />
        </div>
      </div>
    </section>
  )
}

export default About;