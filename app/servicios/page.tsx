import Image from 'next/image'; // Import Image from next/image
import { PackageOpen, Globe, PenTool, ChartNetwork, CircleDollarSign, Cog } from 'lucide-react'


export default function ServiciosPage() {
  return (
    <section id="servicios" className="servicios"> 
       <div>
             <section className="py-[22vh] sm:py-[33vh] text-background min-h-[140vh]">
                 <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
                     <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">                 
                        <div className="lg:col-span-2">
                            <div className="md:pr-6 lg:pr-0 pt-[-160px]">
                                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-title">Servicios de Desarrollo y Diseño Web</h2>
                                <p className="mt-6 text-sm xl:text-md ">En Juan Manuel Esparré, ofrecemos una gama completa de servicios digitales para potenciar tu negocio. Desde el desarrollo de sitios web a medida y tiendas virtuales, hasta estrategias de posicionamiento SEO y herramientas de gestión empresarial. Descubre cómo podemos transformar tu presencia online y ayudarte a alcanzar tus objetivos.</p>
                            </div>
                            <ul className="mt-8 text-md divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                                <li>
                                    <Globe className="size-5" />
                                   <a href="/servicios/desarrollo-web">Desarrollo Web</a> 
                                </li>
                                <li>
                                    <PenTool className="size-5" />
                                    <a href="/servicios/servicios-de-diseno">Servicios de Diseño</a> 
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
                                    <a href="/servicios/herramientas-de-gestion">Herramientas de Gestión</a> 
                                </li>
                                <li>
                                    <PackageOpen className="size-5" />
                                    <a href="/servicios/precios-fijos">Precios Fijos</a> 
                                </li>
                            </ul>
                        </div>                        
                        <div className="relative  p-3 lg:col-span-3">
                          <div className="aspect-76/59 relative">
                              <Image src="/desarrollador-web-juan-manuel-esparre.png" alt="Juan Manuel Esparré - Desarrollador Web, Diseño Web, E-commerce, SEO, CRM, CMS" width={1207} height={929} />
                          </div>
                      </div>
                     </div>
                 </div>
             </section>  
           </div>
    </section>
  );
}
