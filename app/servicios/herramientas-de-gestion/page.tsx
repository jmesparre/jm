"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Users, Briefcase, Workflow, Plug } from 'lucide-react'
import { useTranslation } from 'react-i18next';


const HerramientasGestionPage = () => {
  const { t } = useTranslation();
  return (
     <div>
       <section className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
           <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
               <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">
                <div className="relative  p-3 lg:col-span-3">
                       <div className="aspect-76/59 relative">
                           <Image priority={true} src="/servicio-herramientas-de-gestion-empresas.png" alt="Herramientas de Gestión Empresarial CRM y CMS a Medida" width={1207} height={929} />
                       </div>
                   </div>
                   <div className="lg:col-span-2">
                       <div className="md:pr-6 lg:pr-0">
                           <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">{t('gestion_title')}</h2>
                           <p className="mt-6 text-sm ">{t('gestion_text')}</p>
                       </div>
                       <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                           <li>
                               <Users className="size-5" />
                               {t('gestion_feature1')}
                               </li>
                           <li>
                               <Briefcase className="size-5" />
                               {t('gestion_feature2')}
                            </li>
                           <li>
                               <Workflow className="size-5" />
                               {t('gestion_feature3')}
                           </li>
                           <li>
                               <Plug className="size-5" />
                               {t('gestion_feature4')}
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
