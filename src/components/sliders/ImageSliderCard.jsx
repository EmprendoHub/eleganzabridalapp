import Image from 'next/image'
import React from 'react'
import firstimage from "@/images/Amelia-Wilson.png"

const ImageSliderCard = ({ img }) => {
  return (
    <div className=' w-[90%] mx-auto bg-gray-300 shadow-xl my-10'>
        <div>
            <Image src={img} alt='slider-card-image' className='h-fit w-full object-cover'/>
            {/* <div className=' flex flex-col gap-4 p-[20px]'>
                <div>
                    <h2 className='font-bold'>
                        Testiomonial name
                    </h2>
                </div>

                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo pariatur magni fugit similique quaerat placeat. Eos ab magnam, qui quis accusantium, recusandae odio culpa vero obcaecati dolorem numquam mollitia! Id!
                    </p>
                </div>
                <div>

                    <a className='text-pink-600' href="#">Leer Mas...</a>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default ImageSliderCard