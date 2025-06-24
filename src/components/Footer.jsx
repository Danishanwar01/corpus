
import React from 'react';
import '../css/Footer.css';

import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import twitterIcon from '../images/twitter.png';
import bscscanIcon from '../images/bscscan.png';

const socialLinks = [
  { href: '#', icon: facebookIcon, alt: 'Facebook' },
  { href: '#', icon: instagramIcon, alt: 'Instagram' },
  { href: '#', icon: twitterIcon, alt: 'Twitter' },
  { href: '#', icon: bscscanIcon, alt: 'BscScan' },
];

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Background GIF or static image */}
      <div className="footer-background" />

      <footer id="contact" className="footer-content">
        <h4 className="widget_title">Join Our Community</h4>
        <div className="social-icons">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-thumb"
            >
              <img src={link.icon} alt={link.alt} />
            </a>
          ))}
        </div>
        <p className="copyright">
          © Copyright 2025 <span className="text-theme2">CORPUS</span>. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
