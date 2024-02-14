import {React, useState, useEffect} from "react";
import "./scrollUp.css";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return ( 
    <div onClick={scrollToTop} className={isVisible ? "scrollUp active" : "scrollUp"}>
      <i className='bx bxs-up-arrow-square'></i>
    </div>
  )
}

export default ScrollUp;