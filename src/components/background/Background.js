import React, { useEffect } from "react";
import './background.css';

const Background = () => {
  useEffect(() => {
    createStars();
  }, []);

  const createStars = () => {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 30; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `-${Math.random() * 10}s`;
      starsContainer.appendChild(star);
    }
  }
  
  return (
    <div className="stars"></div>
  )
};

export default Background;