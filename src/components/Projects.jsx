import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Project
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.a
          href="https://deskripsi-ai-khaki.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/deskripsi-ai.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>DeskripsiAI</h3>
          <p>
            AI product description generator untuk penjual online. Isi detail
            produk, pilih tone, dan dapatkan deskripsi siap pakai untuk
            marketplace seperti Shopee dan Tokopedia.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>Gemini API</span>
            <span>TailwindCSS</span>
            <span>FramerMotion</span>
            <span>TypeScript</span>
            <span>Prompt Engineering</span>
            <span>AI API Integration</span>
          </div>
        </motion.a>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/commingsoon.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Coming soon</h3>
          <p>Coming soon</p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/commingsoon.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Coming soon</h3>
          <p>Coming soon</p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
