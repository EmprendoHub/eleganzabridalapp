'use client';
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs';
import payment from '@/images/payment.png';
import LogoComponent from '../logos/LogoComponent';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FooterContainer from '../container/FooterContainer';

const FooterMenu = ({ footer, lang }) => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-white text-gray-900 px-20 md:px-5 py-24">
      <FooterContainer className="grid xsm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-10">
        <div className=" gap-y-4">
          <LogoComponent />
          <p className="text-sm mb-10 mt-2">{footer.widgetone.descrp}</p>
          <div className="flex items-center gap-x-4">
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.tiktok.com/@eleganzabridal/"
              target="_blank"
            >
              <span className="socialLink">
                <BsTiktok className="text-2xl" />
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/eleganza_b/"
              target="_blank"
            >
              <span className="socialLink">
                <BsInstagram className="text-2xl" />
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/eleganzabridal/"
              target="_blank"
            >
              <span className="socialLink">
                <BsFacebook className="text-2xl" />
              </span>
            </motion.a>
          </div>
        </div>
        <div>
          <p className="text-lg">{footer.widgettwo.title}</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <motion.li
              whileHover={{ y: -4 }}
              whileTap={{ y: 1 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col"
            >
              <a
                href={`/${lang}/catalog?category=wedding`}
                className="text-slate hover:text-gray-900 cursor-pointer duration-200"
              >
                {footer.widgettwo.linkone}
              </a>
            </motion.li>
            <motion.li
              whileHover={{ y: -4 }}
              whileTap={{ y: 1 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col"
            >
              <a
                href={`/${lang}/catalog?category=quinces`}
                className="text-slate hover:text-gray-900 cursor-pointer duration-200"
              >
                {footer.widgettwo.linktwo}
              </a>
            </motion.li>
            <motion.li
              whileHover={{ y: -4 }}
              whileTap={{ y: 1 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col"
            >
              <a
                href={`/${lang}/catalog?category=tuxedo`}
                className="text-slate hover:text-gray-900 cursor-pointer duration-200"
              >
                {footer.widgettwo.linkthree}
              </a>
            </motion.li>

            <motion.li
              whileHover={{ y: -4 }}
              whileTap={{ y: 1 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col"
            >
              <a
                href={`/${lang}/catalog?keyword=Quinceañera Accessories`}
                className="text-slate hover:text-gray-900 cursor-pointer duration-200"
              >
                {footer.widgettwo.linkfour}
              </a>
            </motion.li>
          </ul>
        </div>
        <div>
          <p className="text-lg">{footer.widgetthree.title}</p>
          <ul className="text-base font-base mt-2 flex flex-col gap-y-2">
            <Link href={`/${lang}/`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black cursor-pointer duration-200"
              >
                {footer.widgetthree.linkone}
              </motion.li>
            </Link>
            <Link href={`/${lang}/favorites`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black  cursor-pointer duration-200"
              >
                {footer.widgetthree.linktwo}
              </motion.li>
            </Link>
            <Link href={`/${lang}/catalog`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black  cursor-pointer duration-200"
              >
                {footer.widgetthree.linkthree}
              </motion.li>
            </Link>
            <Link href={`/${lang}/about`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black  cursor-pointer duration-200"
              >
                {footer.widgetthree.linkfour}
              </motion.li>
            </Link>
            <Link href={`/${lang}/contact`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black  cursor-pointer duration-200"
              >
                {footer.widgetthree.linkfive}
              </motion.li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-lg mb-2"> {footer.widgetfour.title}</p>
          <ul className="text-base font-base mt-2 flex flex-col gap-y-2">
            <Link href={`/${lang}/terms`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black  cursor-pointer duration-200"
              >
                {footer.widgetfour.linkone}
              </motion.li>
            </Link>
            <Link href={`/${lang}/shipping`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black cursor-pointer duration-200"
              >
                {footer.widgetfour.linktwo}
              </motion.li>
            </Link>
            <Link href={`/${lang}/privacy`}>
              <motion.li
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-black cursor-pointer duration-200"
              >
                {footer.widgetfour.linkthree}
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
  );
};

export default FooterMenu;
