import { motion } from "framer-motion";


const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding your brand & goals",
  },
  {
    num: "02",
    title: "Design",
    desc: "Crafting visuals & experience",
  },
  {
    num: "03",
    title: "Development",
    desc: "Building fast, scalable systems",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deploying & optimizing performance",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Process() {
  return (
    <section className="process">
      <div className="process__inner">

        {/* Header */}
        <motion.div
          className="process__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={titleVariants}
        >
          <h2 className="process__title">
            Our <em>Process</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="process__grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process__card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Ghost number */}
              <span className="process__ghost-num" aria-hidden="true">
                {step.num}
              </span>

             

              {/* Content */}
              <div className="process__content">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}