"use client";

import Link from 'next/link';
import TiltedCard from '@/components/TiltedCard';

export default function Home() {
  return (
    <main>
      <section id="home" className="hero relative pt-28">
        <div className='absolute left-[5%] md:left-[13%]  sm:w-[178px] sm:h-[280px] w-[127px] h-[200px] md:w-[216px] md:h-[340px]'>
          <TiltedCard
            imageSrc="/juguete.png"
            altText="Juan Manuel Esparré - Desarrollador Web"
            captionText="Hola!"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
               <p className="tilted-card-demo-text">
                
              </p>
              
            }
           />
          </div>
          <div className='pl-10 absolute left-[5%] md:left-[13%] sm:ml-40 ml-28 md:ml-55 top-[20%] w-[50%]'>
             <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold pb-4 '>Hola mi nombre es Juan Manuel</h1>
             <h2 className='text-xs sm:text-1xl md:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis doloremque a incidunt temporibus hic quas. Quam et rem, maiores dolor veritatis totam obcaecati hic nostrum consequatur adipisci, esse, odio tenetur!</h2>
          </div>
        <div className="absolute bottom-0 items-end justify-between p-4 md:pl-10 w-full"> {/* Changed layout */} 
          <div className="flex flex-col items-start w-full"> {/* Text block */}
           {/*<h1 className="text-3xl md:text-6xl font-bold mb-2">Desarrollador Web</h1>*/}
            <div className="w-full w-line bg-verde mb-4"></div> {/* White line */}
            <h2 className=" text-xs md:text-sm mb-6 sm:w-2/3 md:w-2/3">Hola mi nombre es Juan Manuel, creo soluciones basadas en la necesidad del clientes, creo soluciones basadas en la necesidad del clientes.</h2>
          </div>
          <div className="absolute bottom-10 right-4 "> {/* Button block */}
            <Link href="/contacto" className="border text-sm cursor-pointer border-2 py-2 px-6 rounded-md hover:bg-[#9ec8f3] hover:text-[#0A433A] transition-colors duration-300">Servicios</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
