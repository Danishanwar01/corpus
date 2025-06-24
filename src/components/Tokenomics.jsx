import React from 'react';
import '../css/Tokenomics.css';
import logoImg from '../images/logo1.png';
import tokenBg from '../images/f78795.gif';

const Tokenomics = () => {
  const rows = [
    ['Token Name', 'CORPUS'],
    ['Token Symbol', 'CRPS'],
    ['Total Supply', '24CR'],
    ['Sale Price', '1$'],
    ['Blockchain', 'BEP20'],
    ['Referral', '3%'],
    ['Decimal', '18']
  ];

  return (
    <div className="tokenomics-wrapper" style={{ backgroundImage: `url(${tokenBg})` }}>
      <section id="tokenomics" className="vs-team-wrapper z-index-common">
        <div className="container z-index-common">
          <div className="row title-area justify-content-lg-between align-items-center">
            <div className="col-lg-auto">
              <h2 className="sec-title ">Tokenomics</h2>
              <div className="sec-shape">
                <div className="sec-shape_bar" />
                <div className="sec-shape_bar" />
                <div className="sec-shape_bar" />
              </div>
            </div>
          </div>

          <div className="row align-items-center upsidedown">
            <div className="col-lg-8 col-xl-7">
              <div className="team-card">
                <table className="info-table">
                  <tbody>
                    {rows.map(([label, value], idx) => (
                      <tr key={idx}>
                        <th>{label} :</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4 col-xl-5 text-center">
              <div className="logo-animator custom-margin">
                <div className="logo-animator_shape shape-1" />
                <div className="logo-animator_shape shape-1" />
                <div className="logo-animator_shape shape-2" />
                <div className="logo-animator_shape shape-3" />
                <div className="logo-animator_img">
                  <img src={logoImg} alt="CRPS Logo" className="pb-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
