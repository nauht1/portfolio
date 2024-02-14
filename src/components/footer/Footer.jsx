import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright__data">
          <h3 className="copyright__text">
            Copyright <i className='bx bxs-copyright'></i> {currentYear} by Nauht
          </h3>
          <a href="https://github.com/nauht1/portfolio" 
            target="_blank" rel="noopener noreferrer" 
            data-content="nauht1">
            <i className='bx bxl-github source__icon'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;