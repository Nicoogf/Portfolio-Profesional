import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

const CarreraComponent = () => {
  return (
    <article className=" relative overflow-hidden group flex flex-row justify-center items-center gap-y-2 p-3 fondo-componente  rounded-xl shadow-xl
    col-span-12 row-span-3
    sm:row-span-4
    md:col-span-6 md:row-span-4
    xl:col-span-3 xl:row-span-6">

      <div className="w-[90%] flex flex-col gap-y-2">

      <h2 className="text-white font-semibold text-sm 
      sm:text-[14px] sm:-mb-1
      md:text-xl  
      lg:text-2xl lg:mb-3
      xl:mb-1"> 
      Educacion 
      </h2>

      <div className="border border-[#4F5D98] w-[65%] max-w-[450px]" />
    

      <h3 className="font-thin mb-1 text-[10px] w-[75%]
                   sm:text-[11px] 
                   md:text-xs
                   lg:text-sm 
                   xl:text-base"> 
                  Certificacion oficial en reconocidos institutos educativos 
                   
      </h3>

      
  
      </div>


      <div className='absolute bg-black/15 opacity-0 top-0 bottom-0 w-[80px] flex flex-col justify-center items-center overflow-hidden -right-24 group-hover:right-0 group-hover:opacity-100 transition-all duration-150 '>
        <IoIosArrowDropright  className='text-5xl text-gray-300'/>
      </div>     

      
    </article>
  )
}

export default CarreraComponent