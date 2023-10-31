import React from 'react'
import SectionTitle from '../texts/SectionTitle';
import Image from 'next/image';
import fabdress from "@/images/fabulous_dresss.webp"
import wedicon from "@/images/wed_icon.webp"
import quinceicon from "@/images/quince_icon.webp"
import tuxicon from "@/images/tuxe_icon.webp"

const FabulousComponent = () => {
    return (
        <div className='relative h-full'>
            <SectionTitle className='pb-10 text-5xl md:text-3xl text-center' title='We have everything you might need for any occation' subtitle='At Eleganza Bridal, we understand that each person is unique, and that is reflected in our varied collection of dresses. Whether you are looking for a traditional wedding dress, a modern and chic one, or the quinceanera dress of your dreams, we have something special for you.'/>
            <div className='mt-34 flex flex-row md:flex-col-reverse mx-auto my-14 w-[80%] relative items-center'>
                <div className='md:mt-10 flex w-1/2 h-[50%] md:w-full md:h-[50%]  bg-gradient-to-b from-pink-500 to-pink-700 rounded-s-full rounded-t-full justify-end items-end'>
                        <Image src={fabdress} width={400} height={2000} alt='Fabulous Dress' className='md:w-[65%] w-[68%] h-auto ' />
                </div>
                <div className='flex flex-col w-1/2 md:w-full md:pl-0 pl-20'>
                        <div className='flex flex-row gap-x-5 my-3'>
                            <div className='flex w-1/7 h-[70px] bg-pink-700 p-2 rounded-full'>
                                <Image src={wedicon} width={50} height={50} alt='Fabulous Dress' className='w-[50px] h-auto'/>
                            </div>
                            <div className='flex-col w-3/4'>
                                <div className='font-playfair-display text-2xl'>Wedding dresses</div>
                                <div className='text-xs'>From princess dresses with voluminous skirts to bohemian lace dresses, our collection of wedding dresses covers a wide range of styles and sizes. We work with renowned designers to offer you quality and elegance in every seam.</div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-5 my-3'>
                            <div className='flex w-1/7 h-[70px] bg-pink-700 p-2 rounded-full'>
                                <Image src={quinceicon} width={50} height={50} alt='Fabulous Dress' className='w-[50px] h-auto' />
                            </div>
                            <div className='flex-col w-3/4'>
                                <div className='font-playfair-display text-2xl'>Quinceanera Dresses</div>
                                <div className='text-xs'>Celebrating your fifteen years is an important event and you deserve the perfect dress. We have a beautiful variety of quinceanera dresses in every color and style imaginable. Our dresses are designed to make you feel like the princess you are.</div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-5 my-3'>
                            <div className='flex w-1/7 h-[70px] bg-pink-700 p-2 rounded-full'>
                                <Image src={tuxicon} width={50} height={50} alt='Fabulous Dress' className='w-[50px] h-auto' />
                            </div>
                            <div className='flex-col w-3/4'>
                                <div className='font-playfair-display text-2xl'>Tuxedos</div>
                                <div className='text-xs'>You already have the perfect dress now find an equally amazing tuxedo to match your spouse. </div>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
      )
}

export default FabulousComponent