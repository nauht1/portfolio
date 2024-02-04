import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';

const Home = () => {
  return (
    <section id="home" className="home section">
    <div className="home__container container grid">
      <div className="home__content grid">
        <div className="home__img">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
        </div>
        <Data />

        <Social />
      </div>
    </div>
  </section>
  )
}

export default Home;