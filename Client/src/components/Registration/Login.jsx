/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import apple from '../../images/apple.png';


function Login() {
  return (
    <div className='bg-gradient-to-b from-[#292929]  to-[#090909] min-h-screen'>
        {/* Heading Logo */}
        <div className="flex justify-center align-middle pt-14 px-5 py-7">
            <h1 className='text-white text-2xl lg:text-3xl'><FaSpotify/></h1>
        </div>

        {/* Action Container */}
        <div className="flex justify-center">
                <div className='lg:max-w-[19.75rem]'>
                    {/* Heading */}
                    <h1 className='text-white font-bold text-3xl lg:text-4xl flex justify-center text-center px-12 mx-10 lg:px-1 lg:mx-3'>Log in to Spotify</h1>

                    <div className="px-9">
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
                            <button className='text-white flex flex-row justify-center items-center py-2 border-gray-500 hover:border-white border-b border-t border-l border-r rounded-full'>
                                <p className='font-bold text-base lg:text-sm lg:font-semibold'>Continue with phone number</p>
                            </button>
                        </div>
                        <div className='pt-9 pb-5 lg:pt-7 lg:pb-3'>
                            <hr className='border-t-gray-700' />
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className='px-7 mt-5 mb-8 lg:mb-5 lg:mt-7'>
                        <form className='flex flex-col'>
                            <label className='font-bold text-sm lg:text-xs text-white mb-2'>Email address</label>
                            <input type="email" className='rounded text-base lg:text-sm px-3 py-3 lg:px-2 lg:py-2' name="userEmail" id="" />
                            <label className='font-bold mt-2 text-sm lg:text-xs text-white mb-2'>Password</label>
                            <input type="password" className='rounded text-base lg:text-sm px-3 py-3 lg:px-2 lg:py-2' name="userEmail" id="" />
                            <button className='bg-spotifyGreen hover:bg-hoverGreen rounded-full font-bold text-base lg:text-sm py-3 mt-10 lg:py-2 lg:mt-8 lg:font-semibold'>Log In</button>
                            <a href="#" className='text-white text-sx lg:text-xs underline text-center mt-7'>Forgot your password?</a>
                        </form>
                    </div>

                    <div className="flex justify-center items-center sm:flex-row">
                        <div className='flex justify-center text-center py-1'>
                            <p className='text-gray-400 lg:text-xs'>Don&apos;t have an account?</p>
                        </div>
                        <div className='flex justify-center text-center py-1'>
                            <a className='text-white underline lg:text-xs' href="#">Sign up for Spotify.</a>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Login
