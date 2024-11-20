"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={() => goTop()}
      className=" btn-scrollTop bg-white drop-shadow-md fixed bottom-4 text-2l z-[30] cursor-pointer right-4 bg-none rounded-full p-2 maxsm:p-1 border-none"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <FaArrowCircleUp className="text-xl maxsm:text-lg text-pink-600" />
    </button>
  );
};

export default BackToTopButton;
