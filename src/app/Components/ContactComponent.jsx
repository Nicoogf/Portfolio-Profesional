import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";


const ContactComponent = () => {
  return (
    <article className="p-3 fondo-componente rounded-xl flex flex-col sm:items-center 
    col-span-12 row-span-4
    md:items-start justify-center
    xl:col-span-6 xl:row-span-7
    ">
      <h3 className="text-start font-semibold block w-[95%] mx-auto mb-2 text-sm sm:text-[14px] 
                    md:text-xl md:mx-0"> Deja tu Propuesta o Proyecto </h3>

      <div className='md:w-[100%] md:flex md:flex-row gap-x-2'>

        <div className="flex flex-row w-full items-center justify-center gap-x-2 
                        md:flex-col md:justify-start md:items-start md:w-[50%]">

          <div className="flex flex-col items-center justify-center sm:w-[70%] 
                          md:w-[100%]">

          <input type="text" className=" block w-[95%] mx-auto rounded-lg bg-[#4F5D98] mb-2 p-2 placeholder:text-gray-300 placeholder:text-xs placeholder:absolute placeholder:top-2 placeholder:left-2 text-sm outline-none
                                        md:w-[100%]" placeholder="Remitente"/>

          <input type="text" className="block w-[95%] mx-auto rounded-lg bg-[#4F5D98] mb-1 placeholder:text-gray-300 placeholder:text-xs placeholder:absolute placeholder:top-2 placeholder:left-2 text-sm text-left p-2 outline-none
                                        md:w-[100%]" placeholder="Mensaje"/>

          </div>
    
          <button className="text-white text-xs fondo px-3 py-8 rounded-lg mx-auto block
                            sm:w-[25%] sm:py-8
                            md:py-3 md:mr-0 md:mt-2"> 
                            Enviar 
          </button>

        </div>

        <div className='hidden md:flex md:flex-col md:w-[50%] '>

          <h2 className='text-center mb-3 text-xl font-bold'>
            Otras de contacto
          </h2>

          <div className="border border-[#4F5D98] w-[80%] max-w-[450px]
                          md:mx-auto mb-3" />

          <div className='flex w-full flex-row justify-center items-center gap-x-4'>
            <article className='flex flex-col items-center bg-[#4F5D98] p-4 rounded-full'>
              <SiGmail className='text-2xl'/>
            
            </article>

            <article className='flex flex-col items-center bg-[#4F5D98] p-4 rounded-full'>
              <FaWhatsapp className='text-2xl'/>
             
            </article>

            <article className='flex flex-col items-center bg-[#4F5D98] p-4 rounded-full'>
              <RiDiscordLine className='text-2xl'/>
             
            </article>

            <article className='flex flex-col items-center bg-[#4F5D98] p-4 rounded-full'>
              <FaInstagram className='text-2xl'/>             
            </article>
          </div>
        </div>
      </div>
     
    
    </article>
  )
}

export default ContactComponent ;