import React from 'react';
import ColTextComponent from '../texts/ColTextComponent';
import ImageRightMotion from '../images/ImageRightMotion';
import ImageLeftMotion from '../images/ImageLeftMotion';

const BrandComponent = ({ lang, brandsection }) => {
  return (
    <div className="py-40 sm:py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="box-one  w-full h-full flex flex-row sm:flex-col items-center justify-center">
          <div className="col-left  w-full h-full py-20 text-center">
            <ColTextComponent
              pretitle={brandsection?.sectionone?.pretitle}
              title={brandsection?.sectionone?.title}
              subtitle={brandsection?.sectionone?.subtitle}
              btnUrl={`/${lang}/catalog?category=prom&brand=Ladivine`}
              btnText={brandsection?.sectionone?.btnText}
            />
          </div>
          <div className="col-right w-full h-full">
            <ImageRightMotion
              imgSrc={'/images/Prom_and_evening_La_Divine_eleganza_bridal.webp'}
              imgWidth={800}
              imgHeight={800}
              className={'w-full'}
            />
          </div>
        </div>
        <div className="box-two  w-full h-full flex flex-row sm:flex-col-reverse items-center justify-center">
          <div className="col-right w-full h-full">
            <ImageLeftMotion
              imgSrc={'/images/Rachell_allen_bridal_dresses.webp'}
              imgWidth={800}
              imgHeight={800}
              className={'w-full'}
            />
          </div>
          <div className="col-left  w-full h-full py-20 text-center">
            <ColTextComponent
              pretitle={brandsection?.sectiontwo?.pretitle}
              title={brandsection?.sectiontwo?.title}
              subtitle={brandsection?.sectiontwo?.subtitle}
              btnUrl={`/${lang}/catalog?category=wedding&brand=Rachel+Allan`}
              btnText={brandsection?.sectiontwo?.btnText}
            />
          </div>
        </div>
        <div className="box-three  w-full h-full flex flex-row sm:flex-col items-center justify-center">
          <div className="col-left  w-full h-full py-20 text-center">
            <ColTextComponent
              pretitle={brandsection?.sectionthree?.pretitle}
              title={brandsection?.sectionthree?.title}
              subtitle={brandsection?.sectionthree?.subtitle}
              btnUrl={`/${lang}/catalog?category=quinces&brand=love21`}
              btnText={brandsection?.sectionthree?.btnText}
            />
          </div>
          <div className="col-right w-full h-full">
            <ImageRightMotion
              imgSrc={'/images/Love21_quinces_dresses.webp'}
              imgWidth={800}
              imgHeight={800}
              className={'w-full'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandComponent;
