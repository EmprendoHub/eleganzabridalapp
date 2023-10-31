"use client"
import React from 'react'
import Slider from "react-slick";
import Image from "next/image";
import SectionTitle from '../texts/SectionTitle';
import { testimonials } from '@/constants/testimoniolsdata';
import { IoIosStar } from "react-icons/io";
import avatar from "@/images/testimonial-1-avatar.png"

const TestimonialComponent = ({ item }) => {
   
  const starRating = (props) => {
    const starArray = Array.from({ length: props }, (_, index) => (
    
      <span key={index} className="text-yellow-500">
        <IoIosStar />
      </span>
    ));
    return (
        <>
          {starArray}
        </>
      );
    
}

  const settings = {
      className: "center mx-auto flex ",
      dots:false,
      centerMode: true,
      infinite: true,
      centerPadding: "1px",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: "40px",
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    };
return (
  <div className='my-40'>
  <h2><SectionTitle className='mb-10 text-5xl md:text-3xl text-center' title='Trusted by Thousands of 
Happy Customer' subtitle='Nothing fills us with more joy than hearing the stories of our satisfied customers. Here is what some of them have said about their experience at Eleganza Bridal:'/></h2>
  <Slider {...settings} className=" m-auto">
    
    {
              testimonials.map((testimonial, index) => {

                return (
                    <div key={index} >
                    
                      <div className="p-5 flex flex-col relative top-[30.34px] rounded-lgi bg-blue-100 w-[90%] md:w-[80%]  h-[400px] md:h-[350px] sm:h-[380px] text-dimgray-200">
                          <div className="rate flex-row">
                              <div className="stars flex items-center gap-x-1">{starRating(testimonial.rating)} 
                                <span className='font-medium text-2xl'>{testimonial.rating}
                                </span>
                              </div>
                             
                          </div>
                          <div className="max-w-full">
                          <p className="m-0 p-3 text-lg sm:text-sm leading-[118%] font-normal text-silver-100  flex">
                              {testimonial.message}
                            </p>
                          </div>
                        
                          <div className="author flex flex-row">
                            <Image width={80} height={80} quality={100}
                              className="flex flex-row pl-3  object-cover mr-4"
                              alt=""
                              src={avatar}
                            />
                          <div className="flex flex-col">
                              <div className="leading-[146%] sm:text-xs md:text-xs font-medium text-darkgray-100 inline-block">
                                {testimonial.position}
                                </div>
                                <div className="leading-[123%] sm:text-xs md:text-xs font-medium font-barlow-condensed text-gainsboro-300 inline-block ">
                                  {testimonial.name}
                              </div>
                          </div>
                          </div>
                          <h2 className="m-0 absolute bottom-10 right-5 text-53xl leading-[68.5%] font-medium text-center inline-block w-[95.09px] h-[85.03px]">
                            <span className="font-poppins text-9xl">❞</span>
                          </h2>
                      </div>
                    </div>
                )
              })
            }
  </Slider>
</div>
)
}

export default TestimonialComponent