
import profile from "../../public/profile.jpg"
import Image from "next/image"
import { BsPersonWorkspace } from "react-icons/bs";

export default function Home() {
  return (
    <main className='grid grid-cols-12  text-white p-4 gap-4 
    w-[98%] mx-auto max-w-[1440px] rounded-2xl  overflow-y-scroll overflow-hidden
    fondo'>

      <section className="grid gap-4 rounded-lg
      h-[500px] grid-cols-12 grid-rows-12 col-span-12 row-span-6
      md:h-[390px]    
      xl:md:h-[350px] 
     ">

        <article className="p-3 bg-[#313960]  rounded-lg shadow-xl 
        col-span-12 row-span-3 
        sm:row-span-4 sm:flex sm:flex-col sm:justify-center
        lg:p-6
        xl:col-span-9 xl:row-span-6 
        ">
          
          <h2 className="text-white font-semibold text-lg  leading-5 mb-1
          sm:text-xl 
          md:text-xl  
          lg:text-2xl lg:mb-3
          xl:mb-1"> 
          Welcome to Personal Portfolio 
          </h2>

          <div className="border border-[#4F5D98] w-[80%] my-1 max-w-[450px]" />
         

          <h6 className="text-xs font-thin  
          sm:text-sm 
          md:text-base md:w-[60%] 
          lg:text-base
          xl:text-base"> 
            En el layout encontraras los proyectos que he realizado hasta el momento 
          </h6>
        </article>



        <article className="p-3 bg-[#313960] rounded-lg shadow-xl flex flex-row items-center gap-x-3
        col-span-12 row-span-3 
        sm:col-span-6 sm:row-span-6 sm:flex-col sm:gap-y-2
        md:row-span-8 md:justify-center
        lg:p-6 
        xl:order-first xl:col-span-3 xl:row-span-12
        ">

         <Image src={profile}  className="w-14 h-14 object-cover rounded-full
                                          sm:w-24 sm:h-24
                                          md:w-24 md:h-24"/>

         <div>
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
                         sm:text-[11px]
                         md:text-center md:text-base md:-mt-1
                         lg:text-base
                         xl:text-base"> 
                         nicolasgfalabella@gmail.com 
          </h3>

          <h4 className="text-xs mt-2 bg-[#4F5D98] inline-block py-1 px-3 rounded-lg
                         sm:mt-3 sm:text-base sm:flex sm:w-[80%] sm:items-center sm:justify-center sm:text-center sm:mx-auto
                         md:text-base md:py-2 md:mt-2 md:w-[50%]
                         lg:mt-3
                         xl:py-1 xl:px-0 xl:text-base xl:w-[55%]"> 
                         Lear more 
          </h4>

         </div>
        </article>


        <article className="p-3 bg-[#313960] rounded-lg shadow-xl
        col-span-6 row-span-3  flex flex-col justify-center items-center
        sm:row-span-3
        md:col-span-3 md:row-span-4
        xl:col-span-3 xl:row-span-6">

        <h3 className="text-sm font-semibold  text-center text-[12px]
                       sm:text-[12px]
                       md:text-xl
                       lg:text-2xl"> 
                       Curriculum
        </h3>

        <h3 className="font-thin mb-1 text-[10px] text-center
                       sm:text-[11px]
                       md:text-center md:text-xs
                       lg:text-sm 
                       xl:text-base"> 
                       Descarga el curriculum actualizado 
                       <span className="hidden"> en formato PFD </span>
        </h3>

        <h4 className="text-[10px] mt-1 bg-[#4F5D98] inline-block py-1 px-2 rounded-lg 
                       sm:text-sm sm:flex sm:w-[70%] sm:items-center sm:justify-center sm:text-center sm:mx-auto
                       md:text-xs md:py-2 md:mt-1  md:w-[90%]
                       lg:w-[75%] lg:mt-0
                       xl:py-1 xl:px-0 xl:text-base xl:w-[55%]"> Descargar cv </h4>
        </article>






        <article className="p-3 bg-[#313960] rounded-lg shadow-xl
        col-span-6 row-span-3  flex flex-col justify-center items-center
        sm:row-span-3
        md:col-span-3 md:row-span-4
        xl:col-span-3 xl:row-span-6">
         <h3 className="text-sm font-semibold  text-center text-[12px]
                       sm:text-[12px]
                       md:text-xl
                       lg:text-2xl"> 
                       Git
        </h3>

        <h3 className="font-thin mb-1 text-[10px] text-center
                       sm:text-[11px]
                       md:text-center md:text-xs
                       lg:text-sm 
                       xl:text-base"> 
                      Accede al codigo de mis proyectos 
                       <span className="hidden"> en formato PFD </span>
        </h3>

        <h4 className="text-[10px] mt-1 bg-[#4F5D98] inline-block py-1 px-2 rounded-lg 
                       sm:text-sm sm:flex sm:w-[70%] sm:items-center sm:justify-center sm:text-center sm:mx-auto
                       md:text-xs md:py-2 md:mt-1  md:w-[90%]
                       lg:w-[75%] lg:mt-0
                       xl:py-1 xl:px-0 xl:text-base xl:w-[55%]"> Ir a perfil </h4>
        </article>

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

      </section>

      <section className="bg-gray-500 grid gap-4 rounded-lg
      h-[500px] grid-cols-12 grid-rows-12 col-span-12 row-span-6
      md:h-[600px] 
      lg:h-[700px] 
      xl:md:h-[500px]
      2xl:h-[55vh]">

        <article className="p-3 bg-[#313960] rounded-lg flex flex-col sm:items-center 
        col-span-12 row-span-4
        xl:col-span-6 xl:row-span-7
        ">
          <h3 className="text-start font-semibold block w-[95%] mx-auto mb-2"> Deja tu Propuesta o Proyecto </h3>

          <div className="flex flex-row w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center sm:w-[70%]">
          <input type="text" className=" block w-[95%] mx-auto rounded-lg bg-[#4F5D98] mb-2 p-2 placeholder:text-gray-300 placeholder:text-xs placeholder:absolute placeholder:top-2 placeholder:left-2 text-sm" placeholder="Remitente"/>

          <input type="text" className=" block w-[95%] mx-auto rounded-lg bg-[#4F5D98] mb-1 placeholder:text-gray-300 placeholder:text-xs placeholder:absolute placeholder:top-2 placeholder:left-2 text-sm text-left p-2 " placeholder="A continuacion deja un mensaje"/>
          </div>
      
          <button className="text-white text-xs fondo px-3 py-1 rounded-lg mx-auto block
                            sm:w-[25%] sm:py-8"> Enviar </button>
          </div>
       



        
        </article>
        
        <article className="bg-gray-300 rounded-lg 
        col-span-12 row-span-5
        md:row-span-5
        xl:col-span-6 xl:row-span-6
        ">
        Proyectos
        </article>

      

        <article className="bg-gray-300 rounded-lg 
        col-span-12 row-span-3
        md:col-span-4
        xl:col-span-3 xl:row-span-6">
        tecnologias
        </article>

        <article className="bg-gray-300 rounded-lg 
        col-span-6 row-span-3
        md:col-span-4
        xl:col-span-3 xl:row-span-6">
        estadistica 
        </article>

        <article className="bg-gray-300 rounded-lg 
        col-span-6 row-span-3
        md:col-span-4
        xl:col-span-6 xl:row-span-5">
        digital money
        </article>
      </section>

       
          
    </main>
  );
}
