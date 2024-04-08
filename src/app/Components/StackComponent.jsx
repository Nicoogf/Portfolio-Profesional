import React from 'react' ;
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const StackComponent = () => {
  return (
    <article className="bg-[#313960] rounded-lg p-3 
    col-span-12 row-span-3
    md:col-span-4
    xl:col-span-3 xl:row-span-6 relative">

    <h3 className='text-xs font-bold'>  Tecnologies </h3>
    <h4 className='text-xs mb-3'> Stack programming language </h4>

    <IoIosArrowDroprightCircle className='absolute right-1  animate-pulse'/>
    <section className='flex flex-row items-center gap-x-6 overflow-y-scroll -mt-1'>

      <article className='flex flex-col justify-start items-center rounded-lg fondo-tec py-1 px-2 '>
        <IoLogoJavascript className='pt-1 box-content'/>
        <h4 className='text-xs pt-2 text-center'> Javascript</h4>
        <h6 className='hidden'>  Web development language </h6>
      </article>

      <article className='flex flex-col justify-center items-center rounded-lg fondo-tec py-1 px-2'>
        <TbBrandNextjs className='pt-1 box-content'/>
        <h4 className='text-xs pt-2 w-[70px] text-center'> NextJs</h4>
        <h6 className='hidden'>  Web development language </h6>
      </article>
      <article className='flex flex-col justify-center items-center rounded-lg fondo-tec py-1 px-2'>
        <SiTypescript className='pt-1 box-content'/>
        <h4 className='text-xs pt-2 w-[70px] text-center'> Typescript</h4>
        <h6 className='hidden'>  Web development language </h6>
      </article>
  
      <article className='flex flex-col justify-center items-center rounded-lg fondo-tec py-1 px-2'>
        <FaNode className='pt-1 box-content' />
        <h4 className='text-xs pt-2 w-[70px] text-center'> NodeJs</h4>
        <h6 className='hidden'>  Web development language </h6>
      </article>   

      <article className='flex flex-col justify-center items-center rounded-lg fondo-tec py-1 px-2 '>
        <SiPython className='pt-1 box-content' />
        <h4 className='text-xs pt-2 w-[70px] text-center'> Python </h4>
        <h6 className='hidden'>  Web development language </h6>
      </article>

      <article className='flex flex-col justify-center items-center rounded-lg fondo-tec py-1 px-2 '>
        <SiMongodb className='pt-1 box-content' />
        <h4 className='text-xs pt-2 w-[70px] text-center'> Mongo </h4>
        <h6 className='hidden'>  Web development language </h6>
      </article>         

    </section>
    
    </article>
  )
}

export default StackComponent