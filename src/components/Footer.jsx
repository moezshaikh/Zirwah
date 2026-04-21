import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        {/* Top Ornament */}
        <motion.div
          className="cs-bottom-ornament"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="cs-ornament-line cs-ornament-line--faint" />
          <span className="cs-bottom-label">
            The shift is closer than you think.
          </span>
          <span className="cs-ornament-line cs-ornament-line--faint" />
        </motion.div>

        {/* Logo */}
        <div className="footer-center">
          <div className="footer-logo">
            Zirwah Studio<span className="title-accent">.</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Studio. All rights reserved.</p>

          <div className="footer-socials">
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;