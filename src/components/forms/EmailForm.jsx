"use client"
import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

const EmailForm = ({templateID, serviceID, publicKEY, contactform}) => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [activeButton, setActiveButton] = useState(false)
     //email js service Ids
     const templateId = templateID.templateID
     const serviceId = templateID.serviceID
     const publicKey = templateID.publicKEY

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveButton(true);
        
        // create a new object that contains dynamic params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Eleganza Bridal",
            message: message,
        }

        //send email using email js
        emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
            setName("");
            setEmail("");
            setMessage("");
            
        }).catch((error) => {
            console.error("Error sending email:", error);
            
        })
    }

  return (
    <div className='relative flex fle-col bg-gray-300 p-7 m-auto w-full rounded-xl z-10'>
        <form onSubmit={handleSubmit} className='flex flex-col w-full gap-y-4'>
            <input 
            type="text"
            placeholder={contactform.inputname}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='p-2'
            />
            <input 
            type="email"
            placeholder={contactform.inputemail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-2'
            />
            <textarea 
            cols="30" 
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='p-2'
            >
            </textarea>
            <button type='submit' className='mt-5' disabled={activeButton} ><p className='bg-black  text-white py-3'>{contactform.btntxt}</p></button>
        </form>
    </div>
  )
}

export default EmailForm