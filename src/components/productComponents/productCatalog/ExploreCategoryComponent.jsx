import SectionTitle from '@/components/texts/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ExploreCategoryComponent = ({ explorecats, lang }) => {
  return (
    <div className="px-10 py-20 sm:px-1 sm:pt-1">
      <div className="mx-auto">
        <SectionTitle
          className="pb-10 text-5xl md:text-3xl text-center"
          title={explorecats.title}
          subtitle={explorecats.subtitle}
        />
      </div>
      <div className="flex flex-row lg:flex-wrap items-center">
        <div className="flex flex-row sm:flex-col w-full">
          <Link
            href={`/${lang}/catalog?category=wedding`}
            className="colone p-4 cursor-pointer hover:scale-[105%] duration-300 ease-in-out w-full "
          >
            <div className="box relative mx-auto items-center justify-center flex ">
              <Image
                src={
                  'https://minio.salvawebpro.com:9000/eleganza-products/new/J824W_2_800x62.webp?w=1080&q=75'
                }
                width={400}
                height={400}
                alt="explore dresses category"
                className="w-full min-h-[500px] max-h-[600px] object-cover "
              />
              <span className="absolute z-50 bg-white text-black uppercase py-2 px-5 sm:px-2 sm:text-xs top-1/2 font-playfair-display tracking-wide">
                {explorecats.catone}
              </span>
            </div>
          </Link>
          <Link
            href={`/${lang}/catalog?category=evening`}
            className="coltwo p-4 cursor-pointer hover:scale-[105%] duration-300 ease-in-out  w-full "
          >
            <div className="box relative mx-auto items-center justify-center flex ">
              <Image
                src={
                  'https://minio.salvawebpro.com:9000/eleganza-products/new/CD0177_champagne_1_800x207.webp?w=1080&q=75'
                }
                width={400}
                height={400}
                alt="explore dresses category"
                className="w-full min-h-[500px] max-h-[600px] object-cover "
              />
              <span className="absolute z-50 bg-white text-black uppercase py-2 px-5 sm:px-2 sm:text-xs top-1/2 font-playfair-display tracking-wide">
                {explorecats.cattwo}
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-row sm:flex-col w-full">
          <Link
            href={`/${lang}/catalog?category=prom`}
            className="colthree p-4 cursor-pointer hover:scale-[105%] duration-300 ease-in-out  w-full "
          >
            <div className="box object-fit relative mx-auto items-center justify-center flex">
              <Image
                src={
                  'https://minio.salvawebpro.com:9000/eleganza-products/new/cd286_neon-green_800x203.webp?w=1080&q=75'
                }
                width={400}
                height={400}
                alt="explore dresses category"
                className="w-full min-h-[500px] max-h-[600px] object-cover "
              />
              <span className="absolute z-50 bg-white text-black uppercase py-2 px-5 sm:px-2 sm:text-xs top-1/2 font-playfair-display tracking-wide">
                {explorecats.catthree}
              </span>
            </div>
          </Link>
          <Link
            href={`/${lang}/catalog?category=ballgown`}
            className="colfour p-4 cursor-pointer hover:scale-[105%] duration-300 ease-in-out  w-full "
          >
            <div className="box relative mx-auto items-center justify-center flex">
              <Image
                src={
                  'https://minio.salvawebpro.com:9000/eleganza-products/new/dancing-queen-1769-sweetheart-lace-pleated-ballgown-ball-gowns-xs-hunter-green-32299393056851_50f6d514-dea1-4311-ab8a-d31addd2b161_1800x1800.webp?w=1080&q=75'
                }
                width={400}
                height={400}
                alt="explore dresses category"
                className="w-full min-h-[500px] max-h-[600px] object-cover "
              />
              <span className="absolute z-50 bg-white text-black uppercase py-2 px-5 sm:px-2 sm:text-xs top-1/2 font-playfair-display tracking-wide">
                {explorecats.catfour}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategoryComponent;
