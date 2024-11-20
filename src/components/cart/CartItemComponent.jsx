import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/redux/shoppingSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://minio.salvawebpro.com:9000/eleganza-products/new/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const CartItemComponent = () => {
  const { productData } = useSelector((state) => state?.shopping);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="maxmd:hidden inline-flex items-center justify-between font-semibold bg-white py-3 px-5">
        <p className="text-black">Dress</p>
        <p className="">Model</p>
        <p className="flex items-center justify-end">Quantity</p>
      </div>
      {/* Generate product */}
      <div className="flex flex-col gap-y-2">
        {productData?.map((item) => (
          <div
            key={item?._id}
            className="w-full bg-white p-4 flex maxsm:flex-col flex-row items-center gap-4"
          >
            <div className="flex items-center gap-x-3 w-full ">
              <span
                onClick={() => dispatch(deleteProduct(item?._id))}
                className="text-lg hover:text-red-600 cursor-pointer duration-300"
              >
                <AiOutlineClose />
              </span>
              <Image
                loader={myLoader}
                src={item?.mainImageUrl}
                width={500}
                height={500}
                alt="product image"
                className="w-[50%] maxsm:w-full maxmd:w-2/3 h-30 object-cover"
              />
            </div>
            {/* Model Value */}
            <div className="w-full flex  justify-start maxsm:items-center maxsm:justify-center">
              {/* <p className='text-lg font-semibold'>
                                <FormatedPrice amount={item?.quantity * item.price}/>
                            </p> */}
              <p className="text-lg font-semibold">
                {`${item?.title.substring(0, 25)}...`}
              </p>
            </div>
            {/* quntity value */}
            <div className="flex  items-center justify-end gap-x-3 border-[1px] border-slate-300 py-2 px-4 w-auto">
              <p className="">Qty</p>
              <div className="flex items-center text-lg  w-20 justify-between">
                <span
                  onClick={() =>
                    dispatch(decreaseQuantity(item)) &&
                    toast.success(`${item.title} disminuyo en cantidad`, {
                      position: toast.POSITION.TOP_CENTER,
                      className: "foo-bar",
                      theme: "dark",
                      transition: Bounce,
                    })
                  }
                  className="cursor-pointer"
                >
                  <FiChevronLeft />
                </span>
                <span>{item?.quantity}</span>
                <span
                  onClick={() =>
                    dispatch(increaseQuantity(item)) &&
                    toast.success(`${item.title} incremento en cantidad`, {
                      position: toast.POSITION.TOP_CENTER,
                      className: "foo-bar",
                      theme: "dark",
                      transition: Bounce,
                    })
                  }
                  className="cursor-pointer"
                >
                  <FiChevronRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default CartItemComponent;
