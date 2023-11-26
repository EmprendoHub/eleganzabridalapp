'use client';
import React, { useState } from 'react';
import MainMenuComponent from './MainMenuComponent';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useSelector } from 'react-redux';
import MobileMenuComponent from './mobilenav/MobileMenuComponent';

const MotionHeaderComponent = ({ lang, header }) => {
  const { productData, orderData } = useSelector((state) => state.shopping);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <>
      <motion.div
        variants={{ hidden: { y: 0 }, visible: { y: '-100%' } }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="header-class bg-white shadow-sm text-black font-bodyFont text-xl sticky top-0 z-[50]  transform-none duration-300 ease-in-out w-full mx-auto  py-3 px-20 md:px-2"
      >
        <MainMenuComponent
          header={header}
          lang={lang}
          className={
            'relative self-stretch flex flex-row items-center justify-start  mx-auto pl-5 sm:pl-1'
          }
        />
      </motion.div>
      <MobileMenuComponent
        header={header}
        lang={lang}
        productData={productData}
      />
    </>
  );
};

export default MotionHeaderComponent;
