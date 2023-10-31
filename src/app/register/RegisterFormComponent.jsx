"use client"
import React, { useState } from 'react'
import LogoComponent from '@/components/logos/LogoComponent'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IoLogoGoogle } from 'react-icons/io'


const RegisterFormComponent = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(username === ''){
            toast.error("Please fill in username to register.")
            return
        }

        if(email === ''){
            toast.error("Please add your email to register.")
            return
        }

        if (!isValidEmail(email)) {
            toast.error("Please use a valid email.")
            return
        }

        if(!password || password.length < 8){
            toast.error("Password must be at least 8 characters")
            return
        }

        try {
            const res = await fetch(`http://localhost:3000/api/register`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    username, 
                    email, 
                    password})
            })
            if (res.status === 400) {
                toast.warning("This email is already in use")
                setError("This email is already in use")
            }
            if(res.ok){
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    signIn()
                }, 200)
                return
            }
        } catch (error) {
            console.log(error) 
        }
    }

  return (
    <div className='w-fit bg-pink-600  p-20 shadow-xl'>
         <LogoComponent/>
    <h2 className='my-4 text-white font-bold text-2xl'>New User</h2>
    <button className='w-full hover:text-black hover:bg-slate-300 duration-500 ease-in-out text-white bg-black mb-4 flex flex-row gap-4
     items-center py-4 justify-center' onClick={() => {signIn("google")}}><IoLogoGoogle />Sign up with Google</button>
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center text-center gap-y-4'>
       
        <input className='text-center py-2' type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
        <input className='text-center py-2' type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
        <input className='text-center py-2' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className={`bg-black text-white py-2 px-8 text-xl hover:bg-pink-800 duration-700 rounded-md`}>Register</button>
        
    </form>
    <button className={`text-white mt-3`} onClick={() => signIn()}>
            Already have an account? <br /> Login.
        </button>
        <ToastContainer autoClose={1000} />
    </div>
  )
}

export default RegisterFormComponent