/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSpotify } from "react-icons/fa6";

function SignUp() {
  return (
    <>  
        <div className="">

            {/* Heading Logo */}
            <div className="flex justify-center align-middle px-5 py-7">
                <h1 className='text-white text-2xl'><FaSpotify/></h1>
            </div>
            {/* Heading */}
            <h1 className='text-white font-bold text-3xl flex justify-center text-center px-16 mx-10'>Sign up to start listening</h1>
            {/* Form Container */}
            <div className='px-9 my-9'>
                <form className='flex flex-col'>
                    <label className='font-bold text-sm text-white mb-2'>Email address</label>
                    <input type="email" className='rounded text-base px-3 py-3' name="userEmail" id="" />
                    <a href="/" className='underline text-spotifyGreen'>Use phone number instead.</a>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp
