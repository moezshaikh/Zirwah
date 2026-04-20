import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import noorImg from '../assets/noor.png';
import sassyImg from '../assets/jew.png';
import irahImg from '../assets/irah.png';
import hennaImg from '../assets/mehndi.png';
import cuddleImg from '../assets/image.png';
/* ─── Data ─────────────────────────────────────────── */
const clientProjects = [
  {
    id: 'noor-arts',
    title: 'Noor Arts',
    subtitle: 'Calligraphy · Portfolio Website',
    year: '2024',
    index: '01',
    description:
      'An elegant digital platform for Islamic calligraphy — tradition distilled into a modern, contemplative experience. Built around stillness, negative space, and the geometry of the letterform.',
    tags: ['Branding', 'Web Design', 'Typography'],
    palette: '#2c2420',
    liveUrl: "https://noor-jtay.vercel.app/"
  },
  {
    id: 'sassy-classy',
    title: 'Sassy & Classy',
    subtitle: 'Jewellery · E-Commerce',
    year: '2024',
    index: '02',
    description:
      'Premium presentation for a jewellery brand — every product a centrepiece. A dark, desire-driven aesthetic with seamless cart flows and editorial product photography integration.',
    tags: ['E-Commerce', 'Product Design', 'UI/UX'],
    palette: '#1e1c24',
    liveUrl: "https://sassy-n-classyyy.vercel.app/"
  },
];

const conceptProjects = [
  {
    id: 'irah',
    title: 'Irah',
    subtitle: 'Boutique · Fashion Website',
    year: '2024',
    description: 'Refined minimalism for a modern clothing boutique — form follows fabric.',
    liveUrl: "https://irah-by-iqra-nasir-bw5j860.public.builtwithrocket.new/homepage#contact"
  },
  {
    id: 'henna-artist',
    title: 'Henna Artist',
    subtitle: 'Artist · Personal Portfolio',
    year: '2024',
    description: 'A personal portfolio for a self-taught mehndi artist — intricate, warm, and deeply personal.',
    liveUrl: "https://mehendiartistry-uupnn35.public.builtwithrocket.new"
  },
  {
    id: 'cuddle-co',
    title: 'Cuddle & Co.',
    subtitle: 'Gifting · E-Commerce',
    year: '2024',
    description: 'A curated gifting platform for birthdays, anniversaries, and slow, special moments.',
     liveUrl: "https://cuddle-co24-sd3mt81.public.builtwithrocket.new/homepage"
  },
];

/* ─── Placeholder image fills (warm neutrals per project) ─── */
const heroImages = {
  'noor-arts': noorImg,
  'sassy-classy': sassyImg,
};

const mosaicImages = {
  irah: irahImg,
  'henna-artist': hennaImg,
  'cuddle-co': cuddleImg,
};

/* ─── Decorative Letterform (background) ─── */
const GlyphDecor = () => (
  <svg
    className="hero-glyph"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="150" cy="150" r="148" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <circle cx="150" cy="150" r="110" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    <path
      d="M 150 30 Q 220 90 210 150 Q 200 210 150 240 Q 100 270 70 220 Q 40 170 80 130 Q 110 90 150 30Z"
      stroke="currentColor"
      strokeWidth="0.8"
      opacity="0.12"
      fill="none"
    />
  </svg>
);

/* ─── Mosaic Card ─── */
const MosaicCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="mosaic-card"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <div className="mosaic-image"
  style={{
    backgroundImage: `url(${mosaicImages[project.id]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
        <motion.div
          className="mosaic-overlay"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="mosaic-overlay-desc">{project.description}</p>
        </motion.div>

      </div>

      <div className="mosaic-info">
        <div>
          <p className="mosaic-title">{project.title}</p>
          <p className="mosaic-subtitle">{project.subtitle}</p>
        </div>
<a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="badge badge-view"
>
  View Live
</a>

      </div>
    </motion.div>
  );
};

/* ─── Main Component ─────────────────────────────────────── */
const FeaturedWork = () => {
  const [activeHero, setActiveHero] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerProject, setDrawerProject] = useState(null);
  const timerRef = useRef(null);

  /* Auto-cycle hero every 5 s */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveHero(prev => (prev + 1) % clientProjects.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleHeroNav = (idx) => {
    clearInterval(timerRef.current);
    setActiveHero(idx);
    timerRef.current = setInterval(() => {
      setActiveHero(prev => (prev + 1) % clientProjects.length);
    }, 5000);
  };

  const openDrawer = (project) => {
    setDrawerProject(project);
    setDrawerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  };

  const hero = clientProjects[activeHero];

  return (
    <section className="featured-work" id="work">

      {/* ── Section Header ── */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-header-row">
  <h2 className="section-title">
    Our <em className="section-title-em">projects</em>
  </h2>
</div>


      </motion.div>

      {/* ── CLIENT TIER LABEL ── */}
      <motion.p
        className="tier-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
      </motion.p>

      {/* ── Hero Spotlight ── */}
      <div className="hero-spotlight">
        <AnimatePresence mode="wait">
          <motion.div
            key={hero.id}
            className="hero-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Image panel */}
            <div
  className="hero-image-panel"
  style={{
    backgroundImage: `url(${heroImages[hero.id]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
><div className="hero-overlay"></div>
              <GlyphDecor />
              <div className="hero-image-index">{hero.index}</div>
              <span className="badge client hero-badge">Client Work</span>
            </div>

            {/* Info panel */}
            <div className="hero-info-panel">
              <div className="hero-info-inner">
                <p className="hero-eyebrow">{hero.subtitle} · {hero.year}</p>
                <h3 className="hero-project-title">{hero.title}</h3>
                <p className="hero-description">{hero.description}</p>


                <a
  href={hero.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="hero-cta"
  aria-label={`View live site for ${hero.title}`}
>
  <span>View Live</span>
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</a>
              </div>

              {/* Hero nav dots */}
              <div className="hero-nav">
                {clientProjects.map((p, i) => (
                  <button
                    key={p.id}
                    className={`hero-dot ${i === activeHero ? 'active' : ''}`}
                    onClick={() => handleHeroNav(i)}
                    aria-label={`Go to ${p.title}`}
                  />
                ))}
                <span className="hero-nav-label">{activeHero + 1} / {clientProjects.length}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── CONCEPT TIER LABEL ── */}
      <motion.p
        className="tier-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginTop: '3.5rem' }}
      >
        <span className="tier-dot concept" />
        Concept &amp; Demo Projects
      </motion.p>

      {/* ── Mosaic Grid ── */}
      <div className="mosaic-grid">
        {conceptProjects.map((project, i) => (
          <MosaicCard
            key={project.id}
            project={project}
            index={i}
          />
          
        ))}
      </div>

    </section>
  );
};

export default FeaturedWork;