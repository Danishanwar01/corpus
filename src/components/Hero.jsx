import React from 'react';
import Slider from 'react-slick';
import bgimg from '../images/neon1.gif';
import '../css/Hero.css';

const Hero = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <section
      className="vs-hero-wrapper"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <Slider {...settings} className="vs-carousel hero-box-slider">
        <div className="hero-slider-box">
          <div className="slider">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="hero-content z-index-step1">
                    <h1 className="hero-logo-icon">CORPUS</h1>
                    <span className="hero-sub-title">#WORLD'S NO.1 GAMING TOKEN</span>
                    <h3 className="hero-title">
                      BLOCKCHAIN IS MOVING BEYOND<br />CRYPTOCURRENCY TOKEN
                    </h3>
                    <p className="hero-text">
                      CRPS cares about its community and is not going to make them<br />
                      wait for this awesome & unique experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
