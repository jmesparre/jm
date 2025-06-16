import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'


export default function ServiciosPage() {
  return (
    <section id="servicios" className="servicios ">
      
      <div className="px-[5%] sm:px-[5%] md:px-[12%] mt-[30vh] pb-10">
        <h1 className="text-5xl md:text-5xl lg:text-6xl mb-6 text-pretty font-title">Servicios</h1>
        <p className="font-base ml-[0%]  sm:ml-[39%] mt-[0px] sm:mt-[-140px] md:mt-[-130px] xl:mt-[-120px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam.
        </p>
      </div>

       <div>
             <section className="py-12  text-background">
                 <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
                     <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">                 
                        <div className="lg:col-span-2">
                            <div className="md:pr-6 lg:pr-0">
                                <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Sistemas de pago E-commerce</h2>
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
