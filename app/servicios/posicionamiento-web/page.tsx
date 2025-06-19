import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'

const PosicionamientoWebPage = () => {
  return (
    <div>
      <section className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
          <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">
                  <div className="lg:col-span-2 order-2 md:order-1">
                      <div className="md:pr-6 lg:pr-0">
                          <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Posicionamiento Web SEO: Aumenta tu Visibilidad Online</h2>
                          <p className="mt-6 text-sm ">Implementamos estrategias de SEO (Search Engine Optimization) para mejorar el ranking de tu sitio web en los motores de búsqueda. A través de la optimización de palabras clave, contenido, estructura técnica y construcción de enlaces, aumentamos tu visibilidad orgánica, atraemos tráfico y te ayudamos destacar en las busquedas en google.</p>
                      </div>
                      <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                          <li>
                              <Mail className="size-5" />
                              Auditorías SEO completas y personalizadas
                          </li>
                          <li>
                              <Zap className="size-5" />
                              Optimización On-Page y Off-Page
                          </li>
                          <li>
                              <Activity className="size-5" />
                              Monitoreo constante y reportes de rendimiento
                          </li>
                          <li>
                              <DraftingCompass className="size-5" />
                              Estrategias de link building y autoridad de dominio
                          </li>
                      </ul>
                  </div>
                  <div className="relative  p-3 lg:col-span-3 order-1 md:order-2">
                      <div className="aspect-76/59 relative">
                          <Image src="/servicio-posicionamiento-web-seo-argentina.png" alt="Servicio de Posicionamiento Web SEO en Argentina" width={1207} height={929} />
                      </div>
                  </div>
              </div>
          </div>
      </section>  
    </div>
  );
};

export default PosicionamientoWebPage;
