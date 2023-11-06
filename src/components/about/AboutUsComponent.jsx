"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionTextComponent from '@/components/texts/SectionTextComponent';
import HeroTextComponent from '@/components/texts/HeroTextComponent';
// Placeholder images
import ImageTestimonialComponent from '@/components/sliders/ImageTestimonialComponent';
import InnerSectionTextComponent from '@/components/texts/InnerSectionTextComponent';
import QuizComponent from '@/components/ctas/QuizComponent';


const AboutUsComponent = ({about, quiz, lang}) => {
  return (
    <div>
      
      <section className={`hero w-full h-[500px] bg-gray-100 text-center  bg-[url('/images/Eleganza-bridal-las-vegas.webp')]  bg-cover bg-no-repeat bg-center bg-fixed`} >
          <div className=' backdrop-brightness-50 w-full h-full  items-center  justify-center flex px-5'> 
            <div className="container mx-auto">
              <HeroTextComponent title={about.hero.title} subtitle={about.hero.subtitle} />
            </div>
         </div>
        
      </section>
      <div className='flex flex-row w-[80%] md:w-full md:flex-col items-center mx-auto my-20 px-1'>
          <section className="text-center w-1/2 md:w-full">
            <div className="container mx-auto px-6 sm:px-3">
            <SectionTextComponent title={about.mission.title} paraOne={about.mission.parone} paraTwo={about.mission.partwo} btnText={about.mission.btntext} btnUrl={`/${lang}/contact`}/>
            
            </div>
          </section>

          <section className=" text-center w-1/2 md:w-full md:mt-5">
            <div className="container mx-auto">
              {/* Image */}
            <motion.div
                initial={{y:50, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 1.2}}
                className="flex gap-x-4 mt-2 justify-center"
            >
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <Image src="/images/Eleganza-bridal-storefront-las-vegas.webp" width={200} height={200}  alt="Bridal Dresses and More" className="mx-auto mb-4 w-full h-full" />
                  
                </div>
            </motion.div>
            </div>
          </section>

      </div>
      
     
      <section className="bg-gray-100 text-center py-12 w-[50%] md:w-[90%] p-5 mx-auto">
        <div className="container mx-auto">
          <InnerSectionTextComponent title={about.makes.title} paraOne={about.makes.parone}/>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Image src={`/images/bridal_ornament_eleganza_bridal.webp`} width={200} height={200}  alt="Team Member 1" className="mx-auto mb-4 w-32 h-32 rounded-full" />
              <h3 className="text-lg font-semibold font-poppins text-gray-800">Lupita Eleganza</h3>
          <p className="text-gray-600">{about.makes.founder}</p>
              <InnerSectionTextComponent paraOne={about.makes.paronetwo} btnText={about.makes.btntxt} btnUrl={`/${lang}/contact`}/>
              <div className='mt-10'/>
            </div>
          </div>
        </div>
      </section>
      <section className={`hero w-full h-[500px] bg-gray-100 text-center  bg-[url('/images/novio-poniendo-anillo-dedo-novia.webp')]  bg-cover bg-no-repeat bg-center bg-fixed`} >
        <div className=' backdrop-brightness-50 w-full h-full  items-center  justify-center flex px-40 md:px-10 my-20'> 
          <div className="container mx-auto">
              <div className="container mx-auto">
                <HeroTextComponent title={about.different.title} subtitle={about.different.subtitle} btnText={about.different.btntxt} btnUrl={`/${lang}/contact`} />
              </div>
        </div>
        </div>
      </section>

      <div className='mt-20'>
        <InnerSectionTextComponent title={about.testimonials.title} paraOne={about.testimonials.parone}/>
        <ImageTestimonialComponent />
      </div>

      <QuizComponent quiz={quiz} />
     
    </div>
  )
}

export default AboutUsComponent