
import Image from 'next/image'; // Import Image from next/image
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'


const ServiciosDeDisenoPage = () => {

  return (
    <div>
      <section className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
          <div className="mx-auto px-[5%] sm:px-[5%] md:px-[11%]">
              <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-11">
                  <div className="lg:col-span-2  order-2 md:order-1">
                      <div className="md:pr-6 lg:pr-0 ">
                          <h2 className="text-4xl font-semibold sm:text-3xl lg:text-4xl">Servicios de Diseño Gráfico. Impacto Visual para tu Marca</h2>
                          <p className="mt-6 text-sm ">
                            Transformo tus ideas en experiencias visuales. Servicios de diseño gráfico y UX/UI que abarcan desde la creación de logotipos, ilustraciones, hasta el diseño de interfaces de usuario, intuitivas y atractivas para sitios web y aplicaciones. 
                          </p>
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
                              Diseño de aplicaciones móviles
                          </li>
                      </ul>
                  </div>
                  <div className="relative p-3 lg:col-span-3  order-1 md:order-2">
                      <div className="aspect-76/59 relative">
                          <Image priority={true} src="/servicio-diseño-grafico-argentina.png" alt="Servicios de Diseño Gráfico y UX/UI en Argentina" width={1207} height={929} />
                      </div>
                  </div>
              </div>
          </div>
      </section>  
    </div>
  );
};

export default ServiciosDeDisenoPage;
