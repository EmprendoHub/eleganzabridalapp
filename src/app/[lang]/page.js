import BrandComponent from '@/components/brand/BrandComponent';
import FabulousComponent from '@/components/ctas/FabulousComponent';
import ImageOverlayComponent from '@/components/ctas/ImageOverlayComponent';
import HeroComponent from '@/components/hero/HeroComponent';
import MainHeroComponent from '@/components/hero/MainHeroComponent';
import ExploreCategoryComponent from '@/components/productComponents/productCatalog/ExploreCategoryComponent';
import TrendingNewProducts from '@/components/productComponents/productCatalog/TrendingNewProducts';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({ params: { lang } }) {
  const {
    mainhero,
    fabulous,
    trending,
    imageoverlay,
    explorecats,
    brandsection,
  } = await getDictionary(lang);
  return (
    <main className="main-page-class overflow-x-hidden">
      <MainHeroComponent mainhero={mainhero} lang={lang} />
      <HeroComponent mainhero={mainhero} lang={lang} />
      <BrandComponent brandsection={brandsection} lang={lang} />
      <TrendingNewProducts trending={trending} lang={lang} />
      <ImageOverlayComponent imageoverlay={imageoverlay} lang={lang} />
      <FabulousComponent fabulous={fabulous} />
      <ExploreCategoryComponent lang={lang} explorecats={explorecats} />
    </main>
  );
}
