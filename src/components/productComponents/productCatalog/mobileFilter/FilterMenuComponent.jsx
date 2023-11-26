'use client';
import styles from './menufilterstyle.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { filterMenuSlide } from './anim';
import Curve from '@/components/productComponents/productCatalog/mobileFilter/MenuFilterCurve';
import AllFiltersComponrnt from '@/components/filters/AllFiltersComponrnt';
import { useSession } from 'next-auth/react';

const FilterMenuComponent = ({
  allBrands,
  allCategories,
  lang,
  SetIsActive,
  isActive,
}) => {
  const pathname = usePathname();

  const { data: session } = useSession();
  const isLoggedIn = Boolean(session?.user);

  return (
    <motion.div
      variants={filterMenuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${styles.menu} bg-transparent`}
    >
      <div
        className={`${styles.body} max-w-[400px]  overflow-y-auto px-5 py-10`}
      >
        <AllFiltersComponrnt
          allBrands={allBrands}
          allCategories={allCategories}
          lang={lang}
          SetIsActive={SetIsActive}
          isActive={isActive}
        />
      </div>
      <Curve />
    </motion.div>
  );
};

export default FilterMenuComponent;
