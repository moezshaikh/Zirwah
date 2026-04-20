import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-overlay">

           <motion.h1
  className="about-title"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  About <em>Us</em>
</motion.h1>

          {/* Top Content */}
          <motion.div
            className="about-top"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           {/* LEFT */}
  <div className="about-left">
  <h2>
    More Than Just <em className="about-heading-em">Design</em>
  </h2>

  <p>
  Your brand is more than visuals — it’s your story, your effort, and your vision.
</p>

<p>
  We help translate that into a digital presence that feels authentic and works effectively.
</p>
</div>

  {/* RIGHT (NEW) */}
  <div className="about-right">
<p>
  We work with creators who care deeply about their craft but struggle to present it with clarity and confidence.
</p>

<p>
  Every project is designed to feel right, build trust, and reflect your true value, so people see you differently and choose you with confidence.
</p>
</div>    </motion.div>

    

        </div>
      </section>

    </>
  );
};

export default About;