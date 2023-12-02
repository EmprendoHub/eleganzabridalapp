'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const WhatsAppButton = ({ lang }) => {
  return (
    <>
      {lang === 'es' ? (
        <Link
          className="fixed bottom-8 h-14 w-14 z-[20] cursor-pointer left-8 "
          href="https://web.whatsapp.com/send?phone=17022412273&text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20vestidos."
          target="_blank"
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/images/Eleganza_whattsapp.webp"
            alt="WhatsApp"
            className="h-12 sm:h-10 w-12 sm:w-10"
          />
        </Link>
      ) : (
        <Link
          className="fixed bottom-8 h-14 w-14 z-[20] cursor-pointer left-8 "
          href="https://web.whatsapp.com/send?phone=17022412273&text=Hello%20I%20would%20like%20to%20get%20informacoin%20about%20a%20dress."
          target="_blank"
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/images/Eleganza_whattsapp.webp"
            alt="WhatsApp"
            className="h-12 sm:h-10 w-12 sm:w-10"
          />
        </Link>
      )}
    </>
  );
};

export default WhatsAppButton;
