import { motion } from 'framer-motion';


const services = [
  {
    title: 'Product Thinking',
    tag: 'Strategy',
    icon: '✦',
    slug: 'product',
  },
  {
    title: 'Brand Building',
    tag: 'Identity & Positioning',
    icon: '◈',
    slug: 'brand',
  },
  {
    title: 'Creative Direction',
    tag: 'Concept & Execution',
    icon: '◎',
    slug: 'creative',
  },

  // Core execution
  {
    title: 'UI/UX Design',
    tag: 'Experience Design',
    icon: '◈',
    slug: 'ui',
  },
  {
    title: 'Web Development',
    tag: 'Engineering',
    icon: '⟨/⟩',
    slug: 'dev',
  },
  {
    title: 'Mobile Apps',
    tag: 'iOS & Android',
    icon: '⬡',
    slug: 'mobile',
  },

  // Growth & support
  {
    title: 'Growth & Marketing',
    tag: 'Conversion & Strategy',
    icon: '↑',
    slug: 'growth',
  },
  {
    title: 'SEO & Performance',
    tag: 'Optimization',
    icon: '↑',
    slug: 'seo',
  },
  {
    title: 'Content & Storytelling',
    tag: 'Narrative',
    icon: '¶',
    slug: 'content',
  },

  // Optional (last, least priority)
  {
    title: 'Design Systems',
    tag: 'Components',
    icon: '⊞',
    slug: 'system',
  }
];

const ServiceCard = ({ service }) => (
  <div className={`service-card service-card--${service.slug}`}>
    <div className="service-icon-wrap">
      <span>{service.icon}</span>
    </div>
    <span className="service-name">{service.title}</span>
    <span className="service-dot" />
    <span className="service-tag">{service.tag}</span>
  </div>
);

const MarqueeRow = ({ direction = 'forward' }) => {
  const doubled = [...services, ...services];

  return (
    <div
      className={`marquee-track marquee-track--${direction}`}
      aria-hidden="true"
    >
      {doubled.map((service, i) => (
        <ServiceCard key={`${service.slug}-${i}`} service={service} />
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <motion.p
          className="services-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
        </motion.p>
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1], delay: 0.1 }}
        >
          Our <em>expertise</em>
        </motion.h2>
      </div>

      <motion.div
        className="marquee-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <MarqueeRow direction="forward" />
        <MarqueeRow direction="reverse" />
      </motion.div>
    </section>
  );
};

export default Services;