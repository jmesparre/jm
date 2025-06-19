"use client";

import TiltedCard from '@/components/TiltedCard';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <main>
      <section id="home" className="hero ">
        <div className='z-5 relative sm:absolute top-[19vh] sm:top-[25%] md:top-[30vh] lg:top-[22vh] left-[5%]  md:left-[11%] xl:left-[19%]  sm:w-[178px] sm:h-[280px] w-[216px] h-[340px] md:w-[216px] md:h-[340px] lg:w-[261px] lg:h-[410px]'>
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
        <div className='relative  ml-[6%] sm:ml-[39%] md:ml-[40%] pb-20 sm:pb-0 sm:absolute top-[29vh] sm:top-[22%] md:top-[30vh] w-[80%] sm:w-[48%] md:w-[48%] lg:w-[46%]'>
            <h1 className='font-title text-5xl sm:text-5xl md:text-6xl pb-2 sm:pb-0 '>Diseño y Desarrollo Web a medida</h1>
            <h2 className=' pb-4 sm:pb-2  mt-[1%] sm:mt-5 text-sm sm:text-1xl md:text-base lg:text-base'>
              Hola me llamo Juan. Soy diseñador y desarrollador web con más de 10 años de experiencia, especializado en crear soluciones digitales a medida: desde desarrollo web y e-commerce, hasta sistemas CRM/CMS, branding y estrategias SEO. Mi objetivo es potenciar tu presencia online y generar resultados profesionales.
            </h2>
             <div className="pb-20 flex flex-wrap items-center  gap-2 md:flex-row  mt-[1%] sm:mt-5  w-[100%] sm:w-[40%] text-sm sm:text-1xl md:text-base">
              <Button className='bg-primary z-5 cursor-pointer group' variant="outline" size="sm">
                <ArrowRight
                    className=" mr-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                Escribime
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32.7 32.9" className="ml-2 h-3.5 w-3.5">
                  <path style={{ fill: '#00bf22', fillRule: 'evenodd' }} d="M24.1,19.7c-.4-.2-2.4-1.3-2.7-1.4-.4-.2-.6-.2-.9.2-.3.4-1.1,1.3-1.4,1.6-.2.3-.5.3-.9,0-.4-.2-1.7-.7-3.2-2.2-1.2-1.1-1.9-2.5-2.2-2.9-.2-.4,0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3,0-.5,0-.7,0-.2-.8-2.3-1.1-3.1-.3-.8-.7-.7-.9-.7-.2,0-.5,0-.8,0-.3,0-.7,0-1.1.5-.4.4-1.5,1.3-1.6,3.4,0,2,1.3,4,1.5,4.3.2.3,2.7,4.6,6.8,6.4,4.1,1.8,4.1,1.2,4.9,1.2.8,0,2.5-.9,2.8-1.8.4-.9.4-1.8.3-1.9,0-.2-.4-.3-.8-.5h0ZM16.6,29.4c-2.7,0-5.2-.8-7.3-2.2l-5.1,1.6,1.7-5c-1.6-2.2-2.5-4.9-2.5-7.8,0-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3-6,13.3-13.3,13.3h0ZM16.6,0C7.8,0,.6,7.2.6,16s.8,5.9,2.3,8.3l-2.9,8.6,8.9-2.8c2.3,1.3,4.9,2,7.7,2,8.9,0,16-7.2,16-16S25.5,0,16.6,0h0Z"/>
                </svg>
              </Button>
              
            </div>
        </div>
        <div className='relative h-full sm:h-[111vh] opacity-0'>scroll</div>
      </section>
    </main>
  );
}
