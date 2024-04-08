import React from 'react'
import Image from "next/image"
import profile from "../../../public/profile.jpg"
import { FaRegCopy } from "react-icons/fa6";

const ProfileComponent = () => {
  return (
    <article className="relative p-3 bg-[#313960] rounded-xl shadow-xl flex flex-row items-center gap-x-1
        col-span-12 row-span-3 
        sm:col-span-6 sm:row-span-6 sm:flex-col sm:gap-y-2
        md:row-span-8 md:justify-center
        lg:p-6 
        xl:order-first xl:col-span-3 xl:row-span-12
        ">
        
          <div className='object-cover rounded-full w-[25%] relative
                          sm:w-full '>
            <Image src={profile}  className="w-14 h-14 object-cover rounded-full
                                            sm:w-24 sm:h-24 sm:mx-auto
                                            md:w-24 md:h-24"/>
            <div className='w-3 h-3 bg-lime-500 rounded-full absolute bottom-1 right-3 animate-pulse
                            sm:right-6'/>

          
          </div>
        

         <div className='w-[75%]
                         sm:w-full'>
          <h2 className="text-xs mb-1
                         sm:text-center
                         md:text-lg  md:mb-0 
                         lg:text-lg
                         xl:text-lg xl:mb-0"> 
                         Nicolas Falabella 
          </h2>

          <h1 className="text-sm font-semibold 
                         sm:text-center sm:text-[12px]
                         md:text-xl
                         lg:text-2xl"> 
          Frontend Developer 
          </h1>

          <h3 className="text-xs font-thin 
                         sm:text-[10px] sm:text-center
                         md:text-center md:text-base md:-mt-1
                         lg:text-base
                         xl:text-base"> 
                         nicolasgfalabella@gmail.com 
          </h3>

          <h4 className="text-xs mt-2 bg-[#4F5D98] inline-block py-1 px-3 rounded-lg w-[82px] text-center
                         sm:mt-3 sm:text-sm sm:flex sm:w-[95px]  sm:items-center sm:justify-center sm:text-center sm:mx-auto
                         md:text-base md:py-2 md:mt-2 md:w-[50%]
                         lg:mt-3
                         xl:py-1 xl:px-0 xl:text-base xl:w-[55%]"> 
                         Ver mas 
          </h4>

         </div>

       <FaRegCopy  className="absolute bottom-2 right-3 bg-[#4F5D98] text-base box-content p-2 rounded-full
                              sm:top-2 sm:right-1" /> 
    </article>

  )
}

export default ProfileComponent ;