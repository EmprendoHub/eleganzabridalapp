import React from 'react';
import SectionTitle from '../texts/SectionTitle';
import BoxesSectionTitle from '../texts/BoxesSectionTitle';
import Image from 'next/image';
import fabdress from '@/images/fabulous_dresss.webp';
import wedicon from '@/images/dress_evening.png';
import quinceicon from '@/images/dress_quinces.png';
import tuxicon from '@/images/tuxedo_icon.png';
import ImgAnimation from '../texts/ImgAnimation';

const FabulousComponent = ({ fabulous }) => {
  return (
    <div className="relative h-full py-20">
      <SectionTitle
        className="pb-10 text-5xl md:text-3xl text-center"
        title={fabulous.title}
        subtitle={fabulous.subtitle}
      />
      <div className="mt-34 flex flex-row md:flex-col mx-auto pb-14 sm:mt-0 w-[80%] sm:w-full px-2 relative items-center">
        <div className="md:mt-10 sm:my-10 flex w-1/2 h-[50%] md:w-full md:h-[50%]  bg-gradient-to-b from-pink-500 to-pink-700 rounded-s-full rounded-t-full justify-end items-end">
          <ImgAnimation
            img={fabdress}
            classname="md:w-[65%] w-[68%] h-auto float-right"
          />
        </div>
        <div className="flex flex-col w-1/2 md:w-full md:pl-0 pl-20">
          <div className="flex flex-row gap-x-5 my-3">
            <div className="">
              <Image
                src={wedicon}
                width={50}
                height={50}
                alt="Fabulous Dress"
                className="w-[50px] h-auto"
              />
            </div>
            <div className="flex-col w-3/4">
              <BoxesSectionTitle
                className="pb-1 text-2xl md:text-3xl text-left"
                title={fabulous.boxone.title}
                subtitle={fabulous.boxone.subtitle}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-5 my-3">
            <div className="">
              <Image
                src={quinceicon}
                width={50}
                height={50}
                alt="Fabulous Dress"
                className="w-[50px] h-auto"
              />
            </div>
            <div className="flex-col w-3/4">
              <BoxesSectionTitle
                className="pb-1 text-2xl md:text-3xl text-left"
                title={fabulous.boxtwo.title}
                subtitle={fabulous.boxtwo.subtitle}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-5 my-3">
            <div className="">
              <Image
                src={tuxicon}
                width={50}
                height={50}
                alt="Fabulous Dress"
                className="w-[50px] h-auto"
              />
            </div>
            <div className="flex-col w-3/4">
              <BoxesSectionTitle
                className="pb-1 text-2xl md:text-3xl text-left"
                title={fabulous.boxthree.title}
                subtitle={fabulous.boxthree.subtitle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabulousComponent;
