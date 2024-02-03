import React from 'react';
import "./home.css";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Ngô Minh Thuận</h1>
      <h3 className="home__subtitle">
      <i className='bx bx-code-block home__subtitle-icon'></i>
        Software Engineering*
      </h3>
      <p className="home__description">
        A 3rd-year student currently studying at Ho Chi Minh University of Technology and Education. <br /><br />
        <span className='quote'><i>" There's a will, there's a way "</i></span>
      </p>
    </div>
  )
}

export default Data;