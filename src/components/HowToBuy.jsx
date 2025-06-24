
import React from 'react';
import '../css/HowToBuy.css'
import nftGirl from '../images/nft_girl.png';
import bgHowToBuy from '../images/bg_layer.gif'
const HowToBuy = () => {
  const steps = [
    'Navigate to the menu bar and select "Buy DKC."',
    'Input the desired amount of tokens for purchase.',
    'Link your wallet to acquire DKC Tokens.',
    'Once the transaction is successful, the tokens will be added to your wallet.'
  ];

  return (
    
    <section id="howtoplay" className="vs-about-wrapper" style={{ padding: '20px 0' }}>
  
<section    id="howplay"
  className="vs-about-wrapper"
  style={{
    padding: '20px 0',
    backgroundImage: `url(${bgHowToBuy})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }}>
    
      
      <div className="container">
        <div className="row">
          <div className="col-xxl-4">
            <div className="title-area">
              <span className="sub-title text-uppercase">#DKC</span>
              <h2 className="sec-title text-white">How to Buy</h2>
              <div className="sec-shape">
                <div className="sec-shape_bar" />
                <div className="sec-shape_bar" />
                <div className="sec-shape_bar" />
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center reverse-wrap">
          <div className="col-lg-6 col-xl-6 col-xxl-6">
            <div className="feature-media">
              <div className="media-body widget_categories footer-widget">
                <ul className="howto-list text-white">
                  {steps.map((step, idx) => (
                    <li key={idx} className="justify">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xxl-6">
            <div className="stream-video-slide mb-30 d-flex justify-content-center align-items-center">
              <img 
                src={nftGirl}
                alt="How to Buy"
                className="howto-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default HowToBuy;
