"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'
import { animate, spring } from 'motion'


const ServiciosDeDisenoPage = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      animate(
        boxRef.current,
        { scale: [0, 1] },
        { type: spring, stiffness: 170, damping: 20 }
      );
    }
  }, []);

  return (
    <div>
      <section className="py-[22vh] text-background min-h-[140vh]">
          <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                  <div className="lg:col-span-2">
                      <div className="md:pr-6 lg:pr-0 ">
                          <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Servicios de Diseño Gráfico y UX/UI: Impacto Visual para tu Marca</h2>
                          <p className="mt-6 text-sm ">Transformamos tus ideas en experiencias visuales impactantes. Ofrecemos servicios de diseño gráfico y UX/UI que abarcan desde la creación de identidad de marca y logotipos, hasta el diseño de interfaces de usuario intuitivas y atractivas para sitios web y aplicaciones. Nuestro enfoque se centra en la estética y la funcionalidad para conectar con tu audiencia.</p>
                      </div>
                      <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                          <li>
                              <Mail className="size-5" />
                              Diseño de identidad de marca y logotipos
                          </li>
                          <li>
                              <Zap className="size-5" />
                              Diseño UX/UI para interfaces intuitivas
                          </li>
                          <li>
                              <Activity className="size-5" />
                              Creación de material gráfico para web y redes sociales
                          </li>
                          <li>
                              <DraftingCompass className="size-5" />
                              Prototipado y wireframing para experiencias de usuario
                          </li>
                      </ul>
                  </div>
                  <div className="relative  p-3 lg:col-span-3">
                      <div ref={boxRef} className="aspect-76/59 relative">
                          <Image src="/servicio-diseño-grafico-argentina.png" alt="Servicios de Diseño Gráfico y UX/UI en Argentina" width={1207} height={929} />
                      </div>
                  </div>
              </div>
          </div>
      </section>  
    </div>
  );
};

export default ServiciosDeDisenoPage;
