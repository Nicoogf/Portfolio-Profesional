import React from 'react'

const CurriculumComponent = () => {
  return (
    <article className="p-3 fondo-componente  rounded-xl shadow-xl
    col-span-6 row-span-3  flex flex-col justify-center items-center
    sm:row-span-3
    md:col-span-3 md:row-span-4
    xl:col-span-3 xl:row-span-6">

    <h3 className="text-sm font-semibold  text-center text-[12px]
                   sm:text-[14px]
                   md:text-xl
                   lg:text-2xl"> 
                   Curriculum
    </h3>

    <h3 className="font-thin mb-1 text-[10px] text-center
                   sm:text-[11px]
                   md:text-center md:text-xs
                   lg:text-sm 
                   xl:text-base"> 
                   Curriculum actualizado 
                   <span className="hidden"> en formato PFD </span>
    </h3>

    <h4 className="text-[10px] mt-1 bg-[#4F5D98] inline-block py-1 px-3 rounded-lg w-[82px] text-xs text-center
                   sm:text-sm sm:flex sm:w-[95px] sm:items-center sm:justify-center sm:text-center sm:mx-auto
                   md:text-xs md:py-2 md:mt-1  md:w-[90%]
                   lg:w-[75%] lg:mt-0
                   xl:py-1 xl:px-0 xl:text-base xl:w-[55%]"> Descargar </h4>
    </article>
  )
}

export default CurriculumComponent ;