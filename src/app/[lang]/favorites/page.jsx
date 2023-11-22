'use client';

import React from 'react';
import FavoritesContainer from '@/components/container/FavoritesContainer';
import { useDispatch, useSelector } from 'react-redux';
import CartItemComponent from '@/components/cart/CartItemComponent';
import { resetCart } from '@/redux/shoppingSlice';
import Link from 'next/link';
import PaymentFormComponent from '@/components/forms/PaymentFormComponent';

const FavoritesPage = () => {
  const { productData } = useSelector((state) => state?.shopping);
  const dispatch = useDispatch();
  return (
    <FavoritesContainer className="p-12 md:p-4 sm:p-2 w-[80%] md:w-[95%]">
      {productData.length > 0 ? (
        <FavoritesContainer>
          <h2 className="text-2xl font-semibold mb-2 pl-4">Wishlist</h2>
          <div className="flex flex-col gap-5">
            <CartItemComponent />

            <div className="flex items-center pr-6 justify-end">
              <button
                onClick={() => dispatch(resetCart())}
                className="bg-pink-700 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-black hover:text-white duration-200 rounded-md"
              >
                Empty Favorites
              </button>
            </div>
            {/* Payment Cart */}
            <PaymentFormComponent />
          </div>
        </FavoritesContainer>
      ) : (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
          <p className="border-[1px] border-pink-700 w-full p-2 text-center">
            Your favorites list is currently empty
          </p>
          <Link href={'/catalog'}>
            <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-pink-700 duration-500">
              Return to Catalog
            </button>
          </Link>
        </div>
      )}
    </FavoritesContainer>
  );
};

export default FavoritesPage;
