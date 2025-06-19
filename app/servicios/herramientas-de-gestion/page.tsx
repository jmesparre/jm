import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'


const HerramientasGestionPage = () => {
  return (
     <div>
       <section className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
           <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
               <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">
                <div className="relative  p-3 lg:col-span-3">
                       <div className="aspect-76/59 relative">
                           <Image src="/servicio-herramientas-de-gestion-empresas.png" alt="Herramientas de Gestión Empresarial CRM y CMS a Medida" width={1207} height={929} />
                       </div>
                   </div>
                   <div className="lg:col-span-2">
                       <div className="md:pr-6 lg:pr-0">
                           <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Herramientas de Gestión Empresarial (CRM/CMS)</h2>
                           <p className="mt-6 text-sm ">Desarrollamos e implementamos sistemas CRM (Customer Relationship Management) y CMS (Content Management System) a medida para optimizar tus procesos internos, mejorar la relación con tus clientes y gestionar tu contenido de manera eficiente. Nuestras soluciones te permiten centralizar información, automatizar tareas y tomar decisiones estratégicas basadas en datos.</p>
                       </div>
                       <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                           <li>
                               <Mail className="size-5" />
                               Sistemas CRM para optimizar la relación con clientes
                           </li>
                           <li>
                               <Zap className="size-5" />
                               CMS personalizados para una gestión de contenido eficiente
                           </li>
                           <li>
                               <Activity className="size-5" />
                               Automatización de procesos y flujos de trabajo
                           </li>
                           <li>
                               <DraftingCompass className="size-5" />
                               Integración con tus sistemas existentes
                           </li>
                       </ul>
                   </div>
                   
               </div>
           </div>
       </section>  
     </div>
   );
 };

export default HerramientasGestionPage;
