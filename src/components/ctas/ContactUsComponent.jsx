import React from 'react'
import BoxesSectionTitle from '../texts/BoxesSectionTitle'
import Image from 'next/image'
import contactbride from '@/images/Eleganza_bridal_contact_bride.webp'
import EmailForm from '../forms/EmailForm'


//email js service Ids
const templateid = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const serviceid = process.env.REACT_APP_EMAILJS_SERVICE_ID
const publickey = process.env.REACT_APP_EMAILJS_PUB_KEY

const ContactUsComponent = ({contactform}) => {
    return (
        <div className='flex flex-row md:flex-col '>
          <div className='w-1/2 md:w-full z-10 pl-40 md:px-10 sm:px-3'>
              <div className=' pb-20'>
                <h2><BoxesSectionTitle className='mb-5 text-3xl' title={contactform.title} subtitle={contactform.subtitle} /></h2>
                <EmailForm templateID={templateid} serviceID={serviceid} publicKEY={publickey} contactform={contactform} />
              </div>
          </div>
          <div className='w-1/2 md:w-full z-10 justify-center mx-auto items-center flex'>
              <Image src={contactbride} width={550} height={500} alt='Contact Eleganza Bridal'/>
          </div>
          <div className='relative z-0'>
            <svg className='absolute z-0 right-0 bottom-0' width="1440" height="718" viewBox="0 0 1440 718" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1169.02 134.869C1253.51 -46.9477 1620.92 -191.418 1528.08 727C1216.93 727 0 719.629 0 719.629C177.5 682 333.034 691.253 402.5 506.5C529 358 1049.58 432.939 1169.02 134.869Z" fill="#db2777"/>
            </svg>
          </div>
        </div>
      )
}

export default ContactUsComponent