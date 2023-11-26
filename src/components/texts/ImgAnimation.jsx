'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImgAnimation = ({ img, classname }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Image
        src={img}
        width={400}
        height={2000}
        alt="Fabulous Dress"
        className={`${classname}`}
      />
    </motion.div>
  );
};

export default ImgAnimation;
