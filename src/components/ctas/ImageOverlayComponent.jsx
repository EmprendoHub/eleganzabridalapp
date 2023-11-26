import React from 'react';
import HeroTextComponent from '../texts/HeroTextComponent';

const ImageOverlayComponent = ({ imageoverlay, lang }) => {
  return (
    <div>
      <section
        className={`hero w-full h-[90dvh] bg-gray-100 text-center  bg-[url('/images/eleganza_bridal_dresses.webp')]  bg-cover bg-no-repeat bg-center sm:bg-left bg-fixed`}
      >
        <div className=" backdrop-brightness-50 w-full h-full items-center  justify-center flex px-40 md:px-10 my-20">
          <div className="container mx-auto">
            <div className="container mx-auto">
              <HeroTextComponent
                title={imageoverlay.title}
                subtitle={imageoverlay.subtitle}
                btnText={imageoverlay.btnText}
                btnUrl={`/${lang}/catalog`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageOverlayComponent;
