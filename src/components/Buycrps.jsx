// src/components/Buycrps.jsx
import React, { useState } from 'react';
import '../css/Buycrps.css';
import { FaQrcode } from 'react-icons/fa';
import handIcon from '../images/hand.png';
import bnbIcon from '../images/bnb.png';
import tokenLogo from '../images/logo1.png';
import bgHowToBuy from '../images/block_chain.gif'
const Buycrps = () => {
    const [usdtAmount, setUsdtAmount] = useState('');
    const [crpsAmount, setCrpsAmount] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [referralLink, setReferralLink] = useState('');
    const [totalReferrals, setTotalReferrals] = useState(0);
    const [totalPurchase, setTotalPurchase] = useState(0);
    const [directIncome, setDirectIncome] = useState(0);
    const [totalToken, setTotalToken] = useState(0);

    const handleUsdtChange = e => {
        setUsdtAmount(e.target.value);
        // convert('usdt', e.target.value)
    };

    const handleCrpsChange = e => {
        setCrpsAmount(e.target.value);
        // convert('mtk', e.target.value)
    };

    const handleConnectWallet = () => {
        // modelOpen()
    };

    const handleBuyToken = () => {
        // buyToken()
    };

    const handleCopy = () => {
        // CopyToClipboard()
    };

    return (
        <div id="mission" className='buy' data-opacity="100">
            <section
                id="BUYCRPS"
                className="vs-team-wrapper space-top space-extra-bottom z-index-common custom-paddings"
            >
                <div className="container z-index-common">
                    {/* Title Invite Note */}
                    <div className="row title-area justify-content-center text-center text-lg-start">
                        <div className="col-lg-auto">
                            <h2 className="sec-title">BUY DKC</h2>
                            <div className="sec-shape">
                                <div className="sec-shape_bar" />
                                <div className="sec-shape_bar" />
                                <div className="sec-shape_bar" />
                            </div>
                        </div>
                        <div className="col-lg-12 mt-20">
                            <div className="note">
                                <p>
                                    <img src={handIcon} width="54" alt="Invite" className='hand-icon' />
                                    <i>
                                        Invite your friend to presale / IDO and get 3% DKC token of the
                                        amount invested by your friend.
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
         
    
                    {/* Card Wrapper */}
                    <div className="buycrps-card">
                           {/* <section    id="howplay"
         className="vs-about-wrapper"
         style={{
           padding: '20px 0',
           backgroundImage: `url(${bgHowToBuy})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center center',
         }}> */}
                        {/* Left Form Column */}
                        <div className="buycrps-form">
                            <label className="form-label">Enter USDT amount</label>
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <input
                                        value={usdtAmount}
                                        onChange={handleUsdtChange}
                                        className="form-control"
                                        type="text"
                                        placeholder="0.00"
                                    />
                                    <span className="input-unit">USDT</span>
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        value={crpsAmount}
                                        onChange={handleCrpsChange}
                                        className="form-control"
                                        type="text"
                                        placeholder="0.00"
                                    />
                                    <span className="input-unit">DKC</span>
                                </div>
                            </div>

                            <h5>DKC to Receive</h5>

                            <div className="payment-method">
                                <div className="select-with-icon">
                                    <span className="icon-container">
                                        <img src={bnbIcon} alt="BSC USDT" />
                                    </span>
                                    <select className="chain-select">
                                        <option>Binance Smart Chain USDT (BEP20)</option>

                                    </select>
                                </div>
                            </div>



                            <div id="buttons">
                                <button
                                    className="btn connect-btn"
                                    onClick={handleConnectWallet}
                                >
                                    <FaQrcode style={{ marginRight: '10px' }} />
                                    CONNECT WALLET
                                </button>
                                <button
                                    className="btn buy-btn"
                                    style={{ display: 'none' }}
                                    onClick={handleBuyToken}
                                >
                                    Buy DKC
                                </button>
                            </div>
                        </div>

                        {/* Right Stats Column */}
                        <div className="buycrps-stats">
                            <div className="stats-header">
                                <img src={tokenLogo} alt="Token" />
                                <h4>Your Referral Link</h4>
                            </div>
                            <p className="ref-link">
                                {walletAddress
                                    ? referralLink
                                    : 'Connect Wallet to Get Referral Link.'}
                            </p>
                            <button
                                className="btn copy-btn"
                                style={{ display: walletAddress ? 'inline-block' : 'none' }}
                                onClick={handleCopy}
                            >
                                Copy
                            </button>

                            <div className="custom-table">
                                <div className="row-item">
                                    <span>Wallet :</span>
                                    <span className="value">{walletAddress}</span>
                                </div>
                                <div className="row-item">
                                    <span>Total Referrals :</span>
                                    <span className="value">{totalReferrals} People</span>
                                </div>
                                <div className="row-item">
                                    <span>Total Purchase :</span>
                                    <span className="value">{totalPurchase} USDT</span>
                                </div>
                                <div className="row-item">
                                    <span>Direct Income :</span>
                                    <span className="value">{directIncome} DKC</span>
                                </div>
                                <div className="row-item">
                                    <span>Total Token :</span>
                                    <span className="value">{totalToken} DKC</span>
                                </div>
                                <div className="row-item">
                                    <span>Phase I presale :</span>
                                    <span className="value">1.00 USDT/1 DKC (1 Lakh)</span>
                                </div>
                                <div className="row-item">
                                    <span>Phase II presale :</span>
                                    <span className="value">2.00 USDT/1 DKC (2 Lakh)</span>
                                </div>
                            </div>
                        </div>
                         {/* </section> */}
                    </div>
                 
                </div>
            </section>
        </div>
    );
};

export default Buycrps;
