import React, {useState} from "react";
import './contact.css';

const Contact = () => {
  const [activeInputs, setActiveInputs] = useState({ name: false, email: false, content: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActiveInputs(prevState => ({
      ...prevState,
      [name]: value !== "" // Set active to true if value is not empty
    }));
  }
  
  return (
    <section id="contact" className="contact section">
    {/* <h2 className="section__title">
      Contact
    </h2> */}
    <div className="contact__container container grid">
      <div className="contact__content grid">
        <form action="" className="contact__form">
          <h2 className="section__title">
            <span className="highlight">Contact</span> me
            <i className='bx bx-mail-send contact__icon' ></i>
          </h2>
          <ul className="list__input">
            <li className="input__item">
              <label className={`input__label ${activeInputs.name ? 'active' : ''}`}>Name</label>
              <input 
                type="text" 
                name="name" 
                className="input__content" 
                onChange={handleChange}
                required
                placeholder="Enter your name"/>
            </li>
            <li className="input__item">
            <label className={`input__label ${activeInputs.email ? 'active' : ''}`}>Email</label>
              <input 
                type="email" 
                name="email" 
                className="input__content" 
                onChange={handleChange}
                required
                placeholder="Enter your email"/>
            </li>
            <li className="input__item">
            <label className={`input__label ${activeInputs.content ? 'active' : ''}`}>Content</label>
              <textarea 
                name="content" 
                rows="10" 
                className="input__content"
                onChange={handleChange}
                required
                placeholder="Enter your content"></textarea>
            </li>
          </ul>
          <div className="send__btn">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact;