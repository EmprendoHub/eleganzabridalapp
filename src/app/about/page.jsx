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

const AboutPage = () => {
 
  return (
    <div>
      
      <section className={`hero w-full h-[500px] bg-gray-100 text-center  bg-[url('/images/Eleganza-bridal-las-vegas.webp')]  bg-cover bg-no-repeat bg-center bg-fixed`} >
          <div className=' backdrop-brightness-50 w-full h-full  items-center  justify-center flex px-5'> 
            <div className="container mx-auto">
              <HeroTextComponent title={"About Us"} subtitle={"We are a passionate team dedicated to providing the best services."} />
            </div>
         </div>
        
      </section>
      <div className='flex flex-row w-[80%] md:w-full md:flex-col items-center mx-auto my-20 px-1'>
          <section className="text-center w-1/2 md:w-full">
            <div className="container mx-auto px-6 sm:px-3">
            <SectionTextComponent title={"Our Mission"} paraOne={"We strive to become the #1, one stop shop: for wedding dresses, tuxedos, quinceañera dresses, supplies, prom dresses, evening gowns, baptismal, and much more. Need more? We also plan your entire wedding,"} paraTwo={" quinceanera, special event, or banquets! We make your special day into an unforgettable event & transform the way you and your family celebrate special occasions."} btnText={"Contact Us"} btnUrl={"/contact"}/>
            
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
          <InnerSectionTextComponent title={"What Makes Us Tick"} paraOne={" Smiles inspire us to push through adversity, helping you achieve your dreams is our dream."}/>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Image src={`/images/bridal_ornament_eleganza_bridal.webp`} width={200} height={200}  alt="Team Member 1" className="mx-auto mb-4 w-32 h-32 rounded-full" />
              <h3 className="text-lg font-semibold font-poppins text-gray-800">Lupita Eleganza</h3>
          <p className="text-gray-600">Founder</p>
              <InnerSectionTextComponent paraOne={"We offer exceptionally unique designs, wide variety of sizes, Top notch partners - Discover how we can make you look amazing for your special day. But First and forempst were family, regular people just a dream, we pride ourselfs on being friendly, great listeners. Need to optimize your budget? We can make that stress go away and let you focus on smiling."} btnText={"Get in touch"} btnUrl={"/contact"}/>
              <div className='mt-10'/>
            </div>
          </div>
        </div>
      </section>
      <section className={`hero w-full h-[500px] bg-gray-100 text-center  bg-[url('/images/novio-poniendo-anillo-dedo-novia.webp')]  bg-cover bg-no-repeat bg-center bg-fixed`} >
        <div className=' backdrop-brightness-50 w-full h-full  items-center  justify-center flex px-40 md:px-10 my-20'> 
          <div className="container mx-auto">
              <div className="container mx-auto">
                <HeroTextComponent title={"What Makes Us Different"} subtitle={"exceptionally unique designs, wide variety of sizes, Top notch partners - Discover how we can make you look amazing for your special day. But First and forempst were family, regular people just a dream, we pride ourselfs on being friendly, great listeners. Need to optimize your budget? We can make that stress go away and let you focus on smiling."} btnText={"Get in touch"} btnUrl={"/contact"} />
              </div>
        </div>
        </div>
      </section>

      <div className='mt-20'>
        <InnerSectionTextComponent title={'What Our Customers Have To Say'} paraOne={'Dont you believe us? Take a look at what some of the hundreds of satisfied customers say about us.'}/>
        <ImageTestimonialComponent />
      </div>

      <QuizComponent />
     
    </div>
  )
}

export default AboutPage