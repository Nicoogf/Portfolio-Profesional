import React from 'react'
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";
import Link from 'next/link';


const Redes = () => {
  return (
    <article className='group relative cursor-pointer flex flex-col justify-center p-2 border-2 border-[#30363D] rounded-lg  bg-[#0D1117]
    col-span-12 h-[145px] hover:border-lime-500 text-white transition-all duration-200
    sm:h-auto sm:col-span-4 sm:row-span-2
    md:col-span-4 md:row-span-2
    lg:col-span-4
    xl:col-span-2 xl:row-span-3     
    2xl:row-span-3                 
   '>
        <h3 className='font-semibold text-center text-xl mb-2'> Redes </h3>

        <div className='flex flex-row justify-center gap-x-4  sm:gap-x-2'>
        <Link href={""} className='text-2xl sm:text-xl bg-gray-600 p-2 rounded-full'>
        <SiGmail/>
        </Link>
        <Link href={""} className='text-2xl sm:text-xl bg-gray-600 p-2 rounded-full'>
        <IoLogoWhatsapp />
        </Link>
        <Link href={""} className='text-2xl sm:text-xl bg-gray-600 p-2 rounded-full'>
        <FaInstagram />
        </Link>
        <Link href={""} className='text-2xl sm:text-xl bg-gray-600 p-2 rounded-full'>
        <RxDiscordLogo />
        </Link>



        </div>
    </article>
  )
}

export default Redes