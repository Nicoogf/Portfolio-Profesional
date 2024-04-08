


import WelcomeComponent from "./Components/WelcomeComponent";
import ProfileComponent from "./Components/ProfileComponents";
import CurriculumComponent from "./Components/CurriculumComponent";
import GitComponent from "./Components/GitComponent";
import CarreraComponent from "./Components/CarreraComponent";
import ContactComponent from "./Components/ContactComponent";
import ProyectComponent from "./Components/ProyectComponent";
import StackComponent from "./Components/StackComponent";
import EstComponent from "./Components/EstComponent";
import DigitalMoneyComponent from "./Components/DigitalMoneyComponent";

export default function Home() {
  return (
    <main className='grid grid-cols-12  text-white p-4 gap-4 
    w-[98%] mx-auto max-w-[1440px] rounded-2xl  overflow-y-scroll overflow-hidden
    fondo'>

      <section className="grid gap-4 rounded-lg
      h-[500px] grid-cols-12 grid-rows-12 col-span-12 row-span-6
      md:h-[30vh]    
      xl:md:h-[350px] 
      ">
 
        <WelcomeComponent />

        <ProfileComponent />

        <CurriculumComponent />

        <GitComponent />

        <CarreraComponent />

      </section>

      <section className="fondo grid gap-4 rounded-lg
      h-[500px] grid-cols-12 grid-rows-12 col-span-12 row-span-6
      md:h-[65vh]  
      xl:md:h-[500px]
      2xl:h-[55vh]">

        <ContactComponent />

        <ProyectComponent />      

        <StackComponent /> 

        <EstComponent />

        <DigitalMoneyComponent />

        
      </section>

       
          
    </main>
  );
}
