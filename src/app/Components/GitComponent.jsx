import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";

const GitComponent = () => {
    return (
        <article className='group relative cursor-pointer flex justify-center items-centerrelative p-2 border-2 border-[#30363D] rounded-lg  bg-[#0D1117]
    col-span-12 h-[145px] hover:border-lime-500 transition-all duration-200
    sm:h-auto sm:col-span-4 sm:row-span-2
    md:col-span-4 md:row-span-2
    lg:col-span-3
    xl:col-span-3 xl:row-span-2
    2xl:col-span-2  2xl:row-span-3
                    
   '>
            <FaGithub className='absolute text-9xl mx-auto right-2 top-2 opacity-15 2xl:right-12 2xl:top-12 2xl:opacity-10' />
            <div className='w-[90%] mx-auto flex flex-col 2xl:justify-center 2xl:items-center mt-2'>
                <h4 className='text-sm mb-1 2xl:text-center'> Git Hub</h4>
                <h6 className='w-[70%] sm:w-full 2xl:text-center font-thin text-sm mb-2 r flex'>  Aqui publico el codigo de todos mis proyectos  </h6>
                <Link href={"https://github.com/Nicoogf"} className='border ml-auto 2xl:mx-auto border-white w-[60%] sm:w-[85%] py-1 px-3 rounded-lg text-center group-hover:bg-white group-hover:text-[#30363D] transition-all duration-200 max-w-[125px] 2xl:right-12 font-semibold'>
                    Nicoogf
                </Link>
            </div>

        </article>
    )
}

export default GitComponent