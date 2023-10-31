"use client";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import LogoComponent from "../logos/LogoComponent";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FooterContainer from "../container/FooterContainer";

const FooterComponent = () => {
  return (
    <div className="w-full bg-gradient-to-b from-pink-600 to-pink-700 text-slate-100 px-10 py-10">
      <FooterContainer className="grid xsm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-10">
        <div className=" gap-y-4">
          <LogoComponent />
          <p className="text-sm mb-10 mt-2">
          Our goasl is to provide convenience and help while you are looking for the perfect dress for any special occation.
          </p>
          <div className="flex items-center gap-x-4">
            <motion.a 
             whileHover={{ scale: 1.3 }}
             whileTap={{ scale: 0.9 }}
            href="https://www.tiktok.com/@eleganzabridal/" 
            target="_blank">
              <span className="socialLink">
                <BsTiktok className="text-2xl"/>
              </span>
            </motion.a>
            
            <motion.a 
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.instagram.com/eleganza_b/" 
            target="_blank">
              <span className="socialLink">
                <BsInstagram className="text-2xl"/>
              </span>
            </motion.a>
            <motion.a 
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.facebook.com/eleganzabridal/" 
            target="_blank">
              <span className="socialLink">
                <BsFacebook className="text-2xl"/>
              </span>
            </motion.a>
            
          </div>
        </div>
        <div>
          <p className="text-lg">New Arrivals</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}} className="flex flex-col">
              <a href="/catalog?category=wedding" className="text-slate hover:text-gray-900 cursor-pointer duration-200">
                New Wedding Dresses
              </a>
            </motion.li>
            <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}} className="flex flex-col">
              <a href="/catalog?category=quinces" className="text-slate hover:text-gray-900 cursor-pointer duration-200">
              New Quinceañera Dresses
              </a>
            </motion.li>
            <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}} className="flex flex-col">
              <a href="/catalog?category=tuxedo" className="text-slate hover:text-gray-900 cursor-pointer duration-200">
              Mens Tuxedos
              </a>
            </motion.li>
           
            <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}} className="flex flex-col">
              <a href="/catalog?keyword=Quinceañera Accessories" className="text-slate hover:text-gray-900 cursor-pointer duration-200">
                Wedding Accesories
              </a>
            </motion.li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Legal</p>
          <ul className="text-base font-base mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black cursor-pointer duration-200">
                Home
              </motion.li>
            </Link>
            <Link href={"/favorites"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black  cursor-pointer duration-200">
                Favorites
              </motion.li>
            </Link>
            <Link href={"/catalog"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black  cursor-pointer duration-200">
                Catalog
              </motion.li>
            </Link>
            <Link href={"/about"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black  cursor-pointer duration-200">
                About
              </motion.li>
            </Link>
            <Link href={"/contact"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black  cursor-pointer duration-200">
                Contact
              </motion.li>
            </Link>
           
          </ul>
          
        </div>
        <div>
          <p className="text-lg mb-2">Site Map</p>
          <ul className="text-base font-base mt-2 flex flex-col gap-y-2">
            <Link href={"/terms"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black  cursor-pointer duration-200">
                Terms of Service
              </motion.li>
            </Link>
            <Link href={"/shipping"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black cursor-pointer duration-200">
                Shipping Policy
              </motion.li>
            </Link>
            <Link href={"/privacy"}>
              <motion.li 
              whileHover={{y:-4 }}
              whileTap={{ y:1 }} 
              transition={{duration: 0.15}}
              className="hover:text-black cursor-pointer duration-200">
                Privacy Policy
              </motion.li>
            </Link>
          </ul>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover mt-5"
            priority
          />
        </div>
      </FooterContainer>
    </div>
  )
}

export default FooterComponent