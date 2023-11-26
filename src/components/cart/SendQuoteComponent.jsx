"use client";

import CartContext from "@/context/CartContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const SendQuoteComponent = () => {
 
    const { cart } = useContext(CartContext);

    const [shippingInfo, setShippinInfo] = useState("");
  
    const setShippingAddress = (address) => {
      setShippinInfo(address._id);
    };
  
    const checkoutHandler = async () => {
      if (!shippingInfo) {
        return toast.error("Please select your shipping address");
      } else {
        // move to stripe checkoutpage
      }
    };
  
    const breadCrumbs = [
      { name: "Home", url: "/" },
      { name: "Cart", url: "/cart" },
      { name: "Order", url: "" },
    ];
  
    return (
      <div>
        <section className="py-10 bg-gray-50">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
              <main className="md:w-2/3">
                <article className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                  <h2 class="text-xl font-semibold mb-5">Shipping information</h2>
  
                  <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  
                  </div>
  
                  <Link
                    href="/address/new"
                    className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    <i className="mr-1 fa fa-plus"></i> Add new address
                  </Link>
  
                  <div className="flex justify-end space-x-2 mt-10">
                    <Link
                      href="/favorites"
                      className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                    >
                      Back
                    </Link>
                    <a
                      className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer"
                      onClick={checkoutHandler}
                    >
                      Checkout
                    </a>
                  </div>
                </article>
              </main>
              <aside className="md:w-1/3">
                <article className="text-gray-600" style={{ maxWidth: "350px" }}>
                  <h2 className="text-lg font-semibold mb-3">Summary</h2>
                  <ul>
                    <li className="flex justify-between mb-1">
                      <span>Amount:</span>
                      <span>${cart?.checkoutInfo?.amount}</span>
                    </li>
                    <li className="flex justify-between mb-1">
                      <span>Est TAX:</span>
                      <span>${cart?.checkoutInfo?.tax}</span>
                    </li>
                    <li className="border-t flex justify-between mt-3 pt-3">
                      <span>Total Amount:</span>
                      <span className="text-gray-900 font-bold">
                        ${cart?.checkoutInfo?.totalAmount}
                      </span>
                    </li>
                  </ul>
  
                  <hr className="my-4" />
  
                  <h2 class="text-lg font-semibold mb-3">Items in cart</h2>
  
                
                </article>
              </aside>
            </div>
          </div>
        </section>
      </div>
    )
    
}

export default SendQuoteComponent