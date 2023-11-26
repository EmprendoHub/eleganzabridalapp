import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import firstimage from "@/images/Amelia-Wilson.png"
import secondtimage from "@/images/Erick-Romero.png"
import thridimage from "@/images/Jacqueline-Lugo.png"
import fourthtimage from "@/images/Janice-Eleana-Gzm.png"
import siximage from "@/images/Marcella-Galaz.png"
import seventhimage from "@/images/Miryam-Montoya.png"
import eigthimage from "@/images/Monica-Horner.png"
import ImageSliderCard from './ImageSliderCard';

const imagesArray = [
    firstimage,
    secondtimage,
    thridimage,
    fourthtimage,
    firstimage,
    siximage,
    seventhimage,
    eigthimage
]
const ImageTestimonialComponent = () => {

    const settings = {
        className: "center mx-auto flex ",
        dots:true,
        lazyLoad: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
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
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

  
  return (
     
        <div className="relative">
        
        <Slider {...settings} >
            {imagesArray.map((img, index) => <ImageSliderCard img={img} key={index}/>
                    )}
        </Slider>
           
        </div>
  )
}

export default ImageTestimonialComponent