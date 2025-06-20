"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'


const DesarrolloWebPage = () => {



  return (
     <div>
       <section className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
           <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
               <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">
                <div className="relative  p-3 lg:col-span-3">
                       <div className="aspect-76/59 relative">
                           <Image src="/servicio-desarrollo-web-argentina.png" alt="Desarrollo Web a Medida en Argentina - Sitios Web Profesionales" width={1207} height={929} />
                       </div>
                   </div>
                   <div className="lg:col-span-2">
                       <div className="md:pr-6 lg:pr-0">
                           <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Desarrollo Web: Tu Presencia Online Profesional</h2>
                           <p className="mt-6 text-sm ">Creamos sitios web y aplicaciones a medida que no solo lucen increíbles, sino que también funcionan perfectamente para alcanzar tus objetivos de negocio. Desde landing pages optimizadas hasta complejas plataformas web, nos enfocamos en la experiencia de usuario, la escalabilidad y la integración de las últimas tecnologías para asegurar tu éxito digital.</p>
                       </div>
                       <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                           <li>
                               <Mail className="size-5" />
                               Soporte técnico y asesoramiento continuo
                           </li>
                           <li>
                               <Zap className="size-5" />
                               Desarrollo ágil y tiempos de respuesta rápidos
                           </li>
                           <li>
                               <Activity className="size-5" />
                               Monitoreo de rendimiento y analíticas web
                           </li>
                           <li>
                               <DraftingCompass className="size-5" />
                               Diseño arquitectónico y escalabilidad
                           </li>
                       </ul>
                   </div>
                   
               </div>
           </div>
       </section>  
     </div>
   );
 };

export default DesarrolloWebPage;
