"use client"
import SectionTitle from '@/components/texts/SectionTitle'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ProductCardComponet from '../productCard/ProductCardComponent'

const myLoader = ({ src, width, quality }) => {
    return `https://minio.salvawebpro.com:9000/eleganza-products/new/${src}?w=${width}&q=${quality || 75}`
  }
  
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
  
  const cat_title = [
    {"id":0, "category": "All"},
    {"id":1, "category": "wedding"},
    {"id":2, "category": "quinces"},
    {"id":3, "category": "tuxedo"},
    {"id":4, "category": "evening"},
]

const TrendingNewProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [trendingProducts, setTrendingProducts] = useState([])
    const [activeTab, setActiveTab] = useState("All")

    const activatedTab = (category) => {
        setActiveTab(category);
        
        const productsArray = Object.values(allProducts)
        const randommized = shuffleArray(productsArray)
        const filteredProductData = productsArray.filter((prod) => prod.category === category);
        if (category === "All") {
            setTrendingProducts(allProducts);
        }else {
            setTrendingProducts(filteredProductData);
        }
      }

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const URL_ALL = `/api/products`
                const res_all = await fetch(URL_ALL);
                const data_trending = await res_all.json()
                //let sliced_products = data_trending.products.slice(0, 50)
                let sliced_products = data_trending.products.map(( product ) => {
                return {
                    _id: product._id,
                    title: product.title,
                    description: product.description,
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
                    sku: product.sku
                }
                
                })
                // const productsArray = Object.values(data_trending.products)
                // const randommized = shuffleArray(productsArray)
                setAllProducts(sliced_products)
                setTrendingProducts(sliced_products);
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetails()
    }, [])

  return (
    <div className='mx-auto flex flex-col justify-center items-center w-3/4'>
        <SectionTitle className='pb-10 text-5xl md:text-3xl text-center' title='Our Collection of Fabulous Dresses' subtitle='Take alook at our latest arrivals and keep up with all the new fashion trends.'/>

        <ul className='grid grid-cols-5 gap-4 my-10 px-10'>
            {
              cat_title.map((item, index) => {
                return (
                  <li key={index} className={`${activeTab == item.category ? "active":"bg-gray-500"} cursor-pointer text-center bg-black py-2 px-6 rounded-sm text-white sm:text-xs`} onClick={() => activatedTab(item.category)}>{item.category}</li>
                )
              })
            }
          </ul>   
            <motion.div className='grid grid-cols-4 xsm:grid-cols-1 md:grid-cols-2  gap-4 my-10 px-10' layout>
              {
                trendingProducts.slice(0, 4).map((product, index)=>{
                  return(
                    <AnimatePresence key={index}>
                      <motion.div 
                        className=''
                        key={product._id}
                        layout
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        exit={{ opacity:0 }}
                        transition={{ duration:0.5 }}  
                      >
                        
                          <ProductCardComponet product={product} key={product._id} />
                      </motion.div>
                    </AnimatePresence>
                  )
                })
              }

            </motion.div>
    </div>
  )
}

export default TrendingNewProducts