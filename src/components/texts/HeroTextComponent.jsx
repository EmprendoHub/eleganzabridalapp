'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroTextComponent = ({ title, subtitle, btnText, btnUrl }) => {
  return (
    <div className="relativew-full h-full">
      <div className="flex h-full flex-col gap-y-6 justify-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-4xl font-bold text-white font-playfair-display "
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-base text-slate-100 font-poppins"
        >
          {subtitle}
        </motion.p>
        {btnText && btnUrl && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex gap-x-4 mt-2 justify-center"
          >
            <Link href={btnUrl}>
              <p className="py-3 px-8 rounded-full bg-black text-white hover:bg-white hover:text-black duration-700 text-sm uppercase font-semibold w-full">
                {btnText}
              </p>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroTextComponent;
