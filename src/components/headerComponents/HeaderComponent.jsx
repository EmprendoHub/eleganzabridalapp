import { getDictionary } from '@/lib/dictionary';
import MotionHeaderComponent from './MotionHeaderComponent';

const HeaderComponent = async ({ lang }) => {
  const { header } = await getDictionary(lang);
  return <MotionHeaderComponent lang={lang} header={header} />;
};

export default HeaderComponent;
