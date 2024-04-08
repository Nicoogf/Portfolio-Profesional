import React from 'react'
import { BsPersonWorkspace } from 'react-icons/bs'

const CarreraComponent = () => {
  return (
    <article className=" flex flex-row justify-center items-center gap-y-2 p-3 bg-[#313960] rounded-lg shadow-xl
    col-span-12 row-span-3
    sm:row-span-4
    md:col-span-6 md:row-span-4
    xl:col-span-3 xl:row-span-6">

      <div className="w-[65%] flex flex-col gap-y-2">

      <h2 className="text-white font-semibold text-xs 
      sm:text-xl sm:-mb-1
      md:text-xl  
      lg:text-2xl lg:mb-3
      xl:mb-1"> 
      Education 
      </h2>

      <div className="border border-[#4F5D98] w-[80%] max-w-[450px]" />
    

      <h3 className="font-thin mb-1 text-[10px] 
                   sm:text-[11px] 
                   md:text-xs
                   lg:text-sm 
                   xl:text-base"> 
                  Certificacion oficiales en reconocidos institutos educativos 
                   
      </h3>

      
  
      </div>

      <div className="relative border-2 border-[#4F5D98] w-[35%] max-w-[75px] rounded-lg shadow-2xl">
      <BsPersonWorkspace  className="mx-auto text-4xl py-2 box-content"/>
      <h6 className="text-center relative bottom-0 bg-[#4F5D98]  w-full rounded-b-lg text-xs"> Ver carrera </h6>
      </div>

      
    </article>
  )
}

export default CarreraComponent