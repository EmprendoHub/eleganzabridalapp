"use client"
import React from 'react'
import { useSelector } from 'react-redux'
useSelector;
import { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { useSession, signIn } from 'next-auth/react'


const PaymentFormComponent = () => {
    const {data:session} = useSession();
    const {productData, userInfo} = useSelector((state) => state.shopping);

    const [totalQty, settotalQty] = useState(0)
    const [totalAmnt, settotalAmnt] = useState(0)
    const [subtotalAmnt, setsubtotalAmnt] = useState(0)
    const [totalTax, settotalTax] = useState(0)
    const [shippingCost, setshippingCost] = useState(0)

    useEffect(() => {
        let amt = 0;
        let tax = 0;
        let sub = 0;
        let taxrate = 16 / 100;
        let ship = 200;
        let qty = 0;
        productData.map((item) => {
          sub += item.price * item.quantity;
          tax = sub * taxrate;
          amt = tax + sub + ship;
          qty += item.quantity;
          
          return
        })
        settotalQty(qty)
        setshippingCost(ship);
        setsubtotalAmnt(sub);
        settotalTax(tax);
        settotalAmnt(amt);
        
      }, [productData])

  return (
    <div className='w-full bg-white p-4'> 
        <h2>Quote Totals</h2>
        <div className='border-b-[1px] border-b-slate-300 py-2'>
           <div className='max-w-lg flex items-center justify-between'>
                <p className='uppercase font-medium'>Quantity</p><p>{totalQty}</p>
           </div>
        </div>
        {/* <div className='border-b-[1px] border-b-slate-300 py-2'>
           <div className='max-w-lg flex items-center justify-between'>
            <p className='uppercase font-medium'>Tax</p><p><FormatedPrice amount={totalTax}/></p>
           </div>
        </div>
        <div className='border-b-[1px] border-b-slate-300 py-2'>
           <div className='max-w-lg flex items-center justify-between'>
            <p className='uppercase font-medium'>Shipping</p><p><FormatedPrice amount={shippingCost}/></p>
           </div>
        </div>
        <div className='border-b-[1px] border-b-slate-300 py-2'>
           <div className='max-w-lg flex items-center justify-between'>
            <p className='uppercase font-medium'>Total</p><p><FormatedPrice amount={totalAmnt}/></p>
           </div>
        </div> */}
        {
            userInfo ? (
                <button className=' bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-pink-700 cursor-pointer duration-500'>Request your Quote</button>
            ):( 
                <div>
                    {/** Login/Register */}
                    {
                        !session &&  (<div><div onClick={ () => signIn() } className=' flex flex-row w-[200px] bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-pink-700 duration-500 cursor-pointer'>
                        <AiOutlineUser className="text-2xl" />
                        <p className='text-sm font-semibold'>Login/Regsiter</p>
                        
                    </div>
                    <p className='text-base mt-1 text-red-600 px-4'>Please login to get a quote</p>
                    </div>
                    )
                    }
                    {
                        session && <button className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-pink-600 cursor-pointer duration-50'>Proceed to Quote</button>
                    }
                    
                   
                </div>
            )
        }
  </div>
  )
}

export default PaymentFormComponent