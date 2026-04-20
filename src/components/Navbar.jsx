import React from 'react';
import { motion } from 'framer-motion';

  
const Navbar = () => {
  return (
    <motion.nav 
      className="zh-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.2, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        {/* REFINED LOGO GROUP */}
        
        <ul className="zh-nav-links">
          <li><a href="#work" className="nav-link">Work</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
