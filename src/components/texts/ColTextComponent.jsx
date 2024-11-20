"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ColTextComponent = ({
  pretitle,
  title,
  subtitle,
  btnText,
  btnUrl = "/catalog",
}) => {
  return (
    <div>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] uppercase"
      >
        {pretitle}
      </motion.p>
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-6xl maxsm:text-4xl font-playfair-display tracking-normal"
      >
        {title}{" "}
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-sm pt-6 tracking-widest font-playfair-display"
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Link
          href={btnUrl}
          className="pt-3 uppercase text-sm border-b border-black hover:border-white duration-300"
        >
          {btnText}
        </Link>
      </motion.div>
    </div>
  );
};

export default ColTextComponent;
