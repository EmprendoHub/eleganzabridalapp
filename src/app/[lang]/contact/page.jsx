import ContactUsComponent from '@/components/ctas/ContactUsComponent'
import IconListSectionComponent from '@/components/ctas/IconListSectionComponent'
import QuizComponent from '@/components/ctas/QuizComponent'
import HeroTextComponent from '@/components/texts/HeroTextComponent'
import React from 'react'
import { getDictionary } from '@/lib/dictionary'

const ContactPage = async ({ params: {lang} }) => {
  const { contact, quiz, contactform } = await getDictionary(lang)
  return (
    <div>

      <section className={`hero w-full h-[500px] bg-gray-100 text-center  bg-[url('/images/Eleganza-Bridal-Store-Front-Las-Vegas.webp')]  bg-cover bg-no-repeat bg-center bg-fixed`} >
                <div className=' backdrop-brightness-50 w-full h-full  items-center  justify-center flex px-5'> 
                  <div className="container mx-auto">
                    <HeroTextComponent title={contact.hero.title} subtitle={contact.hero.subtitle} />
                  </div>
              </div>
              
      </section>
    
      <section className="bg-white py-12 ">
        <div className=" flex flex-row md:flex-col justify-center items-center">
            <div className="text-lg text-gray-600 w-1/3 md:w-full">
               
                <IconListSectionComponent mainTitle={contact.list.title} textTitleOne={contact.list.boxone.title} textOne={contact.list.boxone.subtitle} linkOne={"tel:17022412273"} linkOneText={"(+1)702-241-2273"} textTitleTwo={contact.list.boxtwo.title} textTwo={contact.list.boxtwo.subtitle} linkTwo={"mailto:eleganzabridalandbanquet@gmail.com"} linkTwoText={"eleganzabridalandbanquet@gmail.com"} textTitleThree={contact.list.boxthree.title} textThree={contact.list.boxthree.subtitle} linkThree={"https://www.google.com/maps/dir//36.1584611,-115.140488/@36.158461,-115.140488,15z?hl=en-MX"} linkThreeText={"1000 E Charleston Blvd #105, Las Vegas, NV 89104"}/>
            </div>
            <div>
            <iframe className='border-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.325313676726!2d-115.14048879999999!3d36.1586376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c39aa59ef563%3A0x18ef5fa65bf8513!2sEleganza%20Bridal%20%26%20Banquet!5e0!3m2!1sen!2smx!4v1698590785674!5m2!1sen!2smx" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className='pt-10 mx-auto flex flex-col justify-center items-center'>
          <h3>{contact.workdays.title}</h3>
          <div className='hours-class'>
            <ul className='flex flex-col gap-y-3'>
              <li className='flex justify-between gap-x-20'> <strong>{contact.workdays.mon}</strong>  10:00 - 20:00</li>
              <li className='flex justify-between gap-x-20'> <strong>{contact.workdays.tue}</strong>  10:00 - 20:00</li>
              <li className='flex justify-between gap-x-20'> <strong>{contact.workdays.wed}</strong>  10:00 - 20:00</li>
              <li className='flex justify-between gap-x-20'> <strong>{contact.workdays.thu}</strong>  10:00 - 20:00</li>
              <li className='flex justify-between gap-x-20'> <strong>{contact.workdays.fry}</strong>  10:00 - 20:00</li>
              <li className='flex justify-between gap-x-20'> <strong>{contact.workdays.sat}</strong>  11:00 - 17:00</li>
              <li className='flex justify-between gap-x-20'> <strong>{contact.workdays.sun}</strong> <span className='text-red-700 uppercase'>{contact.workdays.closed}</span></li>
            </ul>
          </div>
        </div>
      </section>
      <QuizComponent quiz={quiz}/>

      <ContactUsComponent contactform={contactform} />
    </div>
  )
}

export default ContactPage