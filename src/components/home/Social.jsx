import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://github.com/nauht1" 
        className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-github'></i>
      </a>
      <a href="https://www.linkedin.com/in/thuan-ngo-minh-7b777a2a6/" 
        className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-linkedin-square' ></i>
      </a>
    </div>
  )
}

export default Social;