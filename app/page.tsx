"use client";

import TiltedCard from '@/components/TiltedCard';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <section id="home" className="hero ">
        <div className='z-10 relative sm:absolute top-[16vh] sm:top-[25%] md:top-[30vh] lg:top-[27vh] left-[5%] md:left-[11%] xl:left-[17%]  sm:w-[178px] sm:h-[280px] w-[216px] h-[340px] md:w-[216px] md:h-[340px] lg:w-[261px] lg:h-[410px]'>
          <TiltedCard
            imageSrc="/juguete.png"
            altText="Juan Manuel Esparré - Desarrollador Web"
            captionText="Hola!"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={22}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={null}
          />
        </div>
        <div className='relative pb-20 sm:pb-0 sm:absolute top-[18vh] sm:top-[22%] md:top-[30vh] w-[80%] sm:w-[100%]'>
            <h1 className='font-title ml-[6%] sm:ml-[41%] w-[100%] sm:w-[50%]  text-5xl sm:text-5xl md:text-6xl pb-2 sm:pb-0 '>Hola, hago Diseño y Desarrollo Web</h1>
            <h2 className=' ml-[6%] sm:ml-[41%] pb-4 sm:pb-2  mt-[1%] sm:mt-5 w-[100%] sm:w-[47%] text-sm sm:text-1xl md:text-base lg:text-base'>
              Hola mi nombre es Juan Manuel, Creo soluciones web, Diseñador y desarrollador web con mas de 10 años de experincia posicionamiento en los buscadore SEO Lorem ipsum, dolor sit amet consectetur amet consectetur amet Lorem ipsum.
            </h2>
             <div className="pb-20 ml-[5%] sm:ml-[41%] flex flex-wrap items-center  gap-2 md:flex-row  mt-[1%] sm:mt-5  w-[100%] sm:w-[40%] text-sm sm:text-1xl md:text-base">
              <Button className='bg-background text-foreground z-20 cursor-pointer' variant="outline" size="sm">Agenda una llamada</Button>
              <Button className='bg-primary z-20 cursor-pointer' variant="outline" size="sm">Button</Button>
            </div>
        </div>
        <div className='relative h-full sm:h-[101vh] opacity-0'>scroll</div>
      </section>
    </main>
  );
}
