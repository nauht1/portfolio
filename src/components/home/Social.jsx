import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://github.com/nauht1" 
        className="home__social-icon" target="_blank" rel="noopener noreferrer" data-content="nauht1">
        <i className='bx bxl-github'></i>
      </a>
      <a href="https://www.linkedin.com/in/thuan-ngo-minh-dev-nauht1" 
        className="home__social-icon" target="_blank" rel="noopener noreferrer" data-content="Ngo Minh Thuan">
        <i className='bx bxl-linkedin-square' ></i>
      </a>
      <a href="https://discord.com/users/873186593517756457" 
        className="home__social-icon" target="_blank" rel="noopener noreferrer" data-content="thuan65">
        <i className='bx bxl-discord-alt'></i>
      </a>
      <a href="https://steamcommunity.com/profiles/76561199012835575/" 
        className="home__social-icon" target="_blank" rel="noopener noreferrer" data-content="hollow_con">
        <i className='bx bxl-steam' ></i>
      </a>
    </div>
  )
}

export default Social;