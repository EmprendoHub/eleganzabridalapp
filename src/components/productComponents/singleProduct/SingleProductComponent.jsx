'use client';
import React, { useRef } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shoppingSlice';
import { IoIosStar } from 'react-icons/io';
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import ProductCardComponet from '@/components/productComponents/productCard/ProductCardComponent';

const myLoader = ({ src, width, quality }) => {
  return `https://minio.salvawebpro.com:9000/eleganza-products/new/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const SingleProductComponent = ({
  ctx,
  lang,
  singleprod,
  product,
  trendingProducts,
}) => {
  const notify = () => {
    toast.success(`${product?.title.substring(0, 15)}... added successfully!`, {
      position: toast.POSITION.TOP_CENTER,
      className: 'foo-bar',
      theme: 'dark',
      transition: Bounce,
    });
  };

  const id = ctx.params.id;
  const imageRef = useRef(null);

  const setImgPreview = (image) => {
    let new_image =
      'https://minio.salvawebpro.com:9000/eleganza-products/new/' + image;
    imageRef.current.srcset = new_image;
  };

  const dispatch = useDispatch();

  const starRating = (props) => {
    if (props) {
      let stars = props;
      if (stars == 0 || stars == 1 || stars == 1.5) {
        stars = 1;
      } else if (stars == 2 || stars == 2.5) {
        stars = 2;
      } else if (stars == 3 || stars == 3.5) {
        stars = 3;
      } else if (stars == 4 || stars == 4.5) {
        stars = 4;
      } else if (stars == 5) {
        stars = 5;
      }
    }

    const starArray = Array.from({ length: props }, (_, index) => (
      <span key={index} className="text-yellow-500">
        <IoIosStar />
      </span>
    ));
    return <>{starArray}</>;
  };

  return (
    <div className="container-class sm:w-full">
      <div className="w-[80%] sm:w-full mx-auto wrapper-class grid grid-cols-2 md:grid-cols-1 gap-5 bg-white p-4 rounded-lg">
        <div className="w-full flex justify-center">
          <div className="images-grouped-class flex flex-col max-w-full">
            <div className="flex justify-center items-center align-middle h-full ">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="p-8 sm:p-2"
              >
                <Image
                  loader={myLoader}
                  width={500}
                  height={500}
                  ref={imageRef}
                  src={
                    product?.mainImageUrl
                      ? product.mainImageUrl
                      : 'RB3163-195.webp'
                  }
                  alt="product image"
                  className="rounded-lg object-cover w-auto h-auto"
                />
              </motion.div>
            </div>

            <div className="flex flex-row gap-4 mt-2 px-10 sm:px-2 image-slider-class h-full">
              <Swiper
                // install Swiper modules
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                autoplay={true}
                onSwiper={(swiper) => ''}
                onSlideChange={() => ''}
                className="w-full "
              >
                {product?.imgsSrc &&
                  product.imgsSrc.map((image, index) => (
                    <SwiperSlide key={index}>
                      <a className="slider-link cursor-pointer">
                        <Image
                          onClick={() => setImgPreview(image)}
                          loader={myLoader}
                          width={150}
                          height={150}
                          src={image ? image : ''}
                          alt="product image"
                          className="rounded-lg w-full h-150 p-1"
                        />
                      </a>
                    </SwiperSlide>
                  ))}
                <SwiperSlide>
                  <a
                    className="slider-link cursor-pointer"
                    onClick={() => setImgPreview(product?.mainImageUrl)}
                  >
                    <Image
                      loader={myLoader}
                      width={150}
                      height={150}
                      src={
                        product?.mainImageUrl
                          ? product.mainImageUrl
                          : 'RB3163-195.webp'
                      }
                      alt="product image"
                      className="rounded-lg w-full h-150 p-1"
                    />
                  </a>
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-10">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-5xl md:text-3xl font-semibold">
              {lang === 'en' && product?.title
                ? product?.title
                : '' || (lang === 'es' && product?.titulo)
                ? product?.titulo
                : ''}
            </p>
            <div className="text-xl font-semibold">
              <div className="stars flex items-center gap-x-1">
                {starRating(product?.rating)}
                <span className="font-medium text-xl">{product?.rating}</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 description-class"
          >
            {lang === 'en' && product?.description
              ? product?.description
              : 'Our dresses are more than garments; they are statements of style, elegance, and individuality. Make your unforgettable moments even more special with our stunning collection. Choose timeless elegance and modern charm to elevate your style for weddings, proms, and sweet sixteens.' ||
                (lang === 'es' && product?.descripcion)
              ? product?.descripcion
              : 'Nuestros vestidos son más que prendas; son declaraciones de estilo, elegancia e individualidad. Haz que tus momentos inolvidables sean aún más especiales con nuestra impresionante colección. Elija elegancia atemporal y encanto moderno para elevar su estilo para bodas, graduaciones y quinceañeras.'}
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-sm text-lightText flex flex-col"
          >
            <span>
              SKU: <span className="text-darkText">{product?.sku}</span>
            </span>
            <span>
              {singleprod.brand}:{' '}
              <span className="text-darkText">{product?.brand}</span>
            </span>
            <span>
              {singleprod.category}:{' '}
              <span className="text-darkText">{product?.category}</span>
            </span>
            <span>
              {singleprod.tags}:{' '}
              <span className="text-darkText">{product?.tags}</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center cursor-pointer group"
          >
            {/* add to cart button */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              className="bg-pink-600 flex flex-row items-center justify-between px-4 py-2 text-sm gap-x-4 tracking-wide rounded-full text-slate-100 hover:bg-darkText hover:text-white duration-500"
              onClick={() => dispatch(addToCart(product)) && notify()}
            >
              {singleprod.btntext}
              <span className="text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-pink-500 duration-200  rounded-full py-2">
                <MdFavoriteBorder />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="px-8 sm:px-4 my-8 w-[80%] lg:w-full mx-auto">
        <p className="text-xl py-1 font-semibold">{singleprod.trendigtxt}</p>
        <div className="grid xsm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-4 mt-2">
          {trendingProducts?.map((product) => (
            <ProductCardComponet
              key={product._id}
              lang={lang}
              product={product}
            />
          ))}
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default SingleProductComponent;
