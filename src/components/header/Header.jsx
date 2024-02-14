import React, { useEffect, useRef, useState } from 'react';
import './header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, showMenu] = useState(false);
  const [clicked, setClicked] = useState('');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    }
    
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        showMenu(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    }
  }, []);
  
  return (
    <header className={scrolled ? 'header header-scrolled' : 'header'}>
      <nav className="nav container">
        <a href="/" className="nav__logo">NAUHT</a>
        <div ref={menuRef} className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className={"nav__link " + (clicked === 'home' ? 'active-link' : '')} onClick={() => setClicked('home')}>
                <i className="bx bx-home nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className={"nav__link " + (clicked === 'about' ? 'active-link' : '')} onClick={() => setClicked('about')}>
              <i className='bx bx-user nav__icon'></i> About
              </a>
            </li>
            <li className="nav__item">
            <a href="#projects" className={"nav__link " + (clicked === 'projects' ? 'active-link' : '')} onClick={() => setClicked('projects')}>
              <i className='bx bx-desktop nav__icon'></i> Projects
              </a>
            </li>
            <li className="nav__item">
            <a href="#contact" className={"nav__link " + (clicked === 'contact' ? 'active-link' : '')} onClick={() => setClicked('contact')}>
              <i className='bx bx-message-dots nav__icon'></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-multiply nav__close" onClick={() => showMenu(!toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={(e) => {e.stopPropagation(); showMenu(!toggle); }}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;