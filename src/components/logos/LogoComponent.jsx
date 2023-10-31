import Link from 'next/link'
import logoimage from "@/images/Eleganza_Bridal_Logo.webp"
import Image from 'next/image'

const LogoComponent = () => {
    return (
          <Link href={`/`} className=''>
                  <Image width={150} height={150} src={logoimage.src} alt='Eleganza' className='main-logo-class w-40'/> 
          </Link>
    
      )
}

export default LogoComponent