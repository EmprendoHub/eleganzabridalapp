import MainMenuComponent from './MainMenuComponent';
import { getDictionary } from '@/lib/dictionary';

const HeaderComponent = async ({ lang }) => {
  const { header } = await getDictionary(lang);
  return (
    <div className="bg-pink-600 text-white font-bodyFont text-xl sticky top-0 z-[999]  w-full mx-auto  py-5 px-20 sm:px-1">
      <MainMenuComponent header={header} lang={lang} />
    </div>
  );
};

export default HeaderComponent;
