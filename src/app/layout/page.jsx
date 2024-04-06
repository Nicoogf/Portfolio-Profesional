import React from 'react'
import Image from 'next/image'
import { GoCopy } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";

import NombrePerifl from '../Components/NombrePerifl';
import Link from 'next/link';
import GitComponent from '../Components/GitComponent';
import Curriculum from '../Components/Curriculum';
import Redes from '../Components/redes';


const page = () => {
    return (
        <main className='grid grid-cols-12 sm:grid-rows-12 text-white p-2 gap-2
        w-[98%] mx-auto max-w-[1440px] rounded-2xl h-[calc(100vh-32px)] overflow-y-scroll overflow-hidden
        bg-red-500 
        sm:bg-blue-600 
        md:bg-violet-500 
        lg:bg-slate-500  
        xl:bg-pink-500
        2xl:bg-yellow-400'>

            <NombrePerifl />

            <GitComponent />

            <Curriculum />



            <article className='group relative cursor-pointer flex justify-center items-centerrelative p-2 border-2 border-[#30363D] rounded-lg  bg-[#0D1117]
                                col-span-12 h-[145px] hover:border-lime-500 transition-all duration-200
                                sm:h-auto sm:col-span-6 sm:row-span-3
                                md:col-span-8 md:row-span-3
                                lg:col-span-8 lg:row-span-3
                                xl:col-span-8 xl:row-span-4 
                                2xl:col-span-6                      
                               '>
                4
            </article>

            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-4 sm:row-span-3
                                md:col-span-4 md:row-span-2
                                lg:col-span-4 lg:row-span-3
                                xl:col-span-4 xl:row-span-3
                                2xl:col-span-2                          
                               '>
                5
            </article>

            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-8 sm:row-span-3
                                md:col-span-4 md:row-span-2
                                lg:col-span-4 lg:row-span-2
                                xl:col-span-4 xl:row-span-4 
                                2xl:col-span-2 2xl:row-span-3               
                               '>
                6
            </article>

            <Redes />

            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-4 sm:row-span-2
                                md:col-span-4 md:row-span-2 
                                lg:col-span-4 
                                xl:col-span-4 xl:row-span-3   
                                2xl:col-span-3                   
                               '>
                8
            </article>
            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-4 sm:row-span-2
                                md:col-span-4 md:row-span-2
                                lg:col-span-6
                                xl:col-span-2 xl:row-span-3
                                2xl:col-span-3    
                                                   
                               '>
                9
            </article>

            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-4 sm:row-span-2
                                lg:row-span-2 lg:col-span-6
                                xl:col-span-3   xl:row-span-3
                                2xl:row-span-3 2xl:col-span-6                   
                               '>
                10
            </article>


            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-4 sm:row-span-2
                                md:row-span-3
                                lg:row-span-4 lg:col-span-3 
                                xl:row-span-3
                                2xl:col-span-6  2xl:row-span-3     
                               '>
                11
            </article>

            <article className='group cursor-pointer  flex flex-col items-center relative p-2 border-2 border-[#30363D] rounded-lg  bg-[#0D1117]
                                col-span-12 h-[145px] hover:border-lime-500 transition-all duration-200                                
                                sm:h-auto sm:col-span-4 sm:row-span-2
                                md:row-span-3 md:col-span-8
                                lg:row-span-4 lg:col-span-9
                                xl:row-span-3 xl:col-span-6
                                2xl:col-span-6  2xl:row-span-3     
                               '>
                <h4 className='text-lg'> Contacto </h4>

                <div className='flex flex-row'>
                <div className='flex justify-center flex-col w-[50%] ml-2'>                  
                    <h6 className='text-sm font-thin'>  Deja tu Proyecto o propuesta </h6>
                </div>

                <div className='flex flex-col justify-center items-center w-[50%]'>
                    <Link href={""} className='border boder-white bg-[#0D1117] px-3 py-1 rounded-lg text-center text-sm '>
                        formulario <br />
                        de Contacto
                    </Link>
                </div>
                </div>

                

            </article>


        </main>
    )
}

export default page