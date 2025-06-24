import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../images/n1.jpg';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaBars
} from 'react-icons/fa';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="vs-header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container no-gutters top-content">
          <p className="header-text">
            WELCOME TO <span className="highlight">DKC</span>
          </p>
          <div className="social-icons">
            <Link to="/" className="icon twitter">
              <FaTwitter size={28} />
            </Link>
            <Link to="/" className="icon facebook">
              <FaFacebookF size={28} />
            </Link>
            <Link to="/" className="icon instagram">
              <FaInstagram size={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <div className="container no-gutters nav-content">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="CORPUS Logo" />
          </div>

          {/* Desktop Menu */}
          <nav className="main-menu">
            <ul className="menu-list">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/aboutus">ABOUT US</Link></li>
              <li><Link to="/howtobuy">HOW TO BUY</Link></li>
              <li><Link to="/tokenomics">TOKENOMICS</Link></li>
              <li><Link to="/whitepaper">WHITEPAPER</Link></li>
              <li><Link to="/contract">CONTRACT</Link></li>
              <li><Link to="/buycrps" className="buy-link">BUY DKC</Link></li>
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMobileOpen(i => !i)}
            aria-label="Toggle menu"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="mobile-menu">
            <ul className="menu-list">
              <li>
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={() => setMobileOpen(false)}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/howtobuy" onClick={() => setMobileOpen(false)}>
                  HOW TO BUY
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" onClick={() => setMobileOpen(false)}>
                  TOKENOMICS
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  WHITEPAPER
                </Link>
              </li>
              <li>
                <Link to="/contract" onClick={() => setMobileOpen(false)}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  to="/buycrps"
                  className="buy-link"
                  onClick={() => setMobileOpen(false)}
                >
                  BUY DKC
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
