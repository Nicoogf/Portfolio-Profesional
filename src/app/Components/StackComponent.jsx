import React from 'react' ;
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

const StackComponent = () => {
  return (
    <article className="bg-[#313960] rounded-xl p-3 flex flex-row overflow-hidden
    col-span-12 row-span-3
    md:col-span-4
    xl:col-span-3 xl:row-span-6 relative ">

      <section className="flex flex-col w-[40%] justify-center">
        <h3 className='text-sm font-bold text-start'>  Tecnologias </h3>
        <h4 className='text-xs mb-3'> Stack de Lenguajes  </h4>
      </section>

      <div className=' w-[60%] p-1 flex flex-col gap-y-1 overflow-hidden overflow-y-auto'>
       
        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <IoLogoJavascript  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Javascript</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <FaReact  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>React</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <SiRedux  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Redux</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <TbBrandNextjs  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>NextJs</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <FiFramer  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Framer Motion</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <BiLogoMongodb  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>MongoDB</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <SiTypescript  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Typescript</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <IoLogoPython  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Python</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <FaGithub  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Git</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <SiTailwindcss  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Tailwind</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <SiReactquery  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>React Query</h4>
        </article>

        <article className='rounded-md border-gray-300 flex flex-row items-center gap-x-1 w-full justify-around p-1'>
          <FaWordpress  className='w-[20%]'/>
          <h4 className='text-xs w-[80%]'>Wordpress</h4>
        </article>

        

      </div>

    

   
    
    </article>
  )
}

export default StackComponent