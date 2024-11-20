"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import quizicon from "@/images/quiz-icon.webp";
import repicon from "@/images/Contact_rep_icon.webp";
import celebrateicon from "@/images/celebrate_icon.webp";
import InnerSectionContainer from "../container/InnerSectionContainer";

const QuizComponent = ({ quiz }) => {
  return (
    <InnerSectionContainer>
      <div className=" justify-center items-center text-center mx-auto py-20">
        <div className="w-[50%] maxmd:w-[90%]  mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl maxmd:text-3xl font-playfair-display mb-2"
          >
            {quiz.title}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className=""
          >
            {quiz.subtitle}
          </motion.p>
        </div>
        <div className="max-w-[70%] mx-auto flex flex-row maxmd:flex-col mt-5">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col p-4 items-center w-1/3 maxmd:w-full"
          >
            <Image
              src={quizicon}
              width={80}
              height={80}
              alt="Quiz"
              className="w-auto h-auto"
            />
            <h2 className="text-2xl font-playfair-display my-2">
              {quiz.boxone.title}
            </h2>
            <p className="text-xs">{quiz.boxone.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col p-4 items-center w-1/3 maxmd:w-full"
          >
            <Image
              src={repicon}
              width={80}
              height={80}
              alt="Lets Talk"
              className="w-auto h-auto"
            />
            <h2 className="text-2xl font-playfair-display my-2">
              {quiz.boxtwo.title}
            </h2>
            <p className="text-xs">{quiz.boxtwo.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col p-4 items-center w-1/3 maxmd:w-full"
          >
            <Image
              src={celebrateicon}
              width={80}
              height={80}
              alt="Enjoy"
              className="w-auto h-auto"
            />
            <h2 className="text-2xl font-playfair-display my-2">
              {quiz.boxthree.title}
            </h2>
            <p className="text-xs">{quiz.boxthree.subtitle}</p>
          </motion.div>
        </div>
        <div className="max-w-full  mx-auto mt-10">
          <button className="py-3 px-6 rounded-full bg-black text-white hover:bg-white hover:text-black duration-700 text-sm uppercase font-semibold">
            {quiz.btntxt}
          </button>
        </div>
      </div>
    </InnerSectionContainer>
  );
};

export default QuizComponent;
