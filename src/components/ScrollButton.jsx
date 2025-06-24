import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../css/ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scrollToTop scroll-btn${visible ? ' show' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollButton;
