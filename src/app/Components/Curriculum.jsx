import Link from 'next/link'
import React from 'react'
import { IoDocumentOutline } from "react-icons/io5";

const Curriculum = () => {
    return (
        <article className='relative group p-2 flex flex-row-reverse gap-x-2 bg-[#0D1117] border-2 border-[#30363D] rounded-lg 
    col-span-12  h-[145px] hover:border-lime-500 transition-all duration-200
    sm:h-auto sm:col-span-6 sm:row-span-3
    md:col-span-4 md:row-span-3 
    lg:col-span-3 lg:row-span-2
    xl:col-span-3 xl:row-span-2
    2xl:row-span-3 2xl:col-span-4
   '>

            <div className='w-[55%] mr-4 flex justify-center flex-col'>
                <h4 className='font-semibold text-end'> Curriculum </h4>
                <p className='font-thin text-xs text-end'> Texto largo que habla sobre el curriculum y perfil profesional</p>
            </div>

            <div className='w-[45%] flex flex-col justify-center gap-y-2'>
                <button className='border border-white hover:bg-white hover:text-[#0D1117] transition-all duration-200 px-3 py-2 rounded-lg text-xs text-center'>
                    Descagar PDF
                </button>
                <Link href={""} className='border border-white hover:bg-white hover:text-[#0D1117] transition-all duration-200 px-3 py-2 rounded-lg text-xs text-center' >
                    Ver Curriculum
                </Link>
            </div>

            <IoDocumentOutline className='absolute text-9xl text-gray-500 opacity-20 left-4 sm:top-10' />
        </article>
    )
}

export default Curriculum