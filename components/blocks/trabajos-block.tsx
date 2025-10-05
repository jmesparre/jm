import { TrabajosPage } from "@/components/blocks/blog8"

const trabajosData = {
  heading: "Trabajos",
  description:
    "Explora una selección de nuestros trabajos más recientes, donde combinamos diseño innovador y desarrollo robusto para crear soluciones digitales que generan impacto. Cada proyecto es un testimonio de nuestra dedicación a la calidad y a los resultados tangibles.",
  posts: [
    {
      id: "nutricion-sanshine",
      title: "Nutricion Sanshine",
      summary: "Desarrollo completo de una plataforma web para nutricionista con CMS personalizado, módulo de pedidos con notificaciones automáticas por correo y sistema de pagos integrado (transferencia, Mercado Pago y PayPal).",
      label: "Diseño Web & Branding",
      author: "React, NextJS",
      published: "1 Oct 2025",
      url: "https://www.nutricionsanshine.com/",
      image: "/sanshine-trabajo.png",
      altText: "Sitio web y branding para Nutricion Sanshine",
      tags: ["Diseño Web", "Branding", "UX/UI"],
    },
    {
      id: "proyecto-arami",
      title: "Estudio Arami: Diseño Web y Branding",
      summary: "Desarrollo de un sitio web moderno y una identidad de marca cohesiva para Estudio Arami, enfocándonos en una experiencia de usuario intuitiva y un diseño visual atractivo que refleja su profesionalismo.",
      label: "Diseño Web & Branding",
      author: "Wordpress",
      published: "20 Dic 2024",
      url: "https://estudioarami.com/",
      image: "/arami-trabajo2.png",
      altText: "Sitio web y branding para Estudio Arami",
      tags: ["Diseño Web", "Branding", "UX/UI"],
    },
    {
      id: "fundacion-coyuyo",
      title: "Fundacion Coyuyo: ",
      summary: "Creación de una plataforma interactiva para organización que se dedica a promover el uso del cannabis medicinal en Latinoamérica, destacando como el primer centro médico cannábico de la región.",
      label: "Desarrollo Web",
      author: "NextJS",
      published: "01 Feb 2025",
      url: "https://coyuyo.vercel.app/",
      image: "/coyuyo-trabajo.png",
      altText: "Plataforma de turismo para San Luis",
      tags: ["Branding", "Desarrollo Web", "Ilustraciones"],
    },
     
    {
      id: "proyecto-barrio-privado",
      title: "Herramienta de gestion para barrio privado",
      summary: "Herramienta de gestión para un barrio privado con usuarios, control de acceso, tecnológica que facilita la comunicación y la gestion de expensas facilitando la comunicación entre los propietarios y el administracion.",
      label: "Herramienta de Geastion",
      author: "NextJS, Supabase",
      published: "25 Sep 2023",
      url: "https://ayni-five.vercel.app/",
      image: "/ayni-trabajo2.png",
      altText: "Herramienta de gestion barrio privado",
      tags: ["Sistema de Gestion", "Desarrollo Web", "Back-end"],
    },
    {
      id: "proyecto-kesug",
      title: "Tienda Virtual Kesug",
      summary: "Implementación de una tienda virtual completa con pasarelas de pago integradas, gestión de inventario y optimización para conversiones, brindando una plataforma de ventas eficiente y escalable.",
      label: "Tienda Virtual",
      author: "Wordpress , \ Woocommerce",
      published: "18 Nov 2024",
      url: "https://tiendadigital.kesug.com",
      image: "/kesug-trabajo.png",
      altText: "Sistema de venta para Kesug",
      tags: ["E-commerce", "Desarrollo Web", "Automatización"],
    },
    {
      id: "proyecto-tienda-virtual",
      title: "E-commerce para Tienda de San Luis",
      summary: "Implementación de una tienda virtual completa con pasarelas de pago integradas, ventas por whataspp y optimización para conversiones, brindando una plataforma de ventas eficiente y escalable.",
      label: "E-commerce",
      author: "Tienda San Luis",
      published: "25 Sep 2023",
      url: "https://sanluis.vercel.app/",
      image: "/tienda-trabajo.png",
      altText: "Tienda virtual de ropa online",
      tags: ["E-commerce", "Desarrollo Web", "Pagos Online"],
    }
  ],
};

function TrabajosBlock() {
  return <TrabajosPage {...trabajosData} />;
}

export { TrabajosBlock };
