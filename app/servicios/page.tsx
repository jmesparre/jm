"use client";

import { HoverSliderDemo } from "@/components/blocks/animated-slideshow-demo";

export default function ServiciosPage() {
  return (
    <section id="servicios" className="servicios ">
      
      <div className="px-[5%] sm:px-[5%] md:px-[12%] mt-[40vh] pb-10">
        <h1 className="text-5xl md:text-5xl lg:text-6xl mb-6 text-pretty">Servicios</h1>
        <p className="font-base ml-[0%]  sm:ml-[39%] mt-[0px] sm:mt-[-140px] md:mt-[-130px] xl:mt-[-120px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam.
        </p>
      </div>
     <HoverSliderDemo />

      <div className="px-[5%] sm:px-[5%] md:px-[12%] mt-10">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li><a href="/servicios/desarrollo-web">Desarrollo Web</a></li>
          <li><a href="/servicios/servicios-de-diseno">Servicios de Diseño</a></li>
          {/* Add more services here */}
        </ul>
      </div>
    </section>
  );
}
