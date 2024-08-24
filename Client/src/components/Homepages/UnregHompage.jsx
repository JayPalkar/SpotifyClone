/* eslint-disable no-unused-vars */
import React from 'react';
import { FaSpotify } from "react-icons/fa6";
import { PiMagnifyingGlassBold, PiMagnifyingGlassFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

function UnregHompage() {
  return (
    <>
        <div className="bg-black min-h-screen">
            {/* navbar */}
            <div className='flex px-4 py-3 flex-row justify-between items-center sticky top-0 bg-black'>
                <div className='text-white text-4xl'>
                    <FaSpotify/>
                </div>
                <div className='flex items-center gap-4'>
                    <PiMagnifyingGlassBold className='text-white text-lg'/>
                    <button className='rounded-full bg-white text-black font-bold text-sm px-3 py-2'>Open App</button>
                    <RxHamburgerMenu className='text-white text-2xl'/>
                </div>
            </div>

            <div className='bg-background min-h-screen overflow-scroll py-6'>
               <div className='px-4'>
                    <h1 className='text-white font-bold text-xl'>Popular artists</h1>
               </div>
               <div className='px-4'>
                    <h1 className='text-white font-bold text-xl'>Popular artists</h1>
               </div>
               <div className='px-4'>
                    <h1 className='text-white font-bold text-xl'>Popular artists</h1>
               </div>
               <div className='px-4'>
                    <h1 className='text-white font-bold text-xl'>Popular artists</h1>
               </div>
               <div className='px-4'>
                    <h1 className='text-white font-bold text-xl'>Popular artists</h1>
               </div>
               <div className='px-4'>
                    <h1 className='text-white font-bold text-xl'>Popular artists</h1>
               </div>
            </div>



        </div>
    </>
  )
}

export default UnregHompage
