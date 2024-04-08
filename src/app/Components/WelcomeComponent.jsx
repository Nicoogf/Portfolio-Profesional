import React from 'react'

const WelcomeComponent = () => {
  return (
    <article className="p-3 fondo-componente  rounded-xl shadow-xl 
        col-span-12 row-span-3 
        sm:row-span-4 sm:flex sm:flex-col sm:justify-center
        lg:p-6
        xl:col-span-9 xl:row-span-6 
        ">
          
          <h2 className="text-white font-semibold text-lg  leading-5 mb-1
          sm:text-xl 
          md:text-lg
          lg:text-2xl lg:mb-3
          xl:mb-1"> 
          Bienvenido al Portfolio Personal
          </h2>

          <div className="border border-[#4F5D98] w-[80%] my-2 max-w-[450px]
                          md:my-1" />
         

          <h6 className="text-xs font-thin  
          sm:text-sm 
          md:w-[65%] md:text-sm 
          lg:text-base
          xl:text-base"> 
            En el layout encontraras los proyectos que he realizado hasta el momento 
          </h6>
    </article>
  )
}

export default WelcomeComponent ;