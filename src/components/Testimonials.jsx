import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: " They transformed our vision into a digital reality. Their attention to detail and design sensibility is truly unmatched.",
    author: "Elena Rostova",
    role: "CEO, Aura Skincare",
  },
  {
    quote: " They understood our brand language from day one and delivered something we couldn't have imagined ourselves.",
    author: "Margot Veil",
    role: "Founder, Veil Atelier",
  },
  {
    quote: "The final result exceeded every expectation. A studio that thinks in terms of brand, not just design.",
    author: "James Osei",
    role: "Creative Director, Aurum Jewels",
  },
];

/* ── Animation variants ──────────────────────────────────── */

// Section orchestrates children on scroll entry
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

// Generic fade-up for header, mark, nav
const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// Quote card: blur + drift on enter/exit
const quoteVariants = {
  enter: {
    opacity: 0,
    y: 22,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: 'blur(4px)',
    transition: { duration: 0.32, ease: [0.4, 0, 1, 1] },
  },
};

// Each child inside the quote card staggers in
const quoteChildVariants = {
  enter: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

/* ── Component ───────────────────────────────────────────── */

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 5500);
  };

  const advance = () => {
    setActive(prev => (prev + 1) % testimonials.length);
  };

  const goTo = (index) => {
    if (index === active || isAnimating) return;
    setActive(index);
    resetTimer();
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const t = testimonials[active];

  return (
    <motion.section
      className="testimonials"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Grid texture background */}
      <div className="testimonials__grid-bg" aria-hidden="true" />

      <div className="testimonials__container">

        {/* Eyebrow */}
        <motion.div className="testimonials__header" variants={fadeUpVariants}>
<span className="testimonials__eyebrow">
  Client <em>Voices</em>
</span>
        </motion.div>

        {/* Decorative opening mark — enters once with section */}
        <motion.div
          className="testimonials__mark"
          aria-hidden="true"
          variants={fadeUpVariants}
        >
          "
        </motion.div>

        {/* Swapping quote content */}
        <motion.div className="testimonials__body" variants={fadeUpVariants}>
          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={active}
              className="testimonials__quote-wrapper"
              variants={quoteVariants}
              initial="enter"
              animate="visible"
              exit="exit"
              onAnimationStart={() => setIsAnimating(true)}
            >
              <motion.blockquote
                className="testimonials__quote"
                variants={quoteChildVariants}
              >
                {t.quote}
              </motion.blockquote>

              <motion.footer
                className="testimonials__footer"
                variants={quoteChildVariants}
              >
                <div className="testimonials__divider" />
                <p className="testimonials__author">{t.author}</p>
                <p className="testimonials__role">{t.role}</p>
              </motion.footer>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dot navigation */}
        <motion.nav
          className="testimonials__nav"
          aria-label="Testimonial navigation"
          variants={fadeUpVariants}
        >
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              className={`testimonials__dot${i === active ? ' testimonials__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`View testimonial ${i + 1}`}
              animate={i === active ? { scale: 1.25 } : { scale: 1 }}
              whileHover={{ scale: 1.45 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            />
          ))}
        </motion.nav>

      </div>
    </motion.section>
  );
};

export default Testimonials;