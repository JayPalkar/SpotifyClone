/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import apple from '../../images/apple.png';

function SignUp() {
    return (
        <div className='bg-background min-h-screen'>
            {/* Heading Logo */}
            <div className="flex justify-center align-middle px-5 py-7">
                <h1 className='text-white text-2xl lg:text-3xl'><FaSpotify /></h1>
            </div>
            {/* Action Container */}
            <div className="flex justify-center">
                <div className='lg:max-w-[19.75rem]'>
                    {/* Heading */}
                    <h1 className='text-white font-bold text-3xl lg:text-4xl flex justify-center text-center px-16 mx-10 lg:px-6 lg:mx-3'>Sign up to start listening</h1>
                    {/* Form Container */}
                    <div className='px-7 mt-11 mb-8 lg:mb-5 lg:mt-7'>
                        <form className='flex flex-col'>
                            <label className='font-bold text-sm lg:text-xs text-white mb-2'>Email address</label>
                            <input type="email" className='rounded text-base lg:text-sm px-3 py-3 lg:px-2 lg:py-2' name="userEmail" id="" />
                            <a href="/" className='underline text-spotifyGreen text-sm lg:text-xs lg:mt-[0.25rem]  mt-2'>Use phone number instead.</a>
                            <button className='bg-spotifyGreen hover:bg-hoverGreen rounded-full font-bold text-base lg:text-sm py-3 mt-6 lg:py-2 lg:mt-4 lg:font-semibold'>Next</button>
                        </form>
                    </div>

                    <div className='px-9'>
                        <div className='flex justify-center items-center'>
                            <hr className='w-full' />
                            <p className='bg-background text-white px-3 text-sm'>or</p>
                            <hr className='w-full' />
                        </div>

                        <div className='flex flex-col gap-2 lg:gap-1 mt-8 lg:mt-5'>
                            <button className='text-white flex flex-row justify-center items-center py-2 border-gray-500 hover:border-white border-b border-t border-l border-r rounded-full'>
                                <img src={google} className='w-5 lg:w-4' alt="" />
                                <p className='basis-3/4 font-bold text-base lg:text-sm lg:font-semibold'>Sign up with Google</p>
                            </button>
                            <button className='text-white flex flex-row justify-center items-center py-2 border-gray-500 hover:border-white border-b border-t border-l border-r rounded-full'>
                                <img src={facebook} className='w-5 lg:w-4' alt="" />
                                <p className='basis-3/4 font-bold text-base lg:text-sm lg:font-semibold'>Sign up with Facebook</p>
                            </button>
                            <button className='text-white flex flex-row justify-center items-center py-2 border-gray-500 hover:border-white border-b border-t border-l border-r rounded-full'>
                                <img src={apple} className='w-5 lg:w-4' alt="" />
                                <p className='basis-3/4 font-bold text-base lg:text-sm lg:font-semibold'>Sign up with Apple</p>
                            </button>
                        </div>

                        <div className='py-8 lg:py-7'>
                            <hr className='border-t-gray-700' />
                        </div>

                        <div className='text-center'>
                            <p className='text-gray-400 lg:text-xs'>Already have an account? <a href="#" className='text-white underline'>Log in here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
