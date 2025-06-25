import React from 'react';
import Image from 'next/image';

const SobreMiPage = () => {
  return (
      <div className="mt-[38vh] pb-50 text-background">
            <div className="px-[11%] mx-auto">
                   <h1 className="font-title text-pretty text-5xl md:text-5xl lg:text-6xl lg:max-w-3xl">
                              Sobre Mi
                            </h1>
                <div className="grid md:grid-cols-2 gap-8 relative overflow-x-hidden">
                    <div className="md:order-2 relative mt-33">
                        <Image priority={true} src="/profile2.png" alt="Juan Manuel Esparré - Desarrollador Web Full Stack y Diseñador UX/UI"
                            className="rounded-2xl w-[50%] mx-auto object-cover filter brightness-105"
                         width={388} height={568} quality={100} /> 
                        
                    </div>
                    <div className="md:order-1 flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between mt-[1em] sm:mt-[35%]">
                            <div>
                                <h2 className="text-5xl font-semibold  mt-auto pt-8">
                                    Juan Manuel Esparré
                                </h2>
                                <p className="text-sm  w-[95%] pt-4 ">
                                     Soy un desarrollador creativo que siempre tuvo curiosidad por cómo funcionan las cosas. Me encanta crear cosas que no solo sean funcionales, sino también intuitivas y un poco encantadoras. Ya sea una microinteracción o una experiencia completa, creo que el buen diseño está en los detalles.

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
