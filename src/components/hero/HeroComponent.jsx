"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bannerone from '@/images/Quinces_Dresses_banner_image.webp'
import weddingbannertwo from '@/images/Wedding_Dresses_banner_mage.webp'
import bannerthree from '@/images/Groom_Tuxedos_banner_image.webp'
import logobanner1 from "@/images/Ladivine_logo.webp"
import logobanner2 from "@/images/Love21_logo.webp"
import logobanner3 from "@/images/Morilee_logo.webp"
import logobanner4 from "@/images/princesa_logo.webp"
import logobanner5 from "@/images/rachel-allen.webp"
import dividerline from "@/images/diver_line.webp"
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerTextComponent from "../texts/BannerTextComponent";
import SectionContainer from "../container/SectionContainer";

const HeroComponent = ({mainhero, lang}) => {
    const NextArrow = (props) => {
        const { onClick } = props 
        return (
            <div
              className="p-3 bg-slate-100 hover:text-pink-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
              onClick={onClick}
            >
              <PiCaretLeftLight />
            </div>
          );
    }
    const PrevArrow = (props) => {
        const { onClick } = props 
        return (
            <div
              className="p-3 bg-slate-100 hover:text-pink-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
              onClick={onClick}
            >
              <PiCaretRightLight />
            </div>
          );
        
    }
    const settings = {
        pauseOnHover: false,
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 521,
            settings: {
              arrows: false,
            }
          }
        ]
    };
    const settings_slidertwo = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    };

  return (
    <SectionContainer className="relative  bg-gradient-to-t from-pink-500 to-pink-700">
        <Slider {...settings}>
          <div className="w-full h-full relative">
            <div className="flex flex-row md:flex-col relative">
                    <div className="flex ">
                      <BannerTextComponent title={mainhero.bannerone.title} titleDesc={mainhero.bannerone.subtitle} btntext={mainhero.herobtn} btnUrl={`/${lang}/catalog`}/>
                    </div>
                    <div className="flex w-full h-full relative">
                        <Image 
                              src={bannerone} 
                              alt="bannerone" 
                              className="w-full h-full relative bottom-[-50px] md:bottom-[0px]"
                              priority 
                          />
                    </div>
            </div>
          </div>
          
          <div className="w-full h-full relative">
            <div className="flex flex-row md:flex-col w-full h-full relative">
                  <div className="flex">
                    <BannerTextComponent title={mainhero.bannertwo.title} titleDesc={mainhero.bannertwo.subtitle} btntext={mainhero.herobtn} btnUrl={`/${lang}/catalog`}/>
                  </div>
                  <div className="flex w-full h-full">
                      <Image 
                            src={weddingbannertwo} 
                            alt="bannertwo" 
                            className="w-full h-full relative  bottom-[-50px] md:bottom-[0px]" 
                        />
                  </div>
            </div>
          </div>
          
          <div className="w-full h-full relative">
            <div className="flex flex-row md:flex-col relative">
                <div className="flex ">
                   <BannerTextComponent title={mainhero.bannerthree.title} titleDesc={mainhero.bannerthree.subtitle} btntext={mainhero.herobtn} btnUrl={`/${lang}/catalog`}/>
                </div>
                <div className="flex w-full h-full">
                    <Image 
                          src={bannerthree} 
                          alt="bannerthree" 
                          className="w-full h-full relative bottom-[-50px] md:bottom-[0px]" 
                      />
                </div>
            </div>
            
            
           
          </div>
          
          
        </Slider>
        
        <div className="absolute w-full h-28 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10"/>
        <div className="absolute text-white justify-center items-center p-4 w-[80%] md:w-[90%] mx-auto h-24  sm:h-16 md:h-20 lg:h-20 bg-black -bottom-10 right-0 left-0 z-10 rounded-xl">
        <Slider {...settings_slidertwo} className="align-middle h-full">
            <div className="h-full flex flex-row align-middle">
              <Image 
                  src={logobanner1} 
                  
                  alt="logobannerone" 
                  className="w-[50%] mx-auto pt-3 relative " 
              />
              <Image 
                  src={dividerline} 
                  alt="dividerline" 
                  className="mx-auto absolute top-1 " 
              />
            </div>
            <div className="h-full align-middle">
              <Image 
                  src={logobanner2} 
                  
                  alt="logobannerone" 
                  className="w-[50%] m-auto pt-2 relative " 
              />
              <Image 
                  src={dividerline} 
                  alt="dividerline" 
                  className="mx-auto absolute top-1 " 
              />
            </div>
            <div className="h-full align-middle">
              <Image 
                  src={logobanner3} 
                  
                  alt="logobannerone" 
                  className="w-[50%] m-auto pt-5 md:pt-2 relative " 
              />
              <Image 
                  src={dividerline} 
                  alt="dividerline" 
                  className="mx-auto absolute top-1 " 
              />
            </div>
            <div className="h-full align-middle">
              <Image 
                  src={logobanner4} 
                  
                  alt="logobannerone" 
                  className="w-[50%] m-auto pt-3 md:pt-2 relative" 
              />
              <Image 
                  src={dividerline} 
                  alt="dividerline" 
                  className="mx-auto absolute top-1 " 
              />
            </div>
            <div className="h-full align-middle">
              <Image 
                  src={logobanner5} 
                  
                  alt="logobannerone" 
                  className="w-[50%] h-full m-auto pt-5 md:pt-3 relative" 
              />
              <Image 
                  src={dividerline} 
                  alt="dividerline" 
                  className="mx-auto absolute top-1 " 
              />
            </div>
            <div className="h-full align-middle">
              <Image 
                  src={logobanner3} 
                  
                  alt="logobannerone" 
                  className="w-[50%] h-full m-auto pt-5 md:pt-3 relative" 
              />
              <Image 
                  src={dividerline} 
                  alt="dividerline" 
                  className="mx-auto absolute top-1 " 
              />
            </div>
            
        </Slider>
          </div>
    </SectionContainer>
  )
}

export default HeroComponent