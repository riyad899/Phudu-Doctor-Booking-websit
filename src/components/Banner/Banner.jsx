import React from 'react'
import { FaDove } from 'react-icons/fa'
import banner from '../../assets/images/Frame 2087325956.png'

export const Banner = () => {
  return (
    <div className='flex items-center justify-center '>
        <div className='w-[1500px] h-[766px] border mt-[5px] border-amber-50 shadow-amber-50 flex flex-col items-center bg-[linear-gradient(1deg,rgba(255,255,255,1)_0%,rgba(244,244,244,1)_50%,rgba(224,224,224,1)_100%)] rounded-[24px]'>
            <h1 className='text-[42px] font-bold text-center  mt-[70px]'>Dependable Care, Backed by Trusted <br />
             Professionals.</h1>
             <p className='text-[16px] text-center pt-[20px]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br />
              a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
             <div className='flex gap-7 pt-[20px] pb-[30px]'>
                <input type="text" className='w-[600px] h-[52px] input bg-[#FFFFFF] rounded-4xl' placeholder='Search any doctor...' />
                <button className='btn bg-[#176AE5] text-[#FFFFFF] rounded-4xl h-[52px] '>Search Now</button>
             </div>

             <div className='flex p-[10px] gap-5 justify-center items-center'>
                <img src={banner} alt="   " className='w-[40%]'/>
                <img src={banner} alt="   " className='w-[40%]'/>
             </div>

        </div>
    </div>
  )
}
