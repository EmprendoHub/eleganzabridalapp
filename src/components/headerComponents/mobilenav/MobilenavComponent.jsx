"use client"
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/components/headerComponents/mobilenav/anim';
import CustomLink from './Mobilelink';
import Link from 'next/link';
import Curve from '@/components/headerComponents/mobilenav/MobileCurve';
import Footer from '@/components/headerComponents/mobilenav/Mobilefooter';
import { IoMdCart, IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import SearchComponent from '@/components/search/SearchComponent';

const navItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "CATALOG",
    href: "/catalog",
  },
  {
    title: "BRIDAL",
    href: "/catalog?category=wedding",
  },
  {
    title: "QUINCEÑERA",
    href: "/catalog?category=quinces",
  },
  {
    title: "TUXEDOS",
    href: "/catalog?category=tuxedo",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
]

export default function Navi() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user)

  //const {productData, orderData} = useSelector((state) => state.shopping);

  const [totalAmt, setTotalAmt] = useState(0);

  // useEffect(() => {
  //   let amt = 0;
  //   productData.map((item) => {
  //     amt += item.price * item.quantity;
  //     return;
  //   });
  //   setTotalAmt(amt);
  // }, [productData]);
 
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`${styles.menu} bg-transparent `}>
         {/* Favorites Button */}
         <Link href={"/favorites"} className=' absolute left-5 top-9'>
         <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center text-center mx-auto h-[30px] w-[30px] border-[1px]  border-black hover:border-yellow-600 cursor-pointer'>
              <p className='absolute'><IoMdHeart className='text-lg' /></p>
              {/* <p className='text-base font-semibold'><FormatedPrice amount={totalAmt ? totalAmt : 0}/></p> */}

              <span className='bg-white text-black text-center rounded-full font-extrabold text-sm relative -right-3 -top-4 flex items-center justify-center w-5 h-5 shadow-xl '>
              {/* {productData ? productData?.length : 0} */}0
              </span>
            </div>
          </Link>
           {/* Internalisation */}
          <div className='flex flex-row justify-start items-center gap-x-3 px-3 mt-8 ml-16'>
            <Link href={"/"} locale="es" className='rounded-full bg-slate-200 text-black text-sm px-2 py-1.5 shadow-sm hover:scale-110 ease-in-out duration-300'>
              ES
            </Link>
            <Link href={"/"} locale="en" className='rounded-full bg-slate-200 text-black text-sm px-2 py-1.5 shadow-sm hover:scale-110 ease-in-out duration-300'>
              EN
            </Link>
          </div>
          
          
       <div className={`${styles.body}  pl-14 pt-10 `}>
                            
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={' gap-y-3 pr-4 '}>
                    <div className={`${styles.header}`}>
                       {/* Searchbar */}
                        <SearchComponent/>    
                    </div>
                     {/** Logout Button */}
             { isLoggedIn && (
                <div onClick={()=>signOut()} className=' absolute left-20 top-9 cursor-pointer flex justify-center items-center gap-x-1 '>
                    <FiLogOut className="text-2xl flex" />
                    <p className='text-sm font-base'>Logout</p>
                </div>
                )
              }
                    <div className='text-xl font-playfair-display font-headerFont pt-5 flex flex-col gap-y-5'>
                    {
                      navItems.map( (data, index) => {
                        return <CustomLink key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></CustomLink>
                      })
                    }

                    </div>
                    <Footer />
            </div>
            
        </div>
        <Curve />
    </motion.div>
  )
}