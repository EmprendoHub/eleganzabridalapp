import React from 'react';
import ProductCardComponent from '../productCard/ProductCardComponent';

const ProductCatalog = ({ data, lang }) => {
  return (
    <section className="mx-auto mt-5 w-[80%] md:w-[100%]">
      <div></div>

      <div className=" mx-auto flex justify-center items-center w-full ">
        <div className="flex md:flex-col flex-row  w-[90%]">
          <div className="w-full justify-center items-center gap-x-5">
            <main className="grid grid-cols-4 md:grid-cols-2  xxs:grid-cols-1 gap-5">
              {
                //display the products
                data?.map((product) => (
                  <ProductCardComponent
                    key={product._id}
                    product={product}
                    lang={lang}
                  />
                ))
              }
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
