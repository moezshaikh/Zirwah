import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">

    <div className="footer-top">
      <div className="footer-socials">
        <a href="https://www.instagram.com/zirwahstudio/" className="social-link">Instagram</a>
        <a href="https://wa.me/919970622941" className="social-link">Whatsapp</a>
        <a href="#" className="social-link">LinkedIn</a>
      </div>
    </div>

    {/* Center Logo */}
    <div className="footer-center">
      <div className="footer-logo">
       Zirwah Studio<span className="title-accent">.</span>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Studio. All rights reserved.</p>
    </div>

  </div>
</footer>
  );
};

export default Footer;
