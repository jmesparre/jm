"use client";

export default function Home() {
  return (
    <main>
      <section id="home" className="hero h-[101vh] relative pt-20">
        <div className="absolute bottom-0 items-end justify-between p-4 md:pl-10 w-full"> {/* Changed layout */}
          <div className="flex flex-col items-start w-full"> {/* Text block */}
            <h1 className="text-3xl md:text-6xl font-bold mb-2">Desarrollador Web</h1>
            <div className="w-full w-line bg-verde mb-4"></div> {/* White line */}
            <h2 className=" text-xs md:text-base mb-6 sm:w-2/3 md:w-2/3">Hola mi nombre es Juan Manuel, creo soluciones basadas en la necesidad del clientes, creo soluciones basadas en la necesidad del clientes<i className="blink pl-1">_</i></h2>
          </div>
          <div className="absolute bottom-10 right-4 "> {/* Button block */}
            <button className="border cursor-pointer border-3 py-2 px-6 rounded-md hover:bg-[#9ec8f3] hover:text-[#0A433A] transition-colors duration-300">$ Ver Precios</button>
          </div>
        </div>
      </section>
    </main>
  );
}
