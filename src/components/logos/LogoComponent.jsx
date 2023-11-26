import Link from 'next/link';
import logoimage from '@/images/Eleganza_Bridal_Logo.webp';
import logodark from '@/images/Eleganza-Bridal-LV-Logo-359x156.png';
import Image from 'next/image';

const LogoComponent = ({ lang }) => {
  return (
    <Link href={`/${lang}`} className="">
      <Image
        width={150}
        height={150}
        src={logodark}
        alt="Eleganza"
        className="main-logo-class w-40"
      />
    </Link>
  );
};

export default LogoComponent;
