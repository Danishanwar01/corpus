import React from 'react';
import '../css/SmartContract.css'
import { useState } from 'react';
const SmartContract = () => {

  const CONTRACT_ADDRESS = '0x3c5a863C0C664Ba6c32b6DfC78a90e89D9801B55';
const [btnText, setBtnText] = useState('Copy');

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setBtnText('Copied');
    setTimeout(() => setBtnText('Copy'), 2000);
  } catch (e) {
    console.error('Copy failed', e);
  }
};

  return (
    <div data-opacity="95" >
     
      <section id="gametokenomics" className="vs-match-wapper z-index-common section-bg-game" style={{ paddingTop: 40 }}>
     
        <div className="container d-none">
          {/* <h2 className="sec-title text-white">Game Tokenomics</h2> */}
          <div className="sec-shape">
            <div className="sec-shape_bar"></div>
            <div className="sec-shape_bar"></div>
            <div className="sec-shape_bar"></div>
            
          </div>
        </div>

        <div className="filter-active position-relative">
          <div className="col-lg-12 filter-item csgo w-100 position-absolute">
            <div className="vs-match">
              <div className="container" id="smartcontract">
               
               <div className="row d-flex justify-content-center align-items-center">
  <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center flex-column">
    <h4 className="widget_title">Smart Contract</h4>
    <p className="contract text-center">
      <li>
        <a
          href={`${CONTRACT_ADDRESS}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTRACT_ADDRESS}
        </a>
      </li>
    </p>
    <button
      className="btn btn-warning copyBtn"
      style={{ width: 100 }}
      onClick={handleCopy}
    >
      {btnText}
    </button>
  </div>
</div>


                {/* <div className="row d-flex justify-content-center align-items-center d-none" style={{ marginTop: 20 }}>
                  <div className="mt-5 col-lg-12 d-flex justify-content-center align-items-center flex-column">
                    <h5 className="text-center mt-5">We are listed on</h5>
                    <div
                      className="col-lg-12 d-flex flex-wrap justify-content-center align-items-center"
                      style={{ padding: 10, borderRadius: 10, backgroundColor: 'rgba(44, 42, 42, 0.671)' }}
                    >
                      {["coincatapult", "freshcoins", "coinmooner", "coinxhigh", "coinHunters", "coinsniper", "coin-scope"].map(
                        (logo, i) => (
                          <a
                            key={i}
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contract text-center m-2"
                          >
                            <img
                              src={`./assets/img/${logo}.png`}
                              alt={`${logo} Logo`}
                              style={{ width: '100px', objectFit: 'contain' }}
                            />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </div>

  );
};

export default SmartContract;
