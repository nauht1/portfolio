import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index" className="nav__logo">Minh Thuận</a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="bx bx-home nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
              <i className='bx bx-user nav__icon'></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#education" className="nav__link">
              <i className='bx bxs-book-open nav__icon'></i> Education
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
              <i className='bx bxs-notepad nav__icon'></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
              <i className="uil uil-apps nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i className='bx bx-message-dots nav__icon'></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;