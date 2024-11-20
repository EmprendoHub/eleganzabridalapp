"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import QuoteForm from "../forms/QuoteForm";

const SendQuoteComponent = ({
  templateid,
  serviceid,
  publickey,
  contactform,
  lang,
}) => {
  const { productData } = useSelector((state) => state?.shopping);
  const [totalQty, settotalQty] = useState(0);
  return (
    <div>
      <section className="py-10 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col maxmd:flex-row gap-4 maxlg:gap-8">
            <main className="maxmd:w-2/3">
              <article className="border border-gray-200 bg-white shadow-sm rounded p-4 maxlg:p-6 mb-5">
                <h2 className="text-xl font-semibold mb-5">
                  Quote information
                </h2>

                <div className="grid maxsm:grid-cols-2 gap-4 mb-6"></div>
                <QuoteForm
                  templateID={templateid}
                  serviceID={serviceid}
                  publicKEY={publickey}
                  contactform={contactform}
                  productData={productData}
                  lang={lang}
                />
              </article>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SendQuoteComponent;
