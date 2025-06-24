import React from 'react';
import '../css/About.css';
import aboutGif from '../images/about.gif'; 

const About = () => {
  return (
    <div id="mission" className="about-wrapper">
      {/* Parallax Background */}
      <div
        className="parallax__container bg-title"
        style={{
          backgroundImage: `url(${aboutGif})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Video Section */}
        <section className="vs-video-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8">
                <div className="title-area">
                  <span className="sub-title text-uppercase">#About</span>
                  <h2 className="sec-title ">DKC</h2>
                  <div className="sec-shape">
                    <div className="sec-shape_bar" />
                    <div className="sec-shape_bar" />
                    <div className="sec-shape_bar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-11 col-lg-10 col-md-10 col-sm-12">
                <div className="release-card mb-15">
                  <div className="release-card_content">
                    <p className="release-card_text text-light-white">
                      <strong>Introducing Dkc Tokens – Pioneering the Future of Gaming!</strong><br />
                      In the constantly evolving world of gaming, Dkc cryptocurrency tokens emerge
                      as the digital catalysts reshaping how gamers interact with virtual environments.
                      These tokens go beyond simple digital assets; they embody a revolutionary advancement,
                      harnessing blockchain technology to enable secure, transparent, and decentralized
                      transactions within gaming ecosystems.
                      <br /><br />
                      Embark on a journey where every action you take, every milestone you achieve, and every asset you acquire
                      contributes to a decentralized and dynamic gaming future. Dkc cryptocurrency tokens
                      aren't just changing the game; they're revolutionizing how you experience it.
                      Welcome to a new gaming era where ownership, transparency, and value are firmly within your control!
                    </p>

                    <p className="release-card_text text-light-white">
                      Blockchain, on the other hand, serves as the underlying technology behind cryptocurrencies.
                      It is a decentralized and distributed ledger system that records all transactions across
                      a network of computers. Each transaction is stored in a "block" and linked together in a
                      chronological order, forming a chain of blocks, hence the name "blockchain."
                      <br /><br />
                      This decentralized nature ensures transparency, security, and immutability of transaction records,
                      as each block is cryptographically linked to the previous one. Blockchain technology has
                      applications beyond cryptocurrencies, including supply chain management, voting systems,
                      healthcare records, and more. Its decentralized nature and security features make it a promising
                      solution for various industries seeking transparency and efficiency in their operations.
                      <br /><br />
                      In summary, cryptocurrencies and blockchain technology represent innovative approaches to
                      finance and record-keeping, offering decentralized and secure solutions in an increasingly
                      digital world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
