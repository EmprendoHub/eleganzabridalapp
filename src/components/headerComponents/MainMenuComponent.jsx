"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IoMdHeart } from 'react-icons/io'
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image'
import LogoComponent from '../logos/LogoComponent'
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import SearchComponent from '../search/SearchComponent'
import MobileMenuComponent from './mobilenav/MobileMenuComponent'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            <span className='pb-1'>{title}</span>
            <span className={`h-[1px] inline-block bg-gradient-to-r from-gray-200 to-zinc-900 group-hover:w-full transition-[width] ease duration-300 absolute left-0 bottom-0 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const MainMenuComponent = () => {
  // const dispatch = useDispatch()
  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user)

  const {productData, orderData} = useSelector((state) => state.shopping);

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
    <header className="self-stretch flex flex-row items-center justify-start sticky mx-auto pl-5 sm:pl-1">
          {/* Logo  */}
          <div className='min-w-[120px] sm:w-[85px] object-contain justify-center'>
        <LogoComponent/>
        </div>
        {/* Search Bar */}
        <SearchComponent />
        {/* Navigatio left */}
        <nav className='md:hidden m-0 flex-1  flex flex-row py-2.5 px-5 items-center justify-start gap-7 text-sm tracking-widest '>
            <CustomLink href="/catalog?category=wedding" title={`BRIDAL`} className='text-white no-underline font-bold font-playfair-display'/>
            <CustomLink href="/catalog?category=quinces" title={`QUINCEÑERA`} className='text-white no-underline font-playfair-display'/>
            <CustomLink href="/catalog?category=tuxedo" title={`TUXEDOS`} className='text-white no-underline font-playfair-display' />
            <CustomLink href="/contact" title={`CONTACT`} className='text-white no-underline font-playfair-display' />
            <CustomLink href="/about" title={`ABOUT`} className='text-white no-underline font-playfair-display' />
        </nav>
      
        
        <nav className='md:hidden ml-4 flex flex-row py-2.5 px-5 items-center  justify-end gap-4 font-poppins text-sm tracking-widest'>
           
            
             {/* Login/Register */}
              {/* {
                  !session &&  ( <div onClick={ () => signIn() } className='cursor-pointer flex justify-center items-center gap-x-1'>
                  <AiOutlineUser className="text-2xl" />
                  <p className='text-sm font-semibold'>Inicio/Registro</p>
                </div> )
              } */}
            {/* Cart Button */}
            <Link href={"/favorites"}>
            <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center text-center mx-auto h-[30px] w-[30px] border-[1px]  border-black hover:border-yellow-600 cursor-pointer'>
              <p className='absolute'><IoMdHeart className='text-lg' /></p>
              
              {/* <p className='text-sm font-semibold'><FormatedPrice amount={totalAmt ? totalAmt : 0}/></p> */}
              <span className='bg-white text-gray-700 rounded-full font-base text-xs relative -right-3 -top-4 flex items-center justify-center w-5 h-5 shadow-xl '>
              {productData ? productData?.length : 0}
              </span>
            </div>
            </Link>
             {/*  Order Button */}
             {/* {
              orderData?.order && orderData?.order.length > 0 && session && (
                <Link href={'/ordenes'} className='flex justify-center items-center gap-x-2'>
                  <BsBookmarks />
                  <p className='text-sm font-semibold'>Ordenes</p>
                </Link>
              )
            } */}
             
            {/* User Image */}
            {
              isLoggedIn && session?.user?.image ? <Image src={session?.user?.image} alt='avatar' width={35} height={35} className='rounded-full object-cover'/> :  isLoggedIn && (<div className='h-10 w-10 bg-gold-gradient rounded-full object-cover flex justify-center items-center' ><p className=' text-black text-2xl uppercase relative flex top-0 font-boldest'>{session?.user?.email.substring(0,1)}</p></div>) 
            }
           
             {/** Logout Button */}
             { isLoggedIn && (
                <div onClick={()=>signOut()} className='md:hidden cursor-pointer flex justify-center items-center gap-x-1 '>
                    <FiLogOut className="text-2xl flex" />
                    {/* <p className='text-sm font-semibold'>Logout</p> */}
                </div>
                )
              }
        </nav>
        
       
        <MobileMenuComponent/>
    </header>
  )
}

export default MainMenuComponent