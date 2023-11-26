import React from 'react'
import HeaderContainer from '@/components/container/HeaderContainer'
import RegisterFormComponent from './RegisterFormComponent'

const RegisterPage = () => {

    return (
        <HeaderContainer>
            <div className={` mx-auto flex items-center justify-center text-center`}>
               <RegisterFormComponent />
            </div>
            
        </HeaderContainer>
    )
}

export default RegisterPage