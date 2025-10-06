"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { DollarSign, Zap, Monitor, LifeBuoy } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const PreciosFijosPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
          <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">
                  <div className="lg:col-span-2 order-2 md:order-1">
                      <div className="md:pr-6 lg:pr-0">
                          <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">{t('precios_fijos_title')}</h2>
                          <p className="mt-6 text-sm ">
                            {t('precios_fijos_text')}
                          </p>
                      </div>
                      <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                          <li>
                              <DollarSign className="size-5" />
                              {t('precios_fijos_feature1')}
                          </li>
                          <li>
                              <Zap className="size-5" />
                              {t('precios_fijos_feature2')}
                          </li>
                          <li>
                              <Monitor className="size-5" />
                              {t('precios_fijos_feature3')}
                          </li>
                          <li>
                              <LifeBuoy className="size-5" />
                              {t('precios_fijos_feature4')}
                          </li>
                      </ul>
                  </div>
                  <div className="relative  p-3 lg:col-span-3 order-1 md:order-2">
                      <div className="aspect-76/59 relative align-middle">
                          <Image priority={true} src="/servicios-web-precios-fijos.png" alt="Paquetes Web con Precios Fijos para Emprendedores y Empresas" width={400} height={400} />
                      </div>
                  </div>
              </div>
          </div>
      </section>  
    </div>
  );
};

export default PreciosFijosPage;
