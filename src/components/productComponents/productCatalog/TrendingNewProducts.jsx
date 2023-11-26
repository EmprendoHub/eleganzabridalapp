'use client';
import SectionTitle from '@/components/texts/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ProductCardComponet from '../productCard/ProductCardComponent';

const myLoader = ({ src, width, quality }) => {
  return `https://minio.salvawebpro.com:9000/eleganza-products/new/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const TrendingNewProducts = ({ trending, lang }) => {
  const cat_title = [
    { id: 1, category: trending.btnone },
    { id: 2, category: trending.btntwo },
    { id: 3, category: trending.btnthree },
    { id: 4, category: trending.btnfour },
  ];
  const [allProducts, setAllProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('All');

  const activatedTab = (category) => {
    setActiveTab(category);
    if (category === 'boda') {
      category = 'wedding';
    }
    if (category === 'gala') {
      category = 'evening';
    }
    const productsArray = Object.values(allProducts);
    const randommized = shuffleArray(productsArray);
    const filteredProductData = productsArray.filter(
      (prod) => prod.category === category
    );
    if (category === 'All') {
      setTrendingProducts(randommized);
    } else {
      setTrendingProducts(filteredProductData);
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const URL_ALL = `${process.env.NEXTAUTH_URL}/api/products`;
        //const URL_ALL = `http://localhost:3000/api/productstrend`;
        const res_all = await fetch(URL_ALL, { cache: 'no-store' });
        const data_trending = await res_all.json();
        //let sliced_products = data_trending.products.slice(0, 50)
        let sliced_products = data_trending.products.map((product) => {
          return {
            _id: product._id,
            title: product.title,
            description: product.description,
            titulo: product.titulo,
            descripcion: product.descripcion,
            category: product.category,
            subCat: product.subCat,
            tags: product.tags,
            brand: product.brand,
            isNewest: product.isNewest,
            isFeatured: product.isFeatured,
            price: product.price,
            salesPrice: product.salesPrice,
            mainImageUrl: product.mainImageUrl,
            imgsSrc: product.imgsSrc,
            sizes: product.sizes,
            rating: product.rating,
            quantity: product.quantity,
            sku: product.sku,
          };
        });
        setAllProducts(sliced_products);
        setTrendingProducts(sliced_products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="mx-auto flex flex-col justify-center items-center pt-20">
      <SectionTitle
        className="pb-10 text-5xl md:text-3xl text-center"
        title={trending.title}
        subtitle={trending.subtitle}
      />

      <ul className="grid grid-cols-4 gap-4 my-2 px-10 md:gap-2 md:px-2">
        {cat_title.map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                activeTab == item.category
                  ? 'active'
                  : 'border-b border-gray-500'
              } cursor-pointer text-center  py-2 px-6 sm:px-2 text-sm text-black sm:text-xs uppercase font-playfair-display`}
              onClick={() => activatedTab(item.category)}
            >
              {item.category}
            </li>
          );
        })}
      </ul>
      <motion.div
        className="w-full  flex flex-row md:flex-col gap-4 my-10 px-10 sm:px-2 mx-auto justify-center items-center object-fill"
        layout
      >
        {trendingProducts.slice(0, 4).map((product, index) => {
          return (
            <AnimatePresence key={index}>
              <motion.div
                className="w-full"
                key={product._id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCardComponet
                  product={product}
                  key={product._id}
                  lang={lang}
                />
              </motion.div>
            </AnimatePresence>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TrendingNewProducts;
