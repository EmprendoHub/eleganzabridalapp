"use client"
import { motion } from "framer-motion"

const SectionTitle = ( { title, subtitle ,className="" } ) => {
    return (
          <div className={`w-[50%] md:w-[90%]  mx-auto ${className} `}>
                  <motion.h2 
                  initial={{y:50, opacity:0 }} 
                  whileInView={{y:0, opacity: 1 }} 
                  transition={{duration: 0.5}}
                  className=' font-playfair-display mb-2'>{title}</motion.h2>
                  <motion.p 
                  initial={{y:50, opacity:0 }} 
                  whileInView={{y:0, opacity: 1 }} 
                  transition={{duration: 0.7}}
                  className='text-base sm:text-sm'>{subtitle}</motion.p>
  
              </div>
    )
  }
  
  export default SectionTitle