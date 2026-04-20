import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const leftBenefits = [
  { icon: "⚡", label: "Delivered in a Week" },
  { icon: "◻", label: "Modern Clean Design" },
  { icon: "◎", label: "Mobile First" },
];

const rightBenefits = [
 
  { icon: "₹", label: "Transparent Pricing" },
  { icon: "✦", label: "Personal Support" }, 
  { icon: "↗", label: "SEO Ready" },
];

// animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const itemRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

const CTASection = () => {
  return (
    <section id="contact" className="cta-section">

      {/* LEFT */}
      <motion.div
        className="cta-side cta-left"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {leftBenefits.map((item, i) => (
          <motion.div
            key={i}
            className="benefit benefit--left"
            variants={itemLeft}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="benefit__icon">{item.icon}</span>
            <span className="benefit__label">{item.label}</span>
            <span className="benefit__arrow">→</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CENTER */}
      <motion.div
        className="cta-center"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
      >

        <motion.h2
          className="cta-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Ready to start <br />
          <em>your project?</em>
        </motion.h2>


<MotionLink
  to="/call"
  className="cta-btn"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
>
  Get in touch →
</MotionLink>

        <motion.p
          className="cta-trust"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          ✦ Response within 24 hours · Free first call
        </motion.p>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="cta-side cta-right"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {rightBenefits.map((item, i) => (
          <motion.div
            key={i}
            className="benefit benefit--right"
            variants={itemRight}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="benefit__arrow">←</span>
            <span className="benefit__label">{item.label}</span>
            <span className="benefit__icon">{item.icon}</span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default CTASection;