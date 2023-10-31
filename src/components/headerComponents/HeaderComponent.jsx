'use client'
import HeaderContainer from '../container/HeaderContainer';
import MobileMenuComponent from './mobilenav/MobileMenuComponent';
import MainMenuComponent from './MainMenuComponent';


const HeaderComponent = () => {

  return (
    <div className='bg-pink-600 text-white font-bodyFont text-xl sticky top-0 z-[999]  w-full mx-auto  py-5'>

            <MainMenuComponent/>
            

    </div>
  )

}

export default HeaderComponent