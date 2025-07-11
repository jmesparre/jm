"use client";

import Image from 'next/image'; 
import { PackageOpen, Globe, PenTool, ChartNetwork, CircleDollarSign, Cog } from 'lucide-react'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


export default function ServiciosPage() {
  const { t } = useTranslation();
  return (
    <section id="servicios" className="servicios"> 
       <div>
             <section className="py-[22vh] sm:py-[33vh] text-background min-h-[110vh] sm:min-h-[140vh]">
                 <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
                     <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">                 
                        <div className="lg:col-span-2 order-2 md:order-1">
                            <div className="md:pr-6 lg:pr-0 pt-[-160px]">
                                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-title">{t('services_title')}</h2>
                                <p className="mt-6 text-sm xl:text-md ">{t('services_text')}</p>
                            </div>
                            <ul className="mt-8 text-md divide-y border-y">
                                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-muted px-2">
                                    <Link href="/servicios/desarrollo-web" className="flex items-center gap-3 w-full">
                                        <Globe className="size-5" />
                                        <span>{t('web_development_nav')}</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-muted px-2">
                                    <Link href="/servicios/servicios-de-diseno" className="flex items-center gap-3 w-full">
                                        <PenTool className="size-5" />
                                        <span>{t('design_services_nav')}</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-muted px-2">
                                    <Link href="/servicios/e-commerce" className="flex items-center gap-3 w-full">
                                        <CircleDollarSign className="size-5" />
                                        <span>{t('ecommerce_nav')}</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-muted px-2">
                                    <Link href="/servicios/posicionamiento-web" className="flex items-center gap-3 w-full">
                                        <ChartNetwork className="size-5" />
                                        <span>{t('seo_nav')}</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-muted px-2">
                                    <Link href="/servicios/herramientas-de-gestion" className="flex items-center gap-3 w-full">
                                        <Cog className="size-5" />
                                        <span>{t('management_tools_nav')}</span>
                                    </Link>
                                </li>
                                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-muted px-2">
                                    <Link href="/servicios/precios-fijos" className="flex items-center gap-3 w-full">
                                        <PackageOpen className="size-5" />
                                        <span>{t('fixed_prices_nav')}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="relative  p-3 lg:col-span-3 order-1 md:order-2">
                          <div className="w-[80%] m-auto relative">
                              <Image priority={true} src="/desarrollador-web-juan-manuel-esparre2.png" alt="Juan Manuel Esparré - Desarrollador Web, Diseño Web, E-commerce, SEO, CRM, CMS" width={1207} height={929} />
                          </div>
                      </div>
                     </div>
                 </div>
             </section>  
           </div>
    </section>
  );
}
