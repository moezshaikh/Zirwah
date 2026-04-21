import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav 
      className="zh-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        <div className="logo">
  <a href="/" onClick={closeMenu} className="logo-cursive">Z</a>
</div>

        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop & Mobile Links */}
        <ul className={`zh-nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#work" className="nav-link" onClick={closeMenu}>Work</a></li>
          <li><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>

      {/* Optional Overlay for premium feel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;