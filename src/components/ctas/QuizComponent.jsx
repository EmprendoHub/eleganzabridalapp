"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import quizicon from "@/images/quiz-icon.webp"
import repicon from "@/images/Contact_rep_icon.webp"
import celebrateicon from "@/images/celebrate_icon.webp"
import InnerSectionContainer from '../container/InnerSectionContainer'

const QuizComponent = () => {
    return (
        <InnerSectionContainer>
             <div  className=' justify-center items-center text-center mx-auto py-20'>
                <div className='w-[50%] md:w-[90%]  mx-auto'>
                    
                    <motion.h2 
                    initial={{y:50, opacity:0 }} 
                    whileInView={{y:0, opacity: 1 }} 
                    transition={{duration: 0.5}}
                    className='text-5xl md:text-3xl font-playfair-display mb-2'>Find The Perfect Wedding Dress</motion.h2>
                    <motion.p 
                    initial={{y:50, opacity:0 }} 
                    whileInView={{y:0, opacity: 1 }} 
                    transition={{duration: 0.7}}
                    className=''>At Eleganza Bridal, we not only sell dresses, but we are also part of a community of people who value beauty, elegance, and celebrating special moments. Follow us on social media to stay up to date with the latest trends and to join our community.</motion.p>
    
                </div>
                <div className='max-w-[70%] mx-auto flex flex-row md:flex-col mt-5'>
                    <motion.div 
                    initial={{y:50, opacity:0 }} 
                    whileInView={{y:0, opacity: 1 }} 
                    transition={{duration: 0.9}}
                    className='flex flex-col p-4 items-center w-1/3 md:w-full'>
                        <Image src={quizicon} width={80} height={80} alt='Quiz' className='w-auto h-auto'/>
                        <h2 className='text-2xl font-playfair-display my-2'>Take our Quiz</h2>
                        <p className='text-xs'>Take our quiz and find out how to choose the perfect dress for Your Quinceñera, Wedding or Special Occation.</p>
                    </motion.div>
                    <motion.div 
                    initial={{y:50, opacity:0 }} 
                    whileInView={{y:0, opacity: 1 }} 
                    transition={{duration: 0.9}} className='flex flex-col p-4 items-center w-1/3 md:w-full'>
                        <Image src={repicon} width={80} height={80} alt='Lets Talk' className='w-auto h-auto'/>
                        <h2 className='text-2xl font-playfair-display my-2'>Talk to a Fashion Expert</h2>
                        <p className='text-xs'>After you take our quiz and explore our catalog, message or call  one of our fashion experts and get answers to all your questions and concerns.</p>
                    </motion.div>
                    <motion.div 
                    initial={{y:50, opacity:0 }} 
                    whileInView={{y:0, opacity: 1 }} 
                    transition={{duration: 0.9}} className='flex flex-col p-4 items-center w-1/3 md:w-full'>
                        <Image src={celebrateicon} width={80} height={80} alt='Enjoy' className='w-auto h-auto'/>
                        <h2 className='text-2xl font-playfair-display my-2'>Enjoy your Special Day</h2>
                        <p className='text-xs'>Once you are sure you found the perfect dress, you place an order for delivery or stop by and pick it up at Eleganza Bridals Las Vegas  location </p>
                    </motion.div>
                </div>
                <div className='max-w-full  mx-auto mt-10'>
                    
                <button className="py-3 px-6 rounded-full bg-black text-white hover:bg-white hover:text-black duration-700 text-sm uppercase font-semibold">Take the Quiz</button>
    
                </div>
                    
            </div>
        </InnerSectionContainer>
      )
}

export default QuizComponent