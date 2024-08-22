/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import apple from '../../images/apple.png'

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
            <div className='px-9 my-8'>
                <form className='flex flex-col'>
                    <label className='font-bold text-sm text-white mb-2'>Email address</label>
                    <input type="email" className='rounded text-base px-3 py-3' name="userEmail" id="" />
                    <a href="/" className='underline text-spotifyGreen mt-2'>Use phone number instead.</a>
                    <button className='bg-spotifyGreen hover:bg-hoverGreen rounded-full font-bold text-base py-3 mt-6'>Next</button>
                </form>
            </div>

            <div className='px-9'>
                <div className='flex justify-center items-center'>
                    <hr className='w-full'/>
                    <p className='bg-black text-white px-3 text-sm'>or</p>
                    <hr className='w-full'/>
                </div>

                <div className='flex flex-col gap-2 mt-8'>
                    <button className='text-white flex flex-row justify-center py-2 border-gray-400 hover:border-white border-b border-t border-l border-r rounded-full'>
                        <img src={google} className='w-5 ' alt="" />
                        <p className='basis-3/4 font-bold text-base'>Sign up with Google</p>
                    </button>
                    <button className='text-white flex flex-row justify-center py-2 border-gray-400 hover:border-white border-b border-t border-l border-r rounded-full'>
                        <img src={facebook} className='w-5' alt="" />
                        <p className='basis-3/4 font-bold text-base'>Sign up with Facebook</p>
                    </button>
                    <button className='text-white flex flex-row justify-center py-2 border-gray-400 hover:border-white border-b border-t border-l border-r rounded-full'>
                        <img src={apple} className='w-5' alt="" />
                        <p className='basis-3/4 font-bold text-base'>Sign up with Apple</p>
                    </button>
                </div>

                <div className='py-8'>
                    <hr className='border-t-gray-700'/>
                </div>

                <div className='text-center'>
                    <p className='text-gray-400'>Already have an account? <a href="#" className='text-white underline font-semibold'>Log in here</a></p>
                </div>

            </div>
        </div>
    </>
  )
}

export default SignUp
