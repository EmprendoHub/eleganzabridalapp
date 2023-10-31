'use client'
import styles from '../style.module.scss'
import { useEffect, useState } from 'react';
import Navi from './MobilenavComponent';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function MobileMenuComponent() {

  const [isActive, SetIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    
    if(isActive) SetIsActive(false)
    
  }, [pathname])

  return (
    <>
    <div className={` hidden md:block`}>

      <div className={`${styles.header}  fixed right-6 top-7 sm:right-3 sm:top-5 z-[998]`}>
        <div onClick={() => {SetIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Navi />}
    </AnimatePresence>
    </>
  )
}