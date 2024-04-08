import React from 'react'

const ContactComponent = () => {
  return (
    <article className="p-3 bg-[#313960] rounded-xl flex flex-col sm:items-center 
    col-span-12 row-span-4
    xl:col-span-6 xl:row-span-7
    ">
      <h3 className="text-start font-semibold block w-[95%] mx-auto mb-2 text-sm sm:text-[14px]"> Deja tu Propuesta o Proyecto </h3>

      <div className="flex flex-row w-full items-center justify-center gap-x-2">

        <div className="flex flex-col items-center justify-center sm:w-[70%]">

        <input type="text" className=" block w-[95%] mx-auto rounded-lg bg-[#4F5D98] mb-2 p-2 placeholder:text-gray-300 placeholder:text-xs placeholder:absolute placeholder:top-2 placeholder:left-2 text-sm outline-none" placeholder="Remitente"/>

        <input type="text" className=" block w-[95%] mx-auto rounded-lg bg-[#4F5D98] mb-1 placeholder:text-gray-300 placeholder:text-xs placeholder:absolute placeholder:top-2 placeholder:left-2 text-sm text-left p-2 outline-none" placeholder="Mensaje"/>

        </div>
  
        <button className="text-white text-xs fondo px-3 py-8 rounded-lg mx-auto block
                          sm:w-[25%] sm:py-8"> 
                          Enviar 
        </button>

      </div>
    
    </article>
  )
}

export default ContactComponent ;