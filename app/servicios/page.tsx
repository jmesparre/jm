import Image from 'next/image'; // Import Image from next/image
import { PackageOpen, Globe, PenTool, ChartNetwork, CircleDollarSign, Cog } from 'lucide-react'


export default function ServiciosPage() {
  return (
    <section id="servicios" className="servicioss"> 
       <div>
             <section className="py-[22vh] sm:py-[33vh] text-background min-h-[140vh]">
                 <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
                     <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">                 
                        <div className="lg:col-span-2">
                            <div className="md:pr-6 lg:pr-0 pt-[-160px]">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-title pb-2">Servicios</h2>
                                <p className="mt-6 text-sm xl:text-md ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aperiam architecto facilis error earum quasi, totam, in impedit quam repudiandae minima. Deleniti eum provident impedit voluptatibus deserunt ratione est dolore. Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae veniam laboriosam pariatur.</p>
                            </div>
                            <ul className="mt-8 text-lg divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                                <li>
                                    <Globe className="size-5" />
                                   <a href="/servicios/desarrollo-web">Desarrollo Web</a> 
                                </li>
                                <li>
                                    <PenTool className="size-5" />
                                    <a href="/servicios/servicios-de-diseño">Servicios de Diseño</a> 
                                </li>
                                <li>
                                    <CircleDollarSign className="size-5" />
                                    <a href="/servicios/e-commerce">Tiendas Virtuales</a> 
                                </li>
                                <li>
                                    <ChartNetwork className="size-5" />
                                    <a href="/servicios/posicionamiento-web">Posicionamiento Web</a> 
                                </li>
                                 <li>
                                    <Cog className="size-5" />
                                    <a href="/servicios/herramientas-de-gestion">Herramientas de gestion</a> 
                                </li>
                                <li>
                                    <PackageOpen className="size-5" />
                                    <a href="/servicios/precios-fijos">Paquetes para Negocios</a> 
                                </li>
                            </ul>
                        </div>                        
                        <div className="relative  p-3 lg:col-span-3">
                          <div className="aspect-76/59 relative">
                              <Image src="/desarrollador-web-juan-manuel-esparre.png" alt="payments illustration light" width={1207} height={929} />
                          </div>
                      </div>
                     </div>
                 </div>
             </section>  
           </div>
    </section>
  );
}
