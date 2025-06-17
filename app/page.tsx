"use client";

import TiltedCard from '@/components/TiltedCard';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <section id="home" className="hero ">
        <div className='z-10 relative sm:absolute top-[19vh] sm:top-[25%] md:top-[30vh] lg:top-[22vh] left-[5%]  md:left-[11%] xl:left-[20%]  sm:w-[178px] sm:h-[280px] w-[216px] h-[340px] md:w-[216px] md:h-[340px] lg:w-[261px] lg:h-[410px]'>
          <TiltedCard
            imageSrc="/juguete.png"
            altText="Juan Manuel Esparré - Desarrollador Web, Diseño Web, E-commerce, SEO"
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
        <div className='relative  ml-[6%] sm:ml-[39%] md:ml-[41%] pb-20 sm:pb-0 sm:absolute top-[20vh] sm:top-[22%] md:top-[30vh] w-[80%] sm:w-[48%] md:w-[48%] lg:w-[46%]'>
            <h1 className='font-title  text-5xl sm:text-5xl md:text-6xl pb-2 sm:pb-0 '>Diseño y Desarrollo Web a medida</h1>
            <h2 className=' pb-4 sm:pb-2  mt-[1%] sm:mt-5 text-sm sm:text-1xl md:text-base lg:text-base'>
              Hola me llamo Juan. Soy diseñador y desarrollador web con más de 10 años de experiencia, especializado en crear soluciones digitales a medida: desde desarrollo web y e-commerce, hasta sistemas CRM/CMS, branding y estrategias SEO. Mi objetivo es potenciar tu presencia online y generar resultados profesionales.
            </h2>
             <div className="pb-20 flex flex-wrap items-center  gap-2 md:flex-row  mt-[1%] sm:mt-5  w-[100%] sm:w-[40%] text-sm sm:text-1xl md:text-base">
              <Button className='bg-primary z-5 cursor-pointer' variant="outline" size="sm">Contáctame Ahora</Button>
            </div>
        </div>
        <div className='relative h-full sm:h-[111vh] opacity-0'>scroll</div>
      </section>
    </main>
  );
}
