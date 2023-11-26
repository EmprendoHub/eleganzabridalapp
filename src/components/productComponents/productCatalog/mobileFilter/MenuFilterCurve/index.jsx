import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Index() {
  const initialPath = `M0 0 L0 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 0 0`;

  const targetPath = `M0 0 L0  ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 0 0`;

  // const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
  //   window.innerHeight
  // } Q-200 ${window.innerHeight / 2} 100 0`;
  // const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
  //   window.innerHeight
  // } Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={`${styles.svgCurve}`}>
      <motion.path
        variants={curve}
        className={`bg-black`}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}