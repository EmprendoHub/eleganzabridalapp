'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const ImageRightMotion = ({ imgSrc, imgWidth, imgHeight, className }) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Image
        src={imgSrc}
        width={imgWidth}
        height={imgHeight}
        alt="motion image"
        className={className}
      />
    </motion.div>
  );
};

export default ImageRightMotion;
