import React from 'react';
import { motion } from 'framer-motion';
import styles from './Landing.module.css';  // Import styles from CSS module
import Navbar from '../layout/Navbar';


const Landing = ({ isDarkMode }) => {
  // Animation Variants for Framer Motion
  const heroVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut', delay: 1, staggerChildren: 0.5 } }
  };

  const blobVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 2, ease: 'easeInOut', delay: 1.5, staggerChildren: 0.5 } }
  };

  const bgVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 2, ease: 'easeInOut', delay: 2 } }
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <Navbar />

      <motion.div className={styles.bgGradient} initial="hidden" animate="visible" variants={bgVariants}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="100%"
          id="blobSvg"
          filter="blur(20px)"
          style={{ opacity: 1 }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(216, 230, 60)' }} />
              <stop offset="100%" style={{ stopColor: 'rgb(214, 180, 252)' }} />
            </linearGradient>
          </defs>
          <motion.path
            id="blob"
            fill="url(#gradient)"
            d="M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z"
            animate={{
              d: [
                "M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z",
                "M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z",
                "M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z",
              ],
              transition: {
                repeat: Infinity,
                duration: 10,
              },
            }}
          />
        </svg>
      </motion.div>

      <motion.div className={styles.heroContainer}>
        <motion.div className={styles.hero} initial="hidden" animate="visible" variants={heroVariants}>
          <h1>
            Nawiri <br />Healthcare <br />cares about <br />you.
          </h1>
        </motion.div>
      </motion.div>
      <motion.div className={`${styles.blob} ${styles.blob1}`} initial="hidden" animate="visible" variants={blobVariants}></motion.div>
      <motion.div className={`${styles.blob} ${styles.blob2}`} initial="hidden" animate="visible" variants={blobVariants}></motion.div>
      <motion.div className={`${styles.blob} ${styles.blob3}`} initial="hidden" animate="visible" variants={blobVariants}>+</motion.div>
    </div>
  );
};

export default Landing;
