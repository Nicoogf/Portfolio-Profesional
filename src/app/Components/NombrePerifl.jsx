import Image from 'next/image'
import React from 'react'
import { GoCopy } from 'react-icons/go'
import { IoIosArrowDropright } from 'react-icons/io'
import profile from "../../../public/profile.jpg"


const NombrePerifl = () => {
    return (
        <article className='group hover:border-lime-500 transition-all duration-300 flex flex-row border-2 border-[#345D96] rounded-lg overflow-hidden
    col-span-12 h-[145px] bg-[#121D2F]
    sm:h-auto sm:col-span-8 sm:row-span-2
    md:col-span-8 md:row-span-2
    lg:col-span-6
    xl:col-span-6 xl:row-span-2
    2xl:col-span-6 
                
   '>

            <div className='relative w-[95%] mx-auto flex flex-col items-center justify-center'>

                <div className='w-full flex flex-row gap-x-2'>


                    <Image src={profile} alt="Imagen de perfil" className='ml-2 w-16 h-16 rounded-full border-2 border-transparent group-hover:border-lime-500 transition-all duration-200' />


                    <div className='flex flex-col justify-center'>
                        <h1 className="font-thin text-sm"> Nicolas </h1>
                        <h2 className="font-thin text-sm"> Falabella </h2>
                        <h3> FullStack <span> Developer</span></h3>
                    </div>
                </div>

                <div className='border border-[#345D96] w-[95%] mx-auto my-2 group-hover:border-lime-500 transition-all duration-300'>

                </div>

                <div className='w-[95%] flex flex-row items-center justify-between my-1 gap-x-2 mt-1'>
                    <h6 className='text-center font-thin text-sm '> nicolasgfalabella@gmail.com</h6>
                    <GoCopy className='bg-[#345D96] box-content p-2 rounded-full cursor-pointer hover:bg-white hover:text-gray-700  transition-all duration-300' />
                </div>

                <div className='absolute flex flex-row items-center gap-x-2 top-0  opacity-0 right-32 group-hover:right-1  group-hover:opacity-100 bg-black/95 px-3 py-1 rounded-r-none transition-all duration-300 cursor-pointer'>
                    <h6 className='text-xs text-lime-300'> Ir a Perfil </h6>
                    <IoIosArrowDropright className='text-2xl text-lime-300' />
                </div>



            </div>



        </article>
    )
}

export default NombrePerifl