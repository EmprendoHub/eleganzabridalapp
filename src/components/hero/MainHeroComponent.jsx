'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerone from '@/images/Eleganza-bridal-banner-one.webp';
import weddingbannertwo from '@/images/Hero-banner-quinces-dresses-1920x1080.webp';
import bannerthree from '@/images/Hero-banner-cocktail-dresses-1920x1080.webp';
import { PiCaretDoubleDown } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';

const MainHeroComponent = ({ mainhero, lang }) => {
  const settings = {
    pauseOnHover: false,
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 521,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className=" relative bg-gradient-to-t from-slate-100 to-white">
      <Slider {...settings} className="">
        <div className="w-full h-[80vh] relative">
          <div className="w-full h-full relative flex mx-auto items-center justify-center">
            <div className="flex w-full h-full">
              <Image
                src={bannerone}
                alt="bannerone"
                width={1000}
                height={1000}
                className=" object-cover object-center w-full h-full  bottom-[-50px] md:bottom-[0px]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[80vh] relative">
          <div className="w-full h-full relative flex mx-auto items-center justify-center">
            <div className="flex w-full h-full">
              <Image
                src={weddingbannertwo}
                width={1000}
                height={1000}
                alt="bannertwo"
                className=" object-cover object-top w-full h-full  bottom-[-50px] md:bottom-[0px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[80vh] relative">
          <div className="w-full h-full relative flex mx-auto items-center justify-center">
            <div className="flex w-full h-full">
              <Image
                src={bannerthree}
                width={1000}
                height={1000}
                alt="bannerthree"
                className=" object-cover object-top w-full h-full  bottom-[-50px] md:bottom-[0px]"
              />
            </div>
          </div>
        </div>
      </Slider>
      <Link href={'/#hero'}>
        <div className="w-full flex justify-center items-center ">
          <PiCaretDoubleDown className="text-5xl absolute -bottom-5 z-40 cursor-pointer hover:scale-110 duration-300 ease-in-out" />
        </div>
      </Link>
      <div className="absolute w-full h-[100px] bg-gradient-to-t from-white to-transparent bottom-0 left-0 z-[10]" />
    </div>
  );
};

export default MainHeroComponent;
