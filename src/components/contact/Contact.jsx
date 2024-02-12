import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [activeInputs, setActiveInputs] = useState({ name: false, email: false, content: false });
  const [formData, setFormData] = useState({ name: "", email: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActiveInputs(prevState => ({
      ...prevState,
      [name]: value !== "" // Set active to true if value is not empty
    }));

    // Clear input
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tozrzlm', 'template_q6ara2h', form.current, {
        publicKey: 'OuZacvNS_2WQMIVpz',
      })
      .then(
        () => {
          alert('Sent mail successfully! ');
          // Reset form data
          setFormData({ name: "", email: "", content: "" });
          // Reset active inputs
          setActiveInputs({ name: false, email: false, content: false });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <section id="contact" className="contact section">
    <div className="contact__container container grid">
      <div className="contact__content grid">
        <form ref={form} onSubmit={sendEmail} className="contact__form">
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
                value={formData.name}
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
                value={formData.email}
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
                value={formData.content}
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