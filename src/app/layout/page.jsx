import React from 'react'
import Image from 'next/image'
import { GoCopy } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";

import NombrePerifl from '../Components/NombrePerifl';
import Link from 'next/link';
import GitComponent from '../Components/GitComponent';
import Curriculum from '../Components/Curriculum';


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

           

            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
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
            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-4 sm:row-span-2
                                md:col-span-4 md:row-span-2
                                lg:col-span-4
                                xl:col-span-2 xl:row-span-3     
                                2xl:row-span-3                 
                               '>
                7
            </article>

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

            <article className='border-2 border-black rounded-lg 
                                col-span-12  h-[145px]
                                sm:h-auto sm:col-span-4 sm:row-span-2
                                md:row-span-3 md:col-span-8
                                lg:row-span-4 lg:col-span-9
                                xl:row-span-3 xl:col-span-6
                                2xl:col-span-6  2xl:row-span-3     
                               '>
                12
            </article>


        </main>
    )
}

export default page