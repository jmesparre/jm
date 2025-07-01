import React from 'react';
import Image from 'next/image';

const SobreMiPage = () => {
  return (
      <div className="mt-[38vh] pb-50 text-background">
            <div className="px-[11%] mx-auto">
                  
                <div className="grid md:grid-cols-2 gap-8 relative overflow-x-hidden">
                    <div className="md:order-2 relative ">
                        <Image priority={true} src="/profile7a.png" alt="Juan Manuel Esparré - Desarrollador Web Full Stack y Diseñador UX/UI"
                            className="rounded-2xl border-background border-2 w-[100%] lg:w-[62%] md:w-[70%] m-auto md:mt-33 lg:mt-22 object-cover filter brightness-105"
                         width={500} height={500} quality={100} /> 
                        
                    </div>
                    <div className="md:order-1 flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between mt-[1em] ">
                            <div>
                                 <h1 className="font-title pb-10 text-pretty text-5xl md:text-5xl lg:text-6xl lg:max-w-3xl">
                              Sobre Mi
                            </h1>
                                <p className="text-sm  w-[95%] pt-4 ">
                                     Mi nombre es Juan Manuel Esparré, tengo 39 años y vivo en San Luis, Argentina. Soy un desarrollador creativo que siempre tuvo curiosidad por cómo funcionan las cosas. Me encanta crear cosas que no solo sean funcionales, sino también intuitivas y un poco encantadoras. Ya sea una microinteracción o una experiencia completa, creo que el buen diseño está en los detalles.

Trabajo mejor cuando formo parte de todo el proceso — desde la primera idea hasta la última línea de código. Ya sea diseñando y desarrollando desde cero, o dando vida a un diseño existente con un desarrollo limpio y responsivo, me enfoco en crear experiencias digitales que simplemente se sientan bien.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
      </div>
  );
};

export default SobreMiPage;
