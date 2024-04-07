
import profile from "../../public/profile.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <main className='grid grid-cols-12  text-white p-4 gap-4 
    w-[98%] mx-auto max-w-[1440px] rounded-2xl  overflow-y-scroll overflow-hidden
    fondo'>

      <section className="grid gap-4 rounded-lg
      h-[500px] grid-cols-12 grid-rows-12 col-span-12 row-span-6
      md:h-[600px] 
      lg:h-[700px] 
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
          md:text-2xl  
          lg:text-3xl lg:mb-3
          xl:mb-1"> 
          Welcome to Personal Portfolio 
          </h2>

          <div className="border border-[#4F5D98] w-[80%] my-1 max-w-[450px]" />

         

          <h6 className="text-xs font-thin  
          sm:text-sm 
          md:text-xl md:w-[60%] 
          lg:text-xl
          xl:text-base"> 
            En el layout encontraras los proyectos que he realizado hasta el momento 
          </h6>
        </article>



        <article className="p-3 bg-[#313960]  rounded-lg shadow-xl flex flex-row items-center gap-x-3
        col-span-12 row-span-3 
        sm:col-span-6 sm:row-span-6 sm:flex-col sm:gap-y-2
        md:row-span-8 md:justify-center
        lg:p-6 
        xl:order-first xl:col-span-3 xl:row-span-12
        ">

         <Image src={profile}  className="w-14 h-14 object-cover rounded-full
                                          sm:w-24 sm:h-24
                                          md:w-48 md:h-48"/>

         <div>
          <h2 className="text-xs mb-1
                         sm:text-center
                         md:text-xl"> 
                         Nicolas Falabella 
          </h2>

          <h1 className="text-sm font-semibold 
                         sm:text-center sm:text-[12px]
                         md:text-2xl"> 
          Frontend Developer 
          </h1>

          <h3 className="text-xs font-thin
                         sm:text-[11px]
                         md:text-center md:text-lg"> 
                         nicolasgfalabella@gmail.com 
          </h3>

          <h4 className="text-xs mt-2 sm:text-center
                         sm:mt-4 sm:text-base
                         md:text-xl"> Lear more </h4>
         </div>
        </article>

        <article className="bg-gray-300 rounded-lg 
        col-span-6 row-span-3 
        sm:row-span-3
        md:col-span-3 md:row-span-4
        xl:col-span-3 xl:row-span-6">
        Cv
        </article>

        <article className="bg-gray-300 rounded-lg 
        col-span-6 row-span-3
        md:col-span-3 md:row-span-4
        xl:col-span-3 xl:row-span-6">
        git
        </article>

        <article className="bg-gray-300 rounded-lg 
        col-span-12 row-span-3
        sm:row-span-4
        md:col-span-6 md:row-span-4
        xl:col-span-3 xl:row-span-6">
        education
        </article>

      </section>

      <section className="bg-gray-500 grid gap-4 rounded-lg
      h-[500px] grid-cols-12 grid-rows-12 col-span-12 row-span-6
      md:h-[600px] 
      lg:h-[700px] 
      xl:md:h-[500px]
      2xl:h-[55vh]">

        <article className="bg-gray-300 rounded-lg 
        col-span-12 row-span-4
        xl:col-span-6 xl:row-span-7
        ">
        Formulario
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
