import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'


const HerramientasGestionPage = () => {
  return (
     <div>
       <section className="py-26 md:py-36 text-background">
           <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
               <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                <div className="relative  p-3 lg:col-span-3">
                       <div className="aspect-76/59 relative">
                           <Image src="/servicio-herramientas-de-gestion-empresas.png" alt="payments illustration light" width={1207} height={929} />
                       </div>
                   </div>
                   <div className="lg:col-span-2">
                       <div className="md:pr-6 lg:pr-0">
                           <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Herramientas de Gestion</h2>
                           <p className="mt-6 text-base ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aperiam architecto facilis error earum quasi, totam, in impedit quam repudiandae minima. Deleniti eum provident impedit voluptatibus deserunt ratione est dolore. Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae veniam laboriosam pariatur.</p>
                       </div>
                       <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                           <li>
                               <Mail className="size-5" />
                               Email and web support
                           </li>
                           <li>
                               <Zap className="size-5" />
                               Fast response time
                           </li>
                           <li>
                               <Activity className="size-5" />
                               Menitoring and analytics
                           </li>
                           <li>
                               <DraftingCompass className="size-5" />
                               Architectural reviewww
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
