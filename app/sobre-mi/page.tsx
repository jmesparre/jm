"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const SobreMiPage = () => {
  const { t } = useTranslation();
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
                              {t('about_me_title')}
                            </h1>
                                <p className="text-sm  w-[95%] pt-4 ">
                                     {t('about_me_text')}
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
