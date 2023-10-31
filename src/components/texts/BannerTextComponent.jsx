"use client"
import { motion } from "framer-motion";
import Link from "next/link";


const BannerTextComponent = ({ title, titleDesc }) => {
  return (
    <div className="lg:inline-block relative top-0 left-0 pl-20 pb-24 xsm:pl-0 md:pl-10 md:pb-3 w-full h-full">
        <div className="flex h-full flex-col gap-y-6 justify-center">
            <motion.h2 
            initial={{y:30, opacity:0 }} 
            whileInView={{y:0, opacity: 1 }} 
            transition={{duration: 0.5}}
            className="text-7xl lg:text-5xl font-bold text-white font-playfair-display ">
                {title}
            </motion.h2>
            <motion.p 
            initial={{y:40, opacity:0 }} 
            whileInView={{y:0, opacity: 1 }} 
            transition={{duration: 0.6}}
            className="text-lg lg:text-lg text-slate-100"
            >
                {titleDesc}
            </motion.p>
            <motion.div
                initial={{y:50, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.7}}
                className="flex gap-x-4 mt-2 "
            >
                <Link href="/catalog">
                    <p className="py-3 px-8 rounded-full bg-black text-white hover:bg-white hover:text-black duration-700 text-sm uppercase font-semibold w-full" >Explore Catalog</p>
                </Link>
                
               
            </motion.div>
        </div>
    </div>
  )
}

export default BannerTextComponent