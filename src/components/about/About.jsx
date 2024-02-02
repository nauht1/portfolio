import React from "react";
import hobbyImg from "../../assets/images/hollow_knight.jpg";
import Skillset from "./Skillset";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about section">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My 
        <span className="highlight"> introduction</span>
      </span>
      <div className="about__container container grid">
        <div className="about__content">
          <div className="about__data">
            <p className="about__description">
              
              <span className="about__info">
              Hello everyone, I am
              <span className="highlight"> Ngo Minh Thuan </span> 
                from 
                <span className="highlight"> Ho Chi Minh, Viet Nam.</span> <br />
                I'm currently a third-year student at 
                the HCM University of Technology and Education 
                <span className="highlight"> (HCMUTE)</span>.
                My major is software engineering. <br />
              </span>
              
              <span className="about__hobbies">
                Besides coding, I also have a strong passion for playing games, 
                especially the 
                <span className="highlight"> metroidvania </span> 
                genre like Hollow Knight. 
                In the future, I plan to endeavor into developing a game of that kind.
              </span>

            </p>
            <img className="hobby__img" src={hobbyImg} alt="hollow_knight" />
          </div>
          <span className="section__subtitle">
            <span className="highlight">Skill</span>set
          </span>
          <div className="skillset__data">
            <Skillset />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;