import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Data ──────────────────────────────────────────────────── */
const problems = [
  "Your brand looks inconsistent everywhere you show up.",
  "Clients ask for your portfolio — and you scramble to find it.",
  "You're undercharging because your presence doesn't reflect your worth.",
];

const solutions = [
  "A website that introduces you before you say a word.",
  "A brand that attracts the clients you actually want.",
  "A presence you're proud to share — with everyone.",
];

/* ── Animation Variants ────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

const ornamentVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.1, ease },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease },
  },
});

const columnVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
};

const dividerVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.3, ease },
  },
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.45, ease },
  },
};

/* ── Component ─────────────────────────────────────────────── */
export default function CenteredStatement() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const animate = isInView ? "visible" : "hidden";

  return (
    <section
      className="cs-section"
      ref={sectionRef}
      aria-label="Problem and solution"
    >


      {/* ── Headline ── */}
      <motion.div
        className="cs-headline-wrap"
        variants={fadeUp(0.2)}
        initial="hidden"
        animate={animate}
      >
        <h2 className="cs-headline">
          Your work deserves{" "}
          <em className="cs-headline-em">more than just Instagram</em>
        </h2>
      </motion.div>

      {/* ── Gold rule ── */}
      <motion.div
        className="cs-rule"
        variants={ornamentVariants}
        initial="hidden"
        animate={animate}
        aria-hidden="true"
      />

      {/* ── Two columns ── */}
      <div className="cs-columns" role="list">

        {/* Problem column */}
        <motion.div
          className="cs-col cs-col--problem"
          variants={columnVariants}
          initial="hidden"
          animate={animate}
          role="listitem"
          aria-label="Current pain points"
        >
          <motion.p className="cs-col-label" variants={itemVariants}>
            The Bottleneck
          </motion.p>
          <ul className="cs-list" role="list">
            {problems.map((item, i) => (
              <motion.li
                key={i}
                className="cs-list-item cs-list-item--problem"
                variants={itemVariants}
              >
                <span className="cs-marker cs-marker--problem" aria-hidden="true">—</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Center divider */}
        <div className="cs-divider-wrap" aria-hidden="true">
          <motion.div
            className="cs-divider-line"
            variants={dividerVariants}
            initial="hidden"
            animate={animate}
            style={{ originY: 0 }}
          />
          <motion.div
            className="cs-divider-arrow"
            variants={arrowVariants}
            initial="hidden"
            animate={animate}
          >
            ✦
          </motion.div>
          <motion.div
            className="cs-divider-line"
            variants={dividerVariants}
            initial="hidden"
            animate={animate}
            style={{ originY: 1 }}
          />
        </div>

        {/* Solution column */}
        <motion.div
          className="cs-col cs-col--solution"
          variants={columnVariants}
          initial="hidden"
          animate={animate}
          role="listitem"
          aria-label="What becomes possible"
        >
          <motion.p className="cs-col-label cs-col-label--solution" variants={itemVariantsRight}>
            The Breakthrough
          </motion.p>
          <ul className="cs-list" role="list">
            {solutions.map((item, i) => (
              <motion.li
                key={i}
                className="cs-list-item cs-list-item--solution"
                variants={itemVariantsRight}
              >
                <span className="cs-marker cs-marker--solution" aria-hidden="true">✦</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>

      {/* ── Bottom ornament ── */}
      
    </section>
  );
}