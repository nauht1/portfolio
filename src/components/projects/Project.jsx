import React, {useEffect} from "react";
import snakeImg from "../../assets/images/Snake_Screenshot2.png";

const Project = () => {

  useEffect(() => {
    const elements = document.querySelectorAll("a[href*='https://drive.google.com/file/d']");
    elements.forEach(element => {
      const originalHref = element.getAttribute("href");
      const newHref = originalHref.replace("/file/d/", "/uc?export=download&id=").replace("/view?usp=sharing", "");
      element.setAttribute("href", newHref);
    });
  }, []);

  return (
    <ul className="project__data">
      <li className="project__item">
        <div className="frame"></div>
        <div className="project__title">
          Snake Game AI
        </div>
        <img src={snakeImg} className = "project__img" alt="snake_ai" />
        <div className="project__description">
          The project is built with Python using the Pygame library. 
          The Snake game is a game where you control a snake and eat the fruits that appear on the screen using the arrow keys. 
          The project is created to serve algorithm testing purposes in AI subject. <br /><br />
          <span className="highlight">Important: </span> demo version does not cover all content of this game. 
          You can download the full version
          <a download={true} href="https://drive.google.com/file/d/1vwrqB0cN5n3R0B2SzWU0gcaMkRcXWxiM/view?usp=sharing"> here.</a>
        </div>
        <div className="projects__btns">
          <a href="https://github.com/K0l4s/SnakeGameAI" className="project__source" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github btn__icon'></i>
            Github
          </a>
          <a href="https://nauht1.itch.io/snake-game-ai" className="project__demo" target="_blank" rel="noopener noreferrer">
          <i className='bx bx-link-external btn__icon'></i>
            Demo
          </a>
        </div>
      </li>
    </ul>
  )
}

export default Project;