import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'


const ECommercePage = () => {
  return (
     <div>
       <section className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
           <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
               <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">
                <div className="relative  p-3 lg:col-span-3">
                       <div className="aspect-76/59 relative">
                           <Image src="/servicio-e-commerce-argentina.png" alt="Desarrollo de Tiendas Virtuales y E-commerce en Argentina" width={1207} height={929} />
                       </div>
                   </div>
                   <div className="lg:col-span-2">
                       <div className="md:pr-6 lg:pr-0">
                           <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Desarrollo de Tiendas Virtuales (E-commerce)</h2>
                           <p className="mt-6 text-sm">Creamos tiendas virtuales robustas y seguras que te permiten vender tus productos o servicios online de manera eficiente. Desde la configuración de pasarelas de pago hasta la gestión de inventario y la optimización para conversiones, diseñamos soluciones de e-commerce que impulsan tus ventas y expanden tu negocio.</p>
                       </div>
                       <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                           <li>
                               <Mail className="size-5" />
                               Integración de pasarelas de pago seguras
                           </li>
                           <li>
                               <Zap className="size-5" />
                               Optimización para altas conversiones y ventas
                           </li>
                           <li>
                               <Activity className="size-5" />
                               Gestión de productos e inventario simplificada
                           </li>
                           <li>
                               <DraftingCompass className="size-5" />
                               Diseño personalizado y experiencia de usuario intuitiva
                           </li>
                       </ul>
                   </div>
                   
               </div>
           </div>
       </section>  
     </div>
   );
 };

export default ECommercePage;
