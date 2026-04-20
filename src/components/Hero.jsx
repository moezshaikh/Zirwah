import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: customDelay, 
        duration: 0.8, 
        ease: [0.2, 1, 0.3, 1] 
      }
    })
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] }
    }
  };

  return (
<section className="hero-10-10">
      {/* 1. ATMOSPHERIC LAYERS */}
      <div className="zh-ambient-bg" /> {/* Charcoal radial gradient */}
      <div className="zh-technical-grid" /> {/* Variable opacity grid */}
      
      {/* 2. THE MONOLITH (ZIRWAH PEAK) */}
      <div className="zh-monolith-container">
        <div className="zh-peak-visual" /> {/* The crystalline structure with rim light */}
        <div className="zh-peak-glow" /> {/* Subtle volumetric bloom */}
      </div>

      <div className="container zh-content-wrap">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="zh-text-center"
        >
          {/* ARCHITECTURAL BRAND WATERMARK */}
          <motion.span 
            className="zh-bg-watermark"
            variants={itemVariants}
            custom={0.2}
          >
            ZIRWAH
          </motion.span>

          {/* PRIMARY HEADLINE - The Pedestal Effect */}
          <motion.h1 
            className="zh-monument-title"
            variants={itemVariants}
            custom={0.4}
          >
            For your brand,<br />
            built to <span className="zh-accent-italic">own</span> its market.
          </motion.h1>

          {/* THE LOGICAL BRIDGE */}
          <motion.p 
            className="zh-refined-description"
            variants={itemVariants}
            custom={0.6}
          >
            Strategy, visuals, and growth in one focused <br /> 
            engagement for lifestyle brands.
          </motion.p>

          {/* DIFFERENTIATED ACTIONS */}
          <motion.div 
            className="zh-action-hub"
            variants={itemVariants}
            custom={0.8}
          >

             <a href="#contact" className="zh-btn-gold">
    Start a project
  </a>
            <a href="#work" className="zh-btn-outline">
    Explore work
  </a>
          </motion.div>

          {/* 3. THE TRUST ENGINE (Social Proof) */}
          <motion.div 
            className="zh-trust-bar"
            variants={itemVariants}
            custom={1.0}
          >
            <span className="zh-trust-label">
  Working with emerging brands to build market presence
</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
