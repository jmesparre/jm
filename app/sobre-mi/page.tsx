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
                    <div className="md:order-1 relative mt-33">
                        <Image src="/foto-perfil.png" alt="Juan Manuel Esparré - Desarrollador Web Full Stack y Diseñador UX/UI"
                            className="rounded-2xl w-[96%] mx-auto object-cover filter brightness-105"
                         width={1207} height={929} /> 
                        
                    </div>
                    <div className="md:order-2 flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between mt-[1em] sm:mt-[52%]">
                            <div>
                                <h2 className="text-5xl font-semibold  mt-auto pt-8">
                                    Juan Manuel Esparré
                                </h2>
                                <p className="text-sm  w-[95%] pt-4 ">
                                    Soy Juan Manuel Esparré, un apasionado desarrollador y diseñador web con más de una década de experiencia en la creación de soluciones digitales innovadoras. Mi trayectoria abarca desde el desarrollo web a medida y e-commerce, hasta la implementación de sistemas CRM/CMS, estrategias de branding y optimización SEO. Me dedico a transformar ideas en plataformas digitales funcionales y estéticamente atractivas, siempre con un enfoque en la usabilidad y el rendimiento. Mi objetivo es ayudarte a potenciar tu presencia online y alcanzar tus metas de negocio a través de soluciones web personalizadas y de alta calidad.
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
