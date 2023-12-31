'use client';
import React from 'react';
import { IoIosStar, IoMdHeart } from 'react-icons/io';
import Link from 'next/link';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shoppingSlice';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `https://minio.salvawebpro.com:9000/eleganza-products/new/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const ProductCardComponet = ({ product, lang }) => {
  const notify = () => {
    toast.success(`${product?.title.substring(0, 15)} added successfully!`, {
      position: toast.POSITION.TOP_CENTER,
      className: 'foo-bar',
      theme: 'dark',
      transition: Bounce,
    });
  };
  const dispatch = useDispatch();
  const startArray = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className="text-yellow-500">
      <IoIosStar />
    </span>
  ));

  return (
    <div key={product.id}>
      <div className="rounded-sm overflow-hidden">
        <Link href={`/product/${product._id}`} className="">
          <div className="relative">
            <Image
              priority
              loader={myLoader}
              src={product.mainImageUrl}
              alt="product image"
              width={1000}
              height={1000}
              className="min-w-full min-h-[500px] max-h-[500px] object-cover hover:scale-110 duration-300 ease-in-out rounded-t-lg "
            />
            {product?.isNewest && (
              <>
                <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-pink-700 group-hover:text-white duration-200">
                  {lang === 'en'
                    ? 'New Arrival'
                    : '' || lang === 'es'
                    ? 'Nueva llegada'
                    : ''}
                </span>
                {/* add to cart button */}
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black absolute top-2 left-3 px-2 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-pink-600 hover:text-white duration-500"
                  onClick={() => dispatch(addToCart(product)) && notify()}
                >
                  <IoMdHeart className="text-xl" />
                </motion.button>
              </>
            )}
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <p className="capitalize">
            {lang === 'en' && product?.title
              ? `${product?.title.substring(0, 60)}...`
              : '' || (lang === 'es' && product?.titulo)
              ? `${product?.titulo.substring(0, 60)}...`
              : ''}
          </p>
          <div className="flex items-center justify-between">
            {/* <div className="border-[1px] border-pink-700 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(product?.price, product?.oldPrice)}% off</p>
            </div> */}
            <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                {/* <FormatedPrice amount={product?.oldPrice} /> */}
              </p>
              <p className="font-semibold">{product?.brand}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* star icons */}
            <div className="flex items-center gap-x-1">{startArray}</div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default ProductCardComponet;
