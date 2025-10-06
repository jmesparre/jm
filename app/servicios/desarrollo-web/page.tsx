"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { LifeBuoy, Rocket, BarChart, Building } from 'lucide-react'
import { useTranslation } from 'react-i18next';


const DesarrolloWebPage = () => {
  const { t } = useTranslation();


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
                           <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">{t('desarrollo_web_title')}</h2>
                           <p className="mt-6 text-sm ">
                           {t('desarrollo_web_text')}
                           </p>
                       </div>
                       <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                           <li>
                               <LifeBuoy className="size-5" />
                               {t('desarrollo_web_feature1')}
                           </li>
                           <li>
                               <Rocket className="size-5" />
                               {t('desarrollo_web_feature2')}
                           </li>
                           <li>
                               <BarChart className="size-5" />
                               {t('desarrollo_web_feature3')}
                           </li>
                           <li>
                               <Building className="size-5" />
                               {t('desarrollo_web_feature4')}
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
