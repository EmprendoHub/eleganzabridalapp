"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatsAppButton = ({ lang }) => {
  return (
    <>
      {lang === "es" ? (
        <Link
          className="fixed bottom-3 h-8 w-8 z-[20] cursor-pointer left-4 "
          href="https://wa.me/523532464146?text=Hello%2C%20I%20am%20interested%20in%20buying%20this%20domain%20eleganzabridal-lv.com."
          target="_blank"
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/images/Eleganza_whattsapp.webp"
            alt="WhatsApp"
            className="h-8 w-8"
          />
        </Link>
      ) : (
        <Link
          className="fixed bottom-3 h-8 w-8 z-[20] cursor-pointer left-4 "
          href="https://wa.me/523532464146?text=Hello%2C%20I%20am%20interested%20in%20buying%20this%20domain%20eleganzabridal-lv.com."
          target="_blank"
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/images/Eleganza_whattsapp.webp"
            alt="WhatsApp"
            className="h-8 w-8"
          />
        </Link>
      )}
    </>
  );
};

export default WhatsAppButton;
