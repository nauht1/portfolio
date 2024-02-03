import React from "react";
import hobbyImg from "../../assets/images/hollow_knight.jpg";

const Info = () => {
  return (
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
          genre like Hollow Knight. <br /><br />
          In the future, I plan to endeavor into developing a game of that kind.
        </span>

      </p>
      <img className="hobby__img" src={hobbyImg} alt="hollow_knight" />
    </div>
  )
}

export default Info;